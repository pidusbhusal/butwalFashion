import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";

function Cart() {
  const { cart, quantity, clearItems } = useContext(CartContext);
  return (
    <div>
      <button className="add-to-card mt-4  text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-all bg-red-600">
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
