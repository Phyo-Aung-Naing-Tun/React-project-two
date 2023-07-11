import React, { useEffect, useRef, useState } from "react";
import { CurstonStateContext } from "../context/Context";
import Cart from "./Cart";
import { Link, useNavigate } from "react-router-dom";
import CheckModal from "./CheckModal";

const CartDetail = () => {
  const {
    state: { carts },
    dispatch,
  } = CurstonStateContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const detailRef = useRef();

  useEffect(() => {
    totaling();
  }, []);
  const totaling = () => {
    const total = carts.reduce((pv, iv) => iv.price + pv, 0);
    setTotalPrice(total);
  };

  if (carts.length) {
    return (
      <div ref={detailRef} className=" p-8 ">
        {carts.map((cart) => (
          <Cart
            key={cart.id}
            setTotalPrice={setTotalPrice}
            totaling={totaling}
            totalPrice={totalPrice}
            {...cart}
          />
        ))}
        <hr />

        <div className=" flex justify-around py-3">
          <h2 className=" total-price font-bold text-xl text-blue-500 ">
            Total :
          </h2>
          <h2 className=" font-bold text-xl text-blue-500 ">
            $ {totalPrice.toFixed(2)}
          </h2>
        </div>

        <hr />
        <CheckModal totalPrice={totalPrice} detailRef={detailRef} />

        <div className="w-[50%] text-center mx-auto mt-6">
          <button
            onClick={() => {
              dispatch({ type: "REMOVE_ALL" });
            }}
            className=" btn w-[100%] md:w-[30%] bg-red-500 text-white font-bold  tracking-wider"
          >
            Clear All
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" flex flex-col justify-center items-center h-screen bg-gray-300">
        <Link
          style={{ transition: "0.7s" }}
          className=" active:scale-[1] hover:scale-[1.1] bg-red-400 text-white p-3 rounded-md font-bold tracking-wide shadow-md text-xl leading-10 text-center"
          to={"/"}
        >
          <h1>Your cart is empty</h1>
          <h1>Plz... go and fill it </h1>
        </Link>
      </div>
    );
  }
};

export default CartDetail;
