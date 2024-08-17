import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";

function ProductPage() {
  const [productCount, setProductCount] = useState(1);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [itemSelected, setItemSelected] = useState(false);
  const { addToCart, cart, quantity } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  const handleAddToCart = () => {
    setItemSelected(true);
    const addItem = { ...product };

    addToCart({ product, productQuantity: productCount });
    console.log(cart);
    console.log(quantity);
  };

  return (
    <div className="container mx-auto w-full p-4 pt-2">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-sm text-gray-500">{product.category}</p>
          <h2 className="text-2xl font-bold text-gray-700">{product.price}</h2>
          <div className="flex items-center mb-2">
            <label
              htmlFor="quantity"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <select
              id="quantity"
              value={productCount}
              onChange={(event) =>
                setProductCount(parseInt(event.target.value))
              }
              className="ml-2 pl-2 pr-8 py-1 text-sm text-gray-700 border border-gray-300 rounded-md"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          {itemSelected && <p>Item Selected</p>}
          {cart.length}
          <h4 className="text-lg font-bold mt-4 text-gray-900">Description</h4>
          <p className="text-sm text-gray-600">{product.description}</p>
          {cart.map((item) => {
            <p>{JSON.stringify(item)}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
