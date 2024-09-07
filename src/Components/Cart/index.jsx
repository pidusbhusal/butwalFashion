import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/cartContext";
import CartCard from "../CartCard";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, totalPrice, clearItems, removeSingleItem } =
    useContext(CartContext);
  const [subTotal, setSubTotal] = useState(0);

  return (
    <div className="max-w-[80%] m-auto mt-5 ">
      <div className="  flex gap-3  flex-wrap  ">
        <div className="md:flex-grow  flex-grow-0  bg-white mt-5 py-[1rem] md:py-sm md:px-sm px-[0.5rem] rounded-md shadow">
          <h2 className="capitalize text-xl font-semibold mb-4">Cart </h2>

          {cart.length > 0 ? (
            <>
              <div className="flex flex-col w-full gap-4">
                {cart.map((item, index) => (
                  <CartCard
                    image={item.product.image}
                    quantity={item.quantity}
                    title={item.product.title}
                    ItemOrderID={item.ItemOrderID}
                    removeSingleItem={removeSingleItem}
                    price={item.product.price}
                  />
                ))}
              </div>
              <div className="flex justify-end mt-8">
                <button
                  onClick={clearItems}
                  className="add-to-card text-white py-2 px-6 rounded-md bg-red-600 hover:bg-red-700 transition-all"
                >
                  Clear Cart
                </button>
              </div>
            </>
          ) : (
            <div
              className="text-center text-gray-500 mt-8"
              onClick={clearItems}
            >
              <p>Your cart is currently empty.</p>
            </div>
          )}
        </div>
        <div className="md:flex-grow  md:w-fit w-full flex flex-col border-2 h-fit border-gray-100  bg-white mt-5 py-[1rem] md:py-sm md:px-sm px-[0.5rem] rounded-md shadow">
          <h2 className="capitalize text-xl font-semibold mb-4">Sub Total </h2>

          <div className="py-sm border-2 border-x-0 mt-4">
            <p className="text-sm font-semibold px-sm justify-between gap-10 flex w-full">
              <p className="">Sub Total </p>{" "}
              <p className="text-green-700 ">{totalPrice} </p>
            </p>
            <p className="text-sm font-semibold px-sm justify-between gap-10 mt-4 flex w-full">
              <p className="">Shipping Fee </p>{" "}
              <p className="text-green-700  ">100</p>
            </p>
            <p className="text-sm font-semibold px-sm justify-between mt-4 flex gap-10 w-full">
              <p className="">Taxes</p>{" "}
              <p className="text-green-700  ">{0.13 * totalPrice}</p>
            </p>
          </div>
          <div className="py-sm border-b-2 ">
            <p className="text-sm font-semibold px-sm justify-between flex w-full ">
              <p className="">Grand Total </p>
              <p className="text-green-700 ">{totalPrice} </p>
            </p>
          </div>
          <div className="mx-auto">
            <button className="mt-8 mx-auto md:w-fit w-full bg-black text-white py-[1rem] px-sm rounded-md hover:bg-gray-800 transition-all">
              <Link to={"/"}>Finish Shopping</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
