import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <div>
      <Navbar />
      <Announcement />
      <h1 className="m-[20px]">{cat}</h1>
      {/* FilterContainer */}
      <div className="flex justify-between">
        {/* Filter */}
        <div className="mx-[20px] flex flex-col md:flex-row md:m-[20px] items-center">
          {/* FilterText */}
          <span className="text-[20px] font-medium  md:mr-[20px]">
            Filter Products:
          </span>
          <select
            name="color"
            onChange={handleFilters}
            className="p-[10px] my-[10px] md:my-[0px] md:mr-[20px]"
          >
            <option disabled defaultValue>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select
            name="size"
            onChange={handleFilters}
            className="p-[10px] my-[10px] md:my-[0px] md:mr-[20px]"
          >
            <option disabled defaultValue>
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
          <select
            onChange={(e) => setSort(e.target.value)}
            className="p-[10px] my-[10px] md:my-[0px] md:mr-[20px]"
          >
            <option defaultValue value="newest">
              Newest
            </option>
            <option value="asc">Price(asc)</option>
            <option value="desc">Price(desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
