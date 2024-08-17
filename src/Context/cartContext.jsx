import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const addToCart = ({ product, productQuantity }) => {
    setCart([...cart, product]);
    setQuantity([...quantity,productQuantity ])

  };
  return (
    <CartContext.Provider value={{ quantity, cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
