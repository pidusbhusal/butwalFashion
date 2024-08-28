import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";

export default function CartCard({ image, title, quantity, ItemOrderID }) {
  const { removeSingleItem } = useContext(CartContext);
  const handleClick = () => {
    removeSingleItem(ItemOrderID);
  };
  return (
    <div className="flex items-center  px-sm py-sm  w-fit p-4 bg-white rounded-lg shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-20 h-20  rounded-md object-contain"
      />
      <div className="ml-4">
        <p>{ItemOrderID}</p>
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-600">Quantity: {quantity}</p>
      </div>
      <button className="mt-auto  text-red-700" onClick={handleClick}>
        Remove Item
      </button>
    </div>
  );
}
