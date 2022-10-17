import Slider from "../components/Slider";
import React from "react";
import Banner from "../components/Banner";
import BrandSale from "../components/BrandSale";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import HotSale from "../components/HotSale";
import ShopeeMall from "../components/ShopeeMall";
import SpecialSale from "../components/SpecialSale";
import Topbar from "../components/Topbar";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FBFBFB]">
        <Topbar />
      </div>
      <div className="flex flex-col items-center bg-white">
        <Banner />
      </div>
      <div className="flex flex-col items-center bg-[#FBFBFB]">
        <div className=" flex flex-col items-center ">
          <img
            src="https://cf.shopee.tw/file/fc90c57f4d8f59902e2708e00abd8b17"
            alt="small banner"
            className="py-5"
          />
          <BrandSale />
          <Categories />
          <SpecialSale />
          <img
            src="https://cf.shopee.tw/file/37c5ad0b55bbb935480a34bb2d3171f4"
            alt="small banner"
            className="main_card"
          />
          <ShopeeMall />
          <HotSale />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
