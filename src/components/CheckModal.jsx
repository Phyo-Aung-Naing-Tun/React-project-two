import React, { useEffect, useState } from "react";
import { BsShop } from "react-icons/bs";

const CheckModal = ({ detailRef, totalPrice }) => {
  const [ti, setTi] = useState([]);
  const [quentity, setQuentity] = useState([]);
  const [price, setPrice] = useState([]);

  const showModal = () => {
    const titles = detailRef.current.querySelectorAll(".cart-title");
    const cartSinglePrices =
      detailRef.current.querySelectorAll(".cart-single-price");
    const cartCounts = detailRef.current.querySelectorAll(".cart-count");
    const titlesForModal = [...titles].map((title) => title.innerText);
    const quentityForModal = [...cartCounts].map((count) => count.innerText);

    const pricesForModal = [...cartSinglePrices].map((pr) => pr.innerText);
    setTi(titlesForModal);
    setQuentity(quentityForModal);
    setPrice(pricesForModal);
    window.my_modal_1.showModal();
  };

  return (
    <div>
      <div className="w-[50%] text-center mx-auto mt-6">
        <button
          onClick={showModal}
          className=" btn w-[100%] md:w-[30%] bg-blue-500 text-white font-bold  tracking-wider"
        >
          Check lists
        </button>
      </div>

      <dialog id="my_modal_1" className="modal ">
        <form method="dialog" className="modal-box ">
          <div className="flex justify-center align-middle font-bold text-center text-xl tracking-wide gap-3   text-blue-500 mb-3 items-center">
            <BsShop />

            <h1 className="">My Shop</h1>
          </div>
          <h3 className="font-bold text-center text-md tracking-wide italic  text-gray-500">
            Thanks for shopping with us.
          </h3>
          <p className="py-4 flex justify-center">
            <div className="">
              {ti?.map((t) => (
                <h1
                  className="border-b md:columns-2   border-blue-300 text-gray-700 tracking-wide  text-xs md:text  py-2 md:px-5 border-solid "
                  key={Math.random()}
                >
                  {t.substring(0, 16)}...
                </h1>
              ))}

              <h1 className=" border-blue-300 text-blue-500 font-bold    text-xs md:text  py-2 md:px-5 border-solid ">
                Total :
              </h1>
            </div>
            <div>
              {quentity?.map((q) => (
                <h1
                  className="border-b border-blue-300 text-gray-700  text-xs md:text px-2  py-2 md:px-3 border-solid "
                  key={Math.random()}
                >
                  {q}
                </h1>
              ))}

              <h1 className=" border-blue-300 text-blue-500 font-bold  text-xs md:text px-2  py-2 md:px-3 border-solid ">
                {quentity.reduce((pv, cv) => pv + Number(cv), 0)}
              </h1>
            </div>
            <div>
              {price?.map((p) => (
                <h1
                  className="border-b border-blue-300 text-gray-700  text-xs md:text px-2 py-2 md:px-3 border-solid "
                  key={Math.random()}
                >
                  {p}
                </h1>
              ))}
              <h1 className=" font-bold border-blue-300 text-blue-500  px-2  text-xs md:text  py-2 md:px-3 border-solid ">
                ${totalPrice.toFixed(2)}
              </h1>
            </div>
          </p>

          <div className="modal-action">
            <button className="btn btn-sm text-white bg-red-500">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default CheckModal;
