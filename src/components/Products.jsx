// import Pagination from "../components/Pagination";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { popularProducts } from "../data";
import Product from "./Product";
const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [page, setPage] = useState("1");

  const handleChange = (e) => {
    console.log(e.target.value);
    setPage(e.target.value);
  };
  console.log(page);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [cat]);

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

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts(() =>
        products.sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <div className="p-[20px] flex flex-wrap justify-between">
      {cat
        ? filteredProducts.map((product) => (
            <Product product={product} key={product._id} />
          ))
        : products
            // .slice(0, 8)
            .map((product) => <Product product={product} key={product._id} />)}
      {/* <Pagination /> */}
    </div>
  );
};

export default Products;
