import Slider from "../components/Slider";
import React from "react";
import Banner from "../components/Banner";
import BrandSale from "../components/BrandSale";
import Categories from "../components/Categories";
import SpecialSale from "../components/SpecialSale";

const Home = () => {
  return (
    <div className="px-20 bg-gray-100">
      <Banner />
      <img
        src="https://cf.shopee.tw/file/fc90c57f4d8f59902e2708e00abd8b17"
        alt="small banner"
        className="py-5"
      />
      <BrandSale />
      <Categories />
      <SpecialSale />
      {/* <Slider /> */}
    </div>
  );
};

export default Home;
