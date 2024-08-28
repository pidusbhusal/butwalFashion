import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";

export default function RelatedProduct({ RelatedProducts }) {
  return (
    <div className="homeSection  bg-white mt-5 py-sm px-sm rounded-md shadow">
      <h2 className="capitalize text-xl font-semibold mb-4">Related Product</h2>
      <div className="grid   relative h-fit grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {RelatedProducts?.map((product) => (
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
