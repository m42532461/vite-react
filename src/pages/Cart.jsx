import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
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
          <div className="flex-[3]">
            {/* Product */}
            <div className="flex justify-between">
              {/* ProductDetail */}
              <div className="flex-[2] flex">
                <img
                  className="w-[200px]"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt="product"
                />
                {/* Details */}
                <div className="p-[20px] flex flex-col justify-around">
                  {/* ProductName */}
                  <span className="">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  {/* ProductName */}
                  <span className="">
                    <b>ID:</b> 93813718293
                  </span>
                  {/* ProductColor */}
                  <div className="w-[20px] h-[20px] rounded-full bg-black"></div>
                  {/* ProductSize */}
                  <span>
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              {/* PriceDetail */}
              <div className="flex-1 flex items-center justify-center flex-col">
                {/* ProductAmountContainer */}
                <div className="flex items-center">
                  <AddIcon />
                  {/* ProductAmount */}
                  <div className="text-[24px] m-[5px]">2</div>
                  <RemoveIcon />
                </div>
                {/* ProductPrice */}
                <div className="text-[30px] font-extralight">$ 30</div>
              </div>
            </div>

            <hr className="bg-[#eee] h-[1px]" />

            {/* Product */}
            <div className="flex justify-between">
              {/* ProductDetail */}
              <div className="flex-[2] flex">
                <img
                  className="w-[200px]"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt="product"
                />
                {/* Details */}
                <div className="p-[20px] flex flex-col justify-around">
                  {/* ProductName */}
                  <span className="">
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  {/* ProductName */}
                  <span className="">
                    <b>ID:</b> 93813718293
                  </span>
                  {/* ProductColor */}
                  <div className="w-[20px] h-[20px] rounded-full bg-black"></div>
                  {/* ProductSize */}
                  <span>
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              {/* PriceDetail */}
              <div className="flex-1 flex items-center justify-center flex-col">
                {/* ProductAmountContainer */}
                <div className="flex items-center">
                  <AddIcon />
                  {/* ProductAmount */}
                  <div className="text-[24px] m-[5px]">2</div>
                  <RemoveIcon />
                </div>
                {/* ProductPrice */}
                <div className="text-[30px] font-extralight">$ 30</div>
              </div>
            </div>
          </div>
          {/* Summary */}
          <div className="flex-1 border-[0.5px] border-gray-300 rounded-[10px] p-[20px] h-[50vh]">
            <h1 className=" font-extralight">ORDER SUMMARY</h1>
            {/* SummaryItem */}
            <div className="my-[30px] flex justify-between">
              <span>Subtotal</span>
              <span>$ 80</span>
            </div>
            {/* SummaryItem */}
            <div className="my-[30px] flex justify-between">
              <span>Estimated Shipping</span>
              <span>$ 5.90</span>
            </div>
            {/* SummaryItem */}
            <div className="my-[30px] flex justify-between">
              <span>Shipping Discount</span>
              <span>$ -5.90</span>
            </div>
            {/* SummaryItem */}
            <div className="my-[30px] flex justify-between font-medium text-[24px]">
              <span>Total</span>
              <span>$ 80</span>
            </div>
            <button className="w-full h-12 bg-black text-white font-semibold">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
