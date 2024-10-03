import { createContext, useState, useEffect } from "react";
import { json, redirect } from "react-router-dom";
import { db } from "../firebase/firebase"; // Import Firestore database
import useAuth from "./authUserContext"; // Custom hook to access user authentication state
import { doc, setDoc, getDoc } from "firebase/firestore"; // Import Firestore functions

export const CartContext = createContext(); // Create a Context for the Cart

export default function CartContextProvider({ children }) {
  const { currentUser, userLoggedIn } = useAuth(); // Get current user and login status from context

  // State to manage the shopping cart
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // State to track the total price of items in the cart

  // Function to generate a unique ID for each cart item
  function uuid() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
      (
        +c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
      ).toString(16)
    );
  }

  // Function to clear items from the cart
  const clearItems = async () => {
    setCart([]); // Clear cart state
    console.log("item cleared");
    if (currentUser) {
      try {
        const cartRef = doc(db, "carts", currentUser.uid); // Reference to the cart document in Firestore
        await setDoc(cartRef, { items: [] }); // Store the updated cart in Firestore
        console.log("Cart updated in Firestore");
      } catch (error) {
        console.error("Error saving cart to firebase", error); // Log error if saving fails
      }
    }
  };

  // Function to remove a single item from the cart by its ID
  const removeSingleItem = async (key) => {
    const filteredCart = cart.filter((item) => item.ItemOrderID !== key); // Filter out the item to be removed
    setCart(filteredCart); // Update cart state
    if (currentUser) {
      try {
        const cartRef = doc(db, "carts", currentUser.uid); // Reference to the cart document in Firestore
        await setDoc(cartRef, { items: filteredCart }); // Store the updated cart in Firestore
        console.log("Cart updated in Firestore");
      } catch (error) {
        console.error("Error saving cart to firebase", error); // Log error if saving fails
      }
    }
  };

  const fetchCartData = async () => {
    if (currentUser) {
      try {
        console.log("Fetching cart data for user:", currentUser.uid); // Debug log
        const cartRef = doc(db, "carts", currentUser.uid); // Reference to the user's cart document
        const cartDoc = await getDoc(cartRef); // Fetch the document

        if (cartDoc.exists()) {
          const data = cartDoc.data(); // Get data from the document
          console.log("Fetched cart data:", data.items); // Log fetched data
          setCart(data.items || []); // Set cart state to items from Firestore
        } else {
          console.log("No cart found for this user."); // Log if no document exists
          setCart([]); // Reset cart if no document exists
        }
      } catch (error) {
        console.error("Error fetching cart from Firebase:", error); // Log error
      }
    } else {
      console.log("No user logged in."); // Log if no user is logged in
      setCart([]); // Reset cart if user is not logged in
    }
  };
  // Function to update the quantity of an item in the cart
  const updateCount = async ({ orderId, newQuantity }) => {
    const updatedCart = cart.map((item) => {
      if (item.ItemOrderID === orderId) {
        return { ...item, quantity: newQuantity }; // Update the item's quantity
      }
      return item; // Return unchanged item
    });

    setCart(updatedCart); // Update the local cart state
    console.log("Updated Cart:", updatedCart);
    console.log("New Quantity:", newQuantity);

    if (currentUser) {
      try {
        const cartRef = doc(db, "carts", currentUser.uid); // Reference to the cart document in Firestore
        await setDoc(cartRef, { items: updatedCart }); // Store the updated cart in Firestore
        console.log("Cart updated in Firestore");
      } catch (error) {
        console.error("Error saving cart to firebase", error); // Log error if saving fails
      }
    }
  };

  // Function to add an item to the cart
  const addToCart = async ({ product, productQuantity }) => {
    const updatedCart = [
      ...cart,
      { product: product, ItemOrderID: uuid(), quantity: productQuantity }, // Create new cart item
    ];

    setCart(updatedCart); // Update cart state

    if (currentUser) {
      try {
        const cartRef = doc(db, "carts", currentUser.uid); // Reference to the cart document in Firestore
        await setDoc(cartRef, { items: updatedCart }); // Store the updated cart in Firestore
        console.log("Cart updated in Firestore");
      } catch (error) {
        console.error("Error saving cart to firebase", error); // Log error if saving fails
      }
    }
  };

  // Function to calculate total price
  const CounttotalPrice = () => {
    const TotalPrice = cart.map((item) => {
      setTotalPrice(
        (prevState) => prevState + item.quantity * item.product.price
      ); // Update total price
    });
  };

  // Effect to update total price and sync with localStorage whenever cart changes
  useEffect(() => {
    setTotalPrice(0); // Reset total price before recalculating
    CounttotalPrice(); // Calculate total price
  }, [cart]); // Dependency array: run effect whenever cart changes

  useEffect(() => {
    fetchCartData();
  }, [currentUser]);
  // Return the CartContext Provider
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearItems,
        removeSingleItem,
        updateCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
