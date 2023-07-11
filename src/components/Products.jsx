import React from "react";
import { CurstonStateContext } from "../context/Context";
import Product from "./Product";
const Products = () => {
  const {
    state: { products },
  } = CurstonStateContext();

  return (
    <div className=" flex  flex-wrap my-5 gap-10 justify-center">
      {products?.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
