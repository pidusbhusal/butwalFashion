import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";

export default function RelatedProduct({ category }) {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/" + category)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);
  const [relatedproducts, setRelatedProducts] = useState([]);

  return (
    <div className="homeSection  bg-white mt-5 py-sm md:px-sm px-[0.5rem] rounded-md drop-shadow-md">
      <h2 className="capitalize text-xl font-semibold mb-4">Related Product</h2>
      <div className="grid   relative h-fit grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {relatedproducts?.map((product) => (
          <ProductCard
            id={product.id}
            title={product.title}
            price={product.product}
            category={product.category}
            image={product.image}
            rating={product.rating}
          />
        ))}
        {console.log(RelatedProduct)}
      </div>
    </div>
  );
}
