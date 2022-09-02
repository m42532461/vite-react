import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="p-[20px]">
        <h1 className=" font-light text-center">YOUR BAG</h1>
        {/* Top */}
        <div className="flex items-center justify-between p-[20px]">
          <button className="p-[10px] font-semibold cursor-pointer ">
            CONTINUE SHOPPING
          </button>
          {/* TopTexts */}
          <div className="">
            <span className="underline cursor-pointer mx-[10px]">
              Shopping Bag(2)
            </span>
            <span className="underline cursor-pointer mx-[10px]">
              Your Wishlist(0)
            </span>
          </div>
          <button className="p-[10px] font-semibold cursor-pointer ">
            CHECKOUT NOW
          </button>
        </div>
        {/* Bottom */}
        <div className="flex justify-between">
          {/* Info */}
          <div className="flex-3"></div>
          {/* Summary */}
          <div className="flex-1"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
