import { createContext, useState, useEffect } from "react";
import { json } from "react-router-dom";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  function uuid() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
      (
        +c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
      ).toString(16)
    );
  }

  const clearItems = () => {
    localStorage.removeItem("cart");
    setCart([]);
    console.log("item cleared");
  };

  const removeSingleItem = (key) => {
    const filteredCart = cart.filter((item) => item.ItemOrderID !== key);
    setCart(filteredCart);
  };

  const updateCount = ({ orderId, newQuanity }) => {
    const updatedCart = cart.map((item) => {
      if (item.ItemOrderID == orderId) {
        return { ...item, quantity: newQuanity };
      }
      return item;
    });
    setCart(updatedCart);
    // Save updated cart and quantity to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const addToCart = ({ product, productQuantity }) => {
    const updatedCart = [
      ...cart,
      { product: product, ItemOrderID: uuid(), quantity: productQuantity },
    ];

    setCart(updatedCart);

    // Save updated cart and quantity to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    // Optional: Sync localStorage with state whenever cart or quantity changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearItems, removeSingleItem, updateCount }}
    >
      {children}
    </CartContext.Provider>
  );
}
