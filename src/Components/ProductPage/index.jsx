import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";
import relatedProduct from "../RelatedProduct";

function ProductPage() {
  const [productCount, setProductCount] = useState(1);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [itemSelected, setItemSelected] = useState(false);
  const { addToCart, cart, quantity } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
        cart.find((items) => items.id == product.id);
      });
  }, []);

  const handleAddToCart = () => {
    setItemSelected(true);
    const addItem = { ...product };

    addToCart({ product, productQuantity: productCount });
    console.log(cart);
    console.log(quantity);
  };

  return (
    <div className="container max-w-[80%] mt-16 mx-auto w-full py-lg px-[3rem] drop-shadow-md rounded-md bg-white ">
      <div className="flex  flex-col md:flex-row gap-8">
        <div className="w-1/2  image-container">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96  m-auto  object-contain rounded-md "
          />
        </div>
        <div className="w-1/2">
          <p className="text-sm text-gray-500 uppercase">{product.category}</p>

          <h1 className="text-xl mt-1 font-semibold text-gray-700">
            {product.title}
          </h1>
          <h2 className="text-2xl mt-2 font-bold text-gray-900">
            $ {product.price}
          </h2>
          <div className=" mt-4 items-center mb-2">
            <label htmlFor="quantity" className="block mb-1   text-gray-600">
              Quantity
            </label>
            <select
              id="quantity"
              value={productCount}
              onChange={(event) =>
                setProductCount(parseInt(event.target.value))
              }
              className=" text-gray-700 border pl-[1rem] border-gray-300 rounded py-[0.7rem] w-20 "
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          {itemSelected && <p className="text-green-700 mt-4">Item added</p>}
          <button
            className="add-to-card mt-1 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-all"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>

          <h4 className="text-xm font-semibold mt-4 text-gray-900 mb-2">
            Description
          </h4>
          <p className=" text-gray-600">{product.description}</p>
          {cart.map((item) => {
            <p>{item}</p>;
          })}
        </div>
      </div>
      <relatedProduct />
    </div>
  );
}

export default ProductPage;
