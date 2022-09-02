import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const Product = ({ product }) => {
  return (
    <div className="flex flex-1 m-[5px] min-w-[280px] h-[350px] items-center justify-center bg-[#f5fdfd] relative group">
      {/* Circle */}
      <div className="rounded-full w-[200px] h-[200px] bg-white absolute"></div>
      {/* Image */}
      <img src={product.img} className="h-3/4 z-[2]" />
      {/* Info */}
      <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] z-[3] items-center justify-center flex opacity-0 group-hover:opacity-100 duration-500 ease-linear cursor-pointer">
        {/* Icon */}
        <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center m-[10px] hover:bg-[#e9f5f5] hover:scale-110 ease-linear duration-500">
          <ShoppingCartOutlinedIcon />
        </div>
        {/* Icon */}
        <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center m-[10px] hover:bg-[#e9f5f5] hover:scale-110 ease-linear duration-500">
          <SearchOutlinedIcon />
        </div>
        {/* Icon */}
        <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center m-[10px] hover:bg-[#e9f5f5] hover:scale-110 ease-linear duration-500">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
