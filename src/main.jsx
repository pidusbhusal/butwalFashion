import React from "react";
import ReactDOM from "react-dom/client";
import CartContextProvider from "./Context/cartContext.jsx";
import { AuthProvider } from "./Context/authUserContext.jsx";
import "./index.css";
import Home from "./Components/Home/index.jsx";
import Cart from "./Components/Cart/index.jsx";
import Navbar from "./Components/Navbar/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./Components/ProductPage/index.jsx";
import LogInForm from "./Components/LogInForm/index.jsx";
import SignUp from "./Components/SignUpForm/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/products/:id",
    element: <ProductPage />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/LogInForm",
    element: <LogInForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartContextProvider>
        <Navbar />
        <RouterProvider router={router} />
      </CartContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
