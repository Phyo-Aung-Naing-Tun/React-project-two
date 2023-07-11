import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Product.css";
import { CurstonStateContext } from "../context/Context";

const Product = (props) => {
  const { id, title, image, price } = props;
  const nav = useNavigate();
  const { dispatch } = CurstonStateContext();
  return (
    <div
      onClick={() => {
        nav("/productDetail", { state: id });
      }}
      className="border product-card cursor-pointer hover:scale-[1.05] border-gray-100 p-3 shadow-md w-[250px] rounded overflow-hidden"
    >
      <img src={image} className=" w-[250px] h-[200px] object-contain" />
      <div>
        <h2 className=" my-2 tracking-wide font-bold">
          {title.substring(0, 20)}....
        </h2>
        <h2 className=" mb-3 font-semibold">$ {price}</h2>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: "ADD_TO_CART", payload: props });
          }}
          style={{ transition: "0.6s" }}
          className=" active:bg-gray-600 active:scale-[1] block hover:scale-[1.05]  mb-2 pb-2 pt-1 font-semibold tracking-wide rounded ms-12 px-5 bg-blue-500 text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
