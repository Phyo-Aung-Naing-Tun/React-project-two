import React, { useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { CurstonStateContext } from "../context/Context";
import { Link } from "react-router-dom";
const Cart = ({ id, image, price, title, setTotalPrice }) => {
  const {
    state: { carts },
    dispatch,
  } = CurstonStateContext();
  const [count, setCount] = useState(1);

  const [singlePrice, setSinglePrice] = useState(price);

  const removing = () => {
    const filterForRemove = carts.filter((cart) => cart.id !== id);
    dispatch({ type: "REMOVE_CART", payload: filterForRemove });

    setTotalPrice((pv) => pv - singlePrice);
  };

  const increasing = () => {
    setCount((pv) => pv + 1);
    setSinglePrice((pv) => pv + price);
    setTotalPrice((pv) => pv + price);
  };
  const decreasing = () => {
    if (count > 1) {
      setCount((pv) => pv - 1);
      setSinglePrice((pv) => pv - price);
      setTotalPrice((pv) => pv - price);
    } else {
      setCount(1);
    }
  };

  return (
    <div
      style={{ transition: "0.6s" }}
      className=" hover:scale-[1.05] py-3 mb-7 flex justify-center items-center gap-10 "
    >
      <div className=" flex  flex-wrap items-center gap-4 lg:gap-8 w-[50%]">
        <img src={image} className="w-[100px] object-cover" />
        <div>
          <h2 className="font-bold italic cart-title text-blue-500 pb-3">
            {title.substring(0, 30)}....
          </h2>

          <h2 className=" cart-single-price font-bold mb-3">
            $ {singlePrice.toFixed(2)}
          </h2>
          <div className=" flex gap-4 items-center">
            <button
              onClick={removing}
              style={{ transition: "0.6s" }}
              className="  hover:scale-[1.1] text-sm rounded-md px-2 pt-1 pb-2 bg-red-500 text-white font-semibold "
            >
              Remove
            </button>
            <Link to="/">
              <button
                style={{ transition: "0.6s" }}
                className="  hover:scale-[1.1] text-sm rounded-md px-2 pt-1 pb-2 bg-blue-500 text-white font-semibold "
              >
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-3 justify-center items-center">
        <button
          style={{ transition: "0.6s" }}
          onClick={increasing}
          className=" hover:scale-[1.3]  text-blue-500 font-extrabold"
        >
          <BiSolidUpArrow />
        </button>
        <button className=" cart-count  text-blue-500 text-lg font-bold">
          {count}
        </button>
        <button
          onClick={decreasing}
          style={{ transition: "0.6s" }}
          className=" hover:scale-[1.3]  text-blue-500 font-extrabold"
        >
          <BiSolidDownArrow />
        </button>
      </div>
    </div>
  );
};

export default Cart;
