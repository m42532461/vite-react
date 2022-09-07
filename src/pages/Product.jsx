import React, { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
const Product = () => {
  const location = useLocation();
  const id = location.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 0 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    // update cart
  };

  return (
    <div className="">
      <Navbar />
      <Announcement />
      <div className="flex p-[10px] md:p-[50px] md:flex-row flex-col">
        {/* ImgContainer */}
        <div className="flex-1 ">
          <img
            className="w-full md:h-[90vh] h-[40vh] object-cover "
            src={product.img}
            alt=""
          />
        </div>
        {/* InfoContainer */}
        <div className="flex-1 md:px-[50px] px-[10px]">
          {/* Title */}
          <h1 className="text-3xl font-extralight">{product.title}</h1>
          {/* Desc */}
          <p className="my-[20px]">{product.desc}</p>
          {/* Price */}
          <span className="text-[40px] font-thin">$ {product.price}</span>
          {/* FilterContainer */}
          <div className="flex justify-between md:w-1/2 w-full my-[30px]">
            {/* Filter */}
            <div className="flex items-center">
              {/* FilterTitle */}
              <span className="text-[20px] font-extralight">Color</span>
              {/* FilterColor */}
              {product.color?.map((c) => (
                <div
                  className={`w-[20px] h-[20px] rounded-full bg-${c} mx-[5px] cursor-pointer`}
                  key={c}
                  onClick={() => setColor(c)}
                ></div>
              ))}
              {/* FilterSize */}
            </div>
            {/* Filter */}
            <div className="flex items-center">
              {/* FilterTitle */}
              <span className="text-[20px] font-extralight">Size</span>
              <select className="ml-[10px] p-[5px]">
                {/* FilterSizeOption */}
                {product.size?.map((s) => (
                  <option key={s} onClick={() => setSize(s)}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* AddContainer */}
          <div className="flex items-center md:w-1/2 w-full justify-between">
            {/* AmountContainer */}
            <div className="flex items-center font-bold">
              {/* Remove */}
              <RemoveIcon onClick={() => handleQuantity("dec")} />
              {/* Amount */}
              <span className="w-[30px] h-[30px] rounded-[10px] border border-solid border-teal-600 flex items-center justify-center mx-[5px]">
                {quantity}
              </span>
              {/* Add */}
              <AddIcon onClick={() => handleQuantity("inc")} />
            </div>
            <button
              className="p-[15px] border-2 border-solid border-teal-600 bg-white cursor-pointer hover:bg-[#f8f4f4]"
              onClick={handleClick}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
