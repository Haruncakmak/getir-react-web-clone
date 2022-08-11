import React from "react";

const Category = ({ category: { id, image, title } }) => {
  return (
    <a
      href="#"
      className="flex flex-col group gap-y-2 items-center text-center p-4 transition hover:bg-purple-50 trackink-tight"
    >
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded border border-gray-200"
      ></img>
      <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-color">
        {title}
      </span>
    </a>
  );
};

export default Category;
