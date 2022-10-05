import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { getProducts } from "../redux/apiCalls";
import { publicRequest } from "../requestMethods";
const Products = ({ cat, filters, sort, page }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts(dispatch, cat, page, sort);
  }, [page, sort, cat, dispatch]);
  const pro = useSelector((state) => state.product.products);
  const isLoading = useSelector((state) => state.product.isLoading);

  // const { products, isLoading } = useSelector((state) => state.product);
  // useEffect(() => {
  //   console.log(filters);
  //   console.log(filteredProducts);
  //   setFilteredProducts(
  //     products.filter((item) =>
  //       Object.entries(filters).every(([key, value]) =>
  //         item[key].includes(value)
  //       )
  //     )
  //   );
  // }, [cat, filters, products]);
  useEffect(() => {
    if (cat || page || filters || sort) {
      // setFilteredProducts(
      //   pro.filter((item) =>
      //     Object.entries(filters).every(([key, value]) =>
      //       item[key].includes(value)
      //     )
      //   )
      // );
    } else {
      const getProducts = async () => {
        try {
          const res = await publicRequest.get(
            cat
              ? `/products?category=${cat}&page=${page}&sort=${sort}`
              : `/products?page=${page}&sort=${sort}`
          );
          setProducts(res?.data?.data);
        } catch (error) {
          console.log(error);
        }
      };
      getProducts();
    }
  }, [cat]);
  return isLoading ? (
    <CircularProgress />
  ) : (
    <React.Fragment>
      <div className="p-[20px] flex flex-wrap justify-evenly">
        {cat
          ? pro
              .filter((item) =>
                Object.entries(filters).every(([key, value]) =>
                  item[key].includes(value)
                )
              )
              .map((product) => <Product product={product} key={product._id} />)
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
