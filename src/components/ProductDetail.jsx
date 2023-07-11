import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CurstonStateContext } from "../context/Context";

const ProductDetail = () => {
  const { state } = useLocation();
  const [product, setProduct] = useState({});
  const { dispatch } = CurstonStateContext();

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${state}`);
    const data = await api.json();
    setProduct(data);
  };
  return (
    <div className=" flex flex-wrap justify-center items-center p-10 gap-16 min-h-screen">
      <img
        src={product.image}
        className=" w-[250px] h-[300px] rounded object-contain"
      />

      <div className="lg:w-[40%]">
        <h2 className=" text-2xl text-blue-500 italic fount-bold tracking-wide mb-3 ">
          {product.title}
        </h2>
        <span className="  capitalize text-sm px-2 pb-1 rounded-md tracking-wide font-semibold text-white bg-gray-500">
          {product.category}
        </span>
        <p className="my-3 tracking-wider text-gray-500 text-lg leading-7">
          {product.description}
        </p>
        <h2 className=" font-bold mb-3">$ {product.price}</h2>
        <div className=" flex justify-between items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "ADD_TO_CART", payload: product });
            }}
            style={{ transition: "0.5s" }}
            className=" block  active:scale-[1] hover:scale-[1.1]  pb-2 pt-1 font-semibold tracking-wide rounded px-5 bg-blue-500 text-white"
          >
            Add to Cart
          </button>
          <Link to={"/"}>
            <span
              style={{ transition: "0.5s" }}
              className=" block active:scale-[1] hover:scale-[1.1] font-bold text-blue-500 underline"
            >
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
