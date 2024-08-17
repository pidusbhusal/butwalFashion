import React, { useState } from "react";

function ProductCard({ id, title, price, category, image }) {
  return (
    <div className="group">
      <div
        className="w-64 p-[1] bg-white border border-gray-200 rounded-md hover:shadow-md transition-all"
        key={id}
      >
        <div className="image-container">
          <img
            src={image}
            alt={`image of ${title}`}
            width={240}
            height={240}
            className="object-contain w-full h-11"
          />
        </div>

        <div className="gap-2 mt-6">
          <p className="text-sm text-gray-600">{category.toUpperCase()}</p>
          <p className="text-sm text-gray-900 line-clamp-1">{title}</p>
          <p className="text-lg mt-2 font-bold text-gray-900">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
