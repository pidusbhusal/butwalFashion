import { useContext, useEffect } from "react";
import { CartContext } from "../../Context/cartContext";
import CartCard from "../CartCard";

function Cart() {
  const { cart, quantity, clearItems, removeSingleItem } =
    useContext(CartContext);

  return (
    <div className="  bg-white mt-5 py-[1rem] md:py-sm md:px-sm px-[0.5rem] rounded-md shadow">
      <div>
        <h2 className="capitalize text-xl font-semibold mb-4">
          Cart ({cart.length})
        </h2>
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
          <div className="text-center text-gray-500 mt-8" onClick={clearItems}>
            <p>Your cart is currently empty.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
