import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";
import RelatedProduct from "../RelatedProduct";

function ProductPage() {
  const [productCount, setProductCount] = useState(1);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [itemSelected, setItemSelected] = useState(false);
  const { addToCart, cart, quantity } = useContext(CartContext);
  const [relatedproducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
        cart.find((items) => items.id == product.id);
      });
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/" + product.category)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAddToCart = () => {
    setItemSelected(true);
    const addItem = { ...product };
    addToCart({ product, productQuantity: productCount });
    console.log(cart);
    console.log(quantity);
  };

  return (
    <div className="container max-w-[80%] mt-8 mx-auto w-full">
      <div className=" py-sm px-[3rem] drop-shadow-md rounded-md bg-white ">
        <div className="flex items-center  flex-col md:flex-row gap-8">
          <div className="w-1/2  image-container">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96  m-auto  object-contain rounded-md "
            />
          </div>
          <div className="w-1/2 border-gray-100 rounded-md px-sm py-sm border-2">
            <p className="text-sm text-gray-500 uppercase">
              {product.category}
            </p>

            <h1 className="text-xl mt-1 font-semibold text-gray-700">
              {product.title}
            </h1>
            {/* rating */}
            {product.rating && (
              <p className="text-xs mt-2 text-gray-600 flex">
                <svg
                  class="w-4 h-4 text-yellow-500 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                {product.rating.rate} out of 5 &nbsp;&nbsp;
                <span className="font-bold underline">
                  {product.rating.count} reviews
                </span>
              </p>
            )}

            <h2 className="text-2xl mt-5 font-bold text-gray-900">
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
      </div>
      <RelatedProduct RelatedProducts={relatedproducts} />
    </div>
  );
}

export default ProductPage;
