import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";

export default function RelatedProduct({ category, productID }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/" + category)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, [, productID]);
  return (
    <div className="homeSection  bg-white mt-5 py-sm px-sm rounded-md shadow">
      <h2 className="capitalize text-xl font-semibold mb-4">Related Product</h2>
      <div className="grid   relative h-fit grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products ? (
          products.map((product) => (
            <Link
              to={` products/${product.id}`}
              key={product.id}
              
              className="h-full"
            >
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                image={product.image}
                rating={product.rating}
                className="bg-white shadow-md rounded p-4"
              />
            </Link>
          ))
        ) : (
          <p>Loading</p>
        )}
        {console.log(products)}
      </div>
    </div>
  );
}
