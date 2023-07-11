import React from "react";
import { BsShop } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { CurstonStateContext } from "../context/Context";

const Nav = () => {
  const {
    setSearch,
    state: { carts },
  } = CurstonStateContext();

  const inputHundaler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className=" sticky top-0 bg-white shadow z-10 gap-5 flex flex-wrap justify-around p-4 items-center">
      <Link to={"/"} className="flex items-center gap-3">
        <BsShop
          style={{ transition: "0.5s" }}
          className="  active:scale-[1] hover:scale-[1.2] text-3xl text-blue-600 cursor-pointer"
        />
        <span className=" font-bold text-xl text-blue-600 cursor-pointer">
          My Shop
        </span>
      </Link>

      <div className=" flex gap-3 items-center">
        <input
          onChange={inputHundaler}
          type="text"
          className=" outline-none border-gray-400 border bg-gray-300  py-1 px-2 rounded shadow"
        />
        <Link to={"/cartDetail"}>
          <div
            style={{ transition: "0.5s" }}
            className=" active:scale-[1] hover:scale-[1.1] relative"
          >
            <button className=" justify-center flex items-center gap-2   pb-2 pt-1  font-semibold tracking-wide rounded  px-5 bg-blue-500 text-white">
              Cart
              <GiShoppingCart />
            </button>
            <span className=" absolute left-20 bottom-6 bg-red-600 justify-center   text-white font-bold flex w-6 h-6 rounded-[100%]  ">
              {carts.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
