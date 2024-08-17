import React from "react";
import ReactDOM from "react-dom/client";
import CartContextProvider from "./Context/cartContext.jsx";

import "./index.css";
import Home from "./Components/Home/index.jsx";
import Cart from "./Components/Cart/index.jsx";
import Navbar from "./Components/Navbar/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./Components/ProductPage/index.jsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <Navbar />
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
