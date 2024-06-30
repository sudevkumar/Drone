import React, { useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import ResponiveNavBarr from "./ResponiveNavBarr";
import { useDarkContext } from "../../context/DardMode";

const Navbar = () => {
  const [on, setOn] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const { setDark, dark } = useDarkContext();
  const changeNavbarColor = () => {
    if (window.pageYOffset >= 540) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <div
        className={` hidden lg:flex bg-gradient-to-r from-[#020615] from-10% via-[#060D27] via-30% to-[#0A1237] to-90% h-[70px] ${
          showNavbar ? "fixed w-full z-40" : " relative"
        }`}
      >
        <div className=" w-[55%] h-full flex text-white items-center justify-center gap-3">
          <div className=" flex gap-2 h-full items-center cursor-pointer">
            <img
              src="https://silicon.createx.studio/assets/img/logo.svg"
              alt=""
              className=" h-[25px]"
            />
            <h1 className=" text-xl font-semibold">Silicon</h1>
          </div>
          <div className=" flex h-full items-center gap-1 cursor-pointer hover:text-[#6466f1]">
            <p className=" text-[14px]">Landings</p>
            <FaAngleDown size={10} />
          </div>

          <div className=" flex h-full items-center gap-1 cursor-pointer hover:text-[#6466f1]">
            <p className=" text-[14px]">Pages</p>
            <FaAngleDown size={10} />
          </div>

          <div className=" flex h-full items-center gap-1 cursor-pointer hover:text-[#6466f1]">
            <p className=" text-[14px]">Account</p>
            <FaAngleDown size={10} />
          </div>

          <div className=" flex h-full items-center gap-1 cursor-pointer hover:text-[#6466f1]">
            <p className=" text-[14px]">UI Kit </p>
          </div>

          <div className=" flex h-full items-center gap-1 cursor-pointer hover:text-[#6466f1]">
            <p className=" text-[14px]">Docs</p>
          </div>
        </div>

        <div className=" w-[45%] h-full flex text-white items-center justify-center gap-6">
          <div className=" flex gap-2">
            <p className="text-[14px]">Light</p>
            <button
              onClick={() => {
                setOn(!on);
                setDark(!dark);
              }}
              className={`${
                on ? "justify-end" : "justify-start"
              } bg-[#6466f1] w-[27px]  h-[15px] p-[2px] m-auto  rounded-full items-center flex transition duration-500 shadow-2xl`}
            >
              {!on ? (
                <span
                  className={`bg-gray-300 transition duration-500 rounded-full w-[11px] h-full m-0 p-0 shadow-xl`}
                ></span>
              ) : (
                <FaMoon size={"12px"} className=" rotate-180" />
              )}
            </button>
            <p className="text-[14px]">Dark</p>
          </div>

          <div className=" flex bg-[#6466f1] w-[100px] h-[30px] rounded-sm items-center justify-center gap-1">
            <IoCartOutline size={17} />
            <p className="text-[11px]">Buy now</p>
          </div>
        </div>
      </div>
      <ResponiveNavBarr />
    </>
  );
};

export default Navbar;
