import { createContext, useState, useEffect } from "react";
import { json } from "react-router-dom";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [quantity, setQuantity] = useState(() => {
    // Initialize quantity from localStorage
    const savedQuantity = localStorage.getItem("quantity");
    return savedQuantity ? JSON.parse(savedQuantity) : [];
  });

  const clearItems = () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("quantity");
    setCart([]);
    setQuantity([]);
    console.log("item cleared");
  };

  const removeSingleItem = (key) => {
    const newCart = cart.filter((item, index) => {
      index !== key;
    });
    const newQuantity = quantity.filter((quantities, index) => index !== key);
    setCart(newCart);
    setQuantity(newQuantity);
  };

  const addToCart = ({ product, productQuantity }) => {
    const updatedCart = [...cart, product];
    const updatedQuantity = [...quantity, productQuantity];

    setCart(updatedCart);
    setQuantity(updatedQuantity);

    // Save updated cart and quantity to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem("quantity", JSON.stringify(updatedQuantity));
  };

  useEffect(() => {
    // Optional: Sync localStorage with state whenever cart or quantity changes
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("quantity", JSON.stringify(quantity));
  }, [cart, quantity]);

  return (
    <CartContext.Provider
      value={{ quantity, cart, addToCart, clearItems, removeSingleItem }}
    >
      {children}
    </CartContext.Provider>
  );
}
