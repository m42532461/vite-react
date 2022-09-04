import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <h1 className="m-[20px]">Dresses</h1>
      {/* FilterContainer */}
      <div className="flex justify-between">
        {/* Filter */}
        <div className="mx-[20px] flex flex-col md:flex-row md:m-[20px] items-center">
          {/* FilterText */}
          <span className="text-[20px] font-medium  md:mr-[20px]">
            Filter Products:
          </span>
          <select className="p-[10px] my-[10px] md:my-[0px] md:mr-[20px]">
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className="p-[10px] my-[10px] md:my-[0px] md:mr-[20px]">
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        {/* Filter */}
        <div className="mx-[20px] flex flex-col md:flex-row md:m-[20px] items-center">
          {/* FilterText */}
          <span className="text-[20px] font-medium  md:mr-[20px]">
            Sort Products:
          </span>
          <select className="p-[10px] my-[10px] md:my-[0px] md:mr-[20px]">
            <option selected>Newest</option>
            <option>Price(asc)</option>
            <option>Price(desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
