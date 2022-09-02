import React from "react";
import { popularProducts } from "../data";
import Product from "./Product";
const Products = () => {
  return (
    <div className="p-[20px] flex flex-wrap justify-between">
      {popularProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
