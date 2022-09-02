import React from "react";

const CategoryItem = ({ item }) => {
  return (
    <div className="flex-1 m-[3px] h-[70vh] relative">
      {/* Image */}
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover "
      />
      {/* Info */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col">
        {/* title */}
        <h1 className="text-3xl font-bold text-white mb-[20px]">
          {item.title}
        </h1>
        {/* Button */}
        <button className="p-[10px] bg-white text-gray-500 cursor-pointer font-semibold">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
