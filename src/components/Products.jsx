import Pagination from "../components/Pagination";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
const Products = ({ cat, filters, sort, page }) => {
  const { products, isLoading } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const res = await axios.get(
  //         cat
  //           ? `http://localhost:5000/api/products?category=${cat}&page=${1}`
  //           : `http://localhost:5000/api/products?page=${2}`
  //       );
  //       setProducts(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getProducts();
  // }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);

  // useEffect(() => {
  //   if (sort === "newest") {
  //     setFilteredProducts(() =>
  //       products.sort((a, b) => a.createdAt - b.createdAt)
  //     );
  //   } else if (sort === "asc") {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => a.price - b.price)
  //     );
  //   } else {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => b.price - a.price)
  //     );
  //   }
  // }, [sort]);
  return isLoading ? (
    <CircularProgress />
  ) : (
    <React.Fragment>
      <div className="p-[20px] flex flex-wrap justify-evenly">
        {cat
          ? filteredProducts.map((product) => (
              <Product product={product} key={product._id} />
            ))
          : products
              .slice(0, 8)
              .map((product) => (
                <Product product={product} key={product._id} />
              ))}
      </div>
      <div className="justify-center items-center">
        <Pagination page={page} cat={cat} filters={filters} sort={sort} />
      </div>
    </React.Fragment>
  );
};

export default Products;
