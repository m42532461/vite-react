import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link, useNavigate } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { likeProduct } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
const Product = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addProduct({ ...product, quantity: 1, color, size }));
  };
  const handleLike = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <div
      className="flex flex-1 m-[5px] max-w-[350px] min-w-[280px] h-[350px] items-center justify-center bg-[#f5fdfd] relative group"
      onClick={(e) => {
        if (e.target.nodeName !== "svg") {
          navigate(`/product/${product._id}`);
        }
      }}
    >
      {/* Circle */}
      <div className="rounded-full w-[200px] h-[200px] bg-white absolute"></div>
      {/* Image */}
      <img src={product.img} className="h-3/4 z-[2]" />
      {/* Info */}
      <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] z-[3] items-center justify-center flex opacity-0 group-hover:opacity-100 duration-500 ease-linear cursor-pointer">
        {/* Icon */}
        <div
          className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center m-[10px] hover:bg-[#e9f5f5] hover:scale-110 ease-linear duration-500"
          onClick={handleAdd}
        >
          <ShoppingCartOutlinedIcon />
        </div>
        {/* Icon */}
        <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center m-[10px] hover:bg-[#e9f5f5] hover:scale-110 ease-linear duration-500">
          <Link to={`/product/${product._id}`}>
            <SearchOutlinedIcon />
          </Link>
        </div>
        {/* Icon */}
        <div
          className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center m-[10px] hover:bg-[#e9f5f5] hover:scale-110 ease-linear duration-500"
          onClick={handleLike}
        >
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
