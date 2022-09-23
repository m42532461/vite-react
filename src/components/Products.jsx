import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { getProducts } from "../redux/apiCalls";
const Products = ({ cat, filters, sort, page }) => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    getProducts(dispatch, cat, page, sort);
  }, [page, sort, cat]);

  useEffect(() => {
    console.log(filters);
    console.log(filteredProducts);
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [cat, filters, products]);

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
      <div className="justify-center items-center"></div>
    </React.Fragment>
  );
};

export default Products;
