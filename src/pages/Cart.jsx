import React, { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

// const KEY = process.env.REACT_APP_STRIPE;
const KEY =
  "pk_test_51LULmeCxYIepcDmTfw3UXZOIIuUWmEbgDU6rSd34WokgQIobYXCUdMuRD5F2ytKmYepatHRmBHV9pOB9nhn1iKOT00LhYwEpx1";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success", { data: res.data });
      } catch (error) {}
    };
    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, navigate, cart.total]);

  console.log(stripeToken);
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="md:p-[20px] p-[10px]">
        <h1 className=" font-light text-center">YOUR BAG</h1>
        {/* Top */}
        <div className="flex items-center justify-between p-[20px]">
          <button className="p-[10px] font-semibold cursor-pointer ">
            CONTINUE SHOPPING
          </button>
          {/* TopTexts */}
          <div className="hidden md:block">
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
        <div className="flex justify-between flex-col md:flex-row">
          {/* Info */}
          <div className="flex-[3]">
            {/* Product */}
            {cart.products.map((product) => (
              <div className="flex justify-between flex-col md:flex-row">
                {/* ProductDetail */}
                <div className="flex-[2] flex">
                  <img className="w-[200px]" src={product.img} alt="product" />
                  {/* Details */}
                  <div className="p-[20px] flex flex-col justify-around">
                    {/* ProductName */}
                    <span className="">
                      <b>Product:</b> {product.title}
                    </span>
                    {/* ProductName */}
                    <span className="">
                      <b>ID:</b> {product.id}
                    </span>
                    {/* ProductColor */}
                    <div className="w-[20px] h-[20px] rounded-full bg-black"></div>
                    {/* ProductSize */}
                    <span>
                      <b>Size:</b> {product.size}
                    </span>
                  </div>
                </div>
                {/* PriceDetail */}
                <div className="flex-1 flex items-center justify-center flex-col">
                  {/* ProductAmountContainer */}
                  <div className="flex items-center">
                    <AddIcon />
                    {/* ProductAmount */}
                    <div className="text-[24px] md:mx-[5px] my-[5px] mx-[15px]">
                      {product.quantity}
                    </div>
                    <RemoveIcon />
                  </div>
                  {/* ProductPrice */}
                  <div className="text-[30px] font-extralight mb-5 md:mb-0">
                    $ {product.price * product.quantity}
                  </div>
                </div>
              </div>
            ))}

            <hr className="bg-[#eee] h-[1px]" />
          </div>
          {/* Summary */}
          <div className="flex-1 border-[0.5px] border-gray-300 rounded-[10px] p-[20px] h-[50vh]">
            <h1 className=" font-extralight">ORDER SUMMARY</h1>
            {/* SummaryItem */}
            <div className="my-[30px] flex justify-between">
              <span>Subtotal</span>
              <span>$ {cart.total}</span>
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
              <span>$ {cart.total}</span>
            </div>
            <StripeCheckout
              name="Lama Shop"
              image=""
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button className="w-full h-12 bg-black text-white font-semibold">
                CHECKOUT NOW
              </button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
