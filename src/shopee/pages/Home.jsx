import React from "react";
import Banner from "../components/Banner";
import BrandSale from "../components/BrandSale";
import Categories from "../components/Categories";
import SpecialSale from "../components/SpecialSale";

const Home = () => {
  return (
    <div>
      <Banner />
      <img
        src="https://cf.shopee.tw/file/fc90c57f4d8f59902e2708e00abd8b17"
        alt="small banner"
      />
      <BrandSale />
      <Categories />
      <SpecialSale />
    </div>
  );
};

export default Home;
