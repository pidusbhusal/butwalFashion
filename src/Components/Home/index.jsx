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
      <div className="container  lg:max-w-[80%] mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <Crousel />
        {prodctCatagories.map((catagory) => (
          <div className="homeSection  bg-white mt-5 py-[1rem] md:py-sm md:px-sm px-[0.5rem] rounded-md shadow">
            <h2 className="capitalize text-xl font-semibold mb-4">
              {catagory}
            </h2>
            <div className="grid   relative h-fit grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products
                .filter((product) => product.category == catagory)
                .map((product) => (
                  <ProductCard
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    image={product.image}
                    rating={product.rating}
                    className="bg-white shadow-md rounded p-4"
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
