import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Context/cartContext";

export default function CartCard({
  image,
  title,
  quantity,
  price,
  ItemOrderID,
}) {
  const { removeSingleItem, updateCount } = useContext(CartContext);

  const handleClick = () => {
    removeSingleItem(ItemOrderID);
  };

  const handleProductCountChange = (e) => {
    setProductCount(parseInt(e.target.value));
    updateCount({ orderId: ItemOrderID, newQuanity: parseInt(e.target.value) });
  };

  const [productCount, setProductCount] = useState(quantity);

  return (
    
    <div className=" border-gray-100 border-2 relative h-fit  w-full flex items-start px-sm py-sm  p-4 bg-white rounded-lg ">
      <img
        src={image}
        alt={title}
        className="h-24 w-32 rounded-md object-contain"
      />
      <div className="ml-4">
        <p className="text-xs text-gray-500 mb-2">{ItemOrderID}</p>
        <h2 className=" text-base">{title}</h2>
        <p className="text-gray-600 text-sm">$ {price} ea</p>
        <div className="flex items-center justify-between ">
          <p className="text-gray-600">
            Quantity :
            <select
              id="quantity"
              value={productCount}
              onChange={handleProductCountChange}
              className=" text-gray-700 border ml-1 pl-[1rem] border-gray-300 rounded py-[0.7rem] md:w-20 w-full"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p className="font-semibold text-gray-600">
            {" "}
            Sub Total : {productCount * price}
          </p>
        </div>
        <div className="flex mt-4 ">
          <button
            className="  ml-auto px-[1rem] rounded  py-[0.5rem]  text-red-700 hover:bg-red-50"
            onClick={handleClick}
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
}
