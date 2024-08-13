import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="container max-w-[80%] mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold mb-4 text-center">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link to={`products/${product.id}`} key={product.id}>
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                image={product.image}
                className="bg-white shadow-md rounded p-4"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
