import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Product = () => {
  return (
    <div className="">
      <Navbar />
      <Announcement />
      <div className="flex">
        {/* ImgContainer */}
        <div className="flex-1 ">
          <img
            className="w-full h-[90vh] object-cover"
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt=""
          />
        </div>
        {/* InfoContainer */}
        <div className="flex-1 px-[50px]">
          {/* Title */}
          <h1 className="text-3xl font-extralight">Denim Jumpsuit</h1>
          {/* Desc */}
          <p className="my-[20px]">
            wepojfvpowejvopwjfvopwjfvoipcvo oierjfo refopgjre oierjfoire
            jofijreopif joierw foiejrwfoi eroif oiewr jfoier jvoierjvfoirej
            vorie oijer ofijeroifjreo jaop oi roeifjewoifjewroafp roieafoieawj
            foiaewj foiwejar foieawrjfeoirwfj{" "}
          </p>
          {/* Price */}
          <span className="text-[40px] font-thin">$ 20</span>
          {/* FilterContainer */}
          <div className="flex justify-between w-1/2 my-[30px]">
            {/* Filter */}
            <div className="flex items-center">
              {/* FilterTitle */}
              <span className="text-[20px] font-extralight">Color</span>
              {/* FilterColor */}
              <div className="w-[20px] h-[20px] rounded-full bg-black mx-[5px] cursor-pointer"></div>
              <div className="w-[20px] h-[20px] rounded-full bg-[darkblue] mx-[5px] cursor-pointer"></div>
              <div className="w-[20px] h-[20px] rounded-full bg-[gray] mx-[5px] cursor-pointer"></div>
              {/* FilterSize */}
            </div>
            {/* Filter */}
            <div className="flex items-center">
              {/* FilterTitle */}
              <span className="text-[20px] font-extralight">Size</span>
              <select className="ml-[10px] p-[5px]">
                {/* FilterSizeOption */}
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          {/* AddContainer */}
          <div className="flex items-center w-1/2 justify-between">
            {/* AmountContainer */}
            <div className="flex items-center font-bold">
              {/* Remove */}
              <RemoveIcon />
              {/* Amount */}
              <span className="w-[30px] h-[30px] rounded-[10px] border border-solid border-teal-600 flex items-center justify-center mx-[5px]">
                1
              </span>
              {/* Add */}
              <AddIcon />
            </div>
            <button className="p-[15px] border-2 border-solid border-teal-600 bg-white cursor-pointer hover:bg-[#f8f4f4]">
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
