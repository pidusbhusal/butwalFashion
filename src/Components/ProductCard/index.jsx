import React, { useState } from "react";

function ProductCard({ id, title, price, category, image, rating }) {
  return (
    <div className="group h-full">
      <div
        className=" pt-sm pb-[1rem] bg-white border h-full border-gray-200 rounded-md hover:shadow-md transition-all"
        key={id}
      >
        <div className="image-container">
          <img
            src={image}
            alt={`image of ${title}`}
            className="object-contain w-full h-40"
          />
        </div>

        <div className="gap-2 mt-6 px-[1rem]">
          <p className="text-xs mb-1 text-gray-600">{category.toUpperCase()}</p>
          <p className="text-lg  font-bold text-gray-900 ">$ {price}</p>
          <p className="text-sm font-semibold text-gray-600 line-clamp-2 ">
            {title}
          </p>
          <p className="text-xs mt-3 text-gray-600 flex">
            <svg
              class="w-4 h-4 text-yellow-500 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            {rating.rate} out of 5 &nbsp;&nbsp;
            <span className="font-bold underline">{rating.count} reviews</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
