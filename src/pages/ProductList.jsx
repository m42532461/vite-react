import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { getProducts } from "../redux/apiCalls";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ProductList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});

  const query = useQuery();
  const page = query.get("page") || 1;
  const sort = query.get("sort") || "newset";

  useEffect(() => {
    getProducts(dispatch, cat, page, sort);
  }, [page, sort, cat]);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const handleSort = (e) => {
    navigate(`${location.pathname}?sort=${e.target.value}&page=${page}`);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setFilters({});
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
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
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
          <button
            className=" hover:bg-teal-600 hover:text-white p-1 rounded-sm"
            onClick={handleClear}
          >
            CLEAR
          </button>
        </div>
        {/* Filter */}
        <div className="mx-[20px] flex flex-col md:flex-row md:m-[20px] items-center">
          {/* FilterText */}
          <span className="text-[20px] font-medium  md:mr-[20px]">
            Sort Products:
          </span>
          <select
            onChange={handleSort}
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
      <Products cat={cat} filters={filters} sort={sort} page={page} />
      <Pagination page={page} cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
