import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import { Link, useFetcher } from "react-router-dom";
import Crousel from "../Crousel";

function Home() {
  const [products, setProducts] = useState([]);
  const [prodctCatagories, setProductCatagories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setProductCatagories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="container  max-w-[80%] mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <Crousel />
        {prodctCatagories.map((catagory) => (
          <div className="homeSection  bg-white mt-5 py-sm px-sm rounded-md shadow">
            <h2 className="capitalize text-xl font-semibold mb-4">
              {catagory}
            </h2>
            <div className="grid   relative h-fit grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products
                .filter((product) => product.category == catagory)
                .map((product) => (
                  <Link
                    to={`products/${product.id}`}
                    key={product.id}
                    className="h-full"
                  >
                    <ProductCard
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      category={product.category}
                      image={product.image}
                      rating = {product.rating}
                      className="bg-white shadow-md rounded p-4"
                    />
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
