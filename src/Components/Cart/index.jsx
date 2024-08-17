import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import CartCard from "../CartCard";

function Cart() {
  const { cart, quantity, clearItems, removeSingleItem } =
    useContext(CartContext);

  return (
    <div className="max-w-[80%] m-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Your Shopping Cart
      </h1>
      {cart.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6">
            {cart.map((item, index) => (
              <CartCard
                image={item.image}
                quantity={quantity?.[index]}
                title={item.title}
                index={index}
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
  );
}

export default Cart;
