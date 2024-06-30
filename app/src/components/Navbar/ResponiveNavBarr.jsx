import React, { useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import DropDownLanding from "./DropDownLanding.jsx";
import { accounts, landing, pages } from "./navbarUtils";
import DropDownPages from "./DropDownPages.jsx";
import DropDownAccount from "./DropDownAccount.jsx";
import { useDarkContext } from "../../context/DardMode.js";

const ResponiveNavBarr = () => {
  const [on, setOn] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [dropDown, setDropDown] = useState(false);
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
    <div
      className={`bg-gradient-to-r from-[#020615] from-10% via-[#060D27] via-30% to-[#0A1237] to-90% h-[50px] flex  lg:hidden ${
        showNavbar ? "fixed w-full z-40 " : " relative"
      }`}
    >
      <div className=" w-[55%] h-full flex text-white items-center ml-16 gap-3">
        <div className=" flex gap-2 h-full items-center cursor-pointer">
          <img
            src="https://silicon.createx.studio/assets/img/logo.svg"
            alt=""
            className=" h-[25px]"
          />
          <h1 className=" text-xl font-semibold">Silicon</h1>
        </div>
      </div>

      <div className=" w-[45%] h-full flex text-white items-center justify-center gap-10">
        <div className=" flex gap-2">
          <p className="text-[10px]">Light</p>
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
              <FaMoon size={"12px"} />
            )}
          </button>
          <p className="text-[10px]">Dark</p>
        </div>
        <div
          className=" h-[50px] flex flex-col justify-center items-center gap-1"
          onClick={() => setOpen(true)}
        >
          <div className=" w-[20px] bg-white h-[2px] rounded-full"></div>
          <div className=" w-[20px] bg-white h-[2px] rounded-full"></div>
          <div className=" w-[20px] bg-white h-[2px] rounded-full"></div>
        </div>
      </div>

      {open && (
        <>
          <div className=" absolute w-[80%] sm:w-[50%] top-0 right-0 bg-[#111623] shadow-md h-screen text-white">
            <div className="  border-b border-gray-600 flex justify-between p-4 items-center">
              <h3 className=" text-2xl">Menu</h3>
              <IoCloseOutline size={24} onClick={() => setOpen(false)} />
            </div>
            {}
            <div className=" h-[77%] w-full p-6 gap-4 flex flex-col overflow-y-scroll no-scrollbar">
              <div
                className=" flex h-auto items-center gap-1 cursor-pointer hover:text-[#6466f1]"
                onClick={() => {
                  setName("landing");
                  setDropDown(!dropDown);
                }}
              >
                <p className=" text-[14px]">Landings</p>
                <FaAngleDown size={10} />
              </div>
              {name === "landing" && dropDown === true && (
                <>
                  <DropDownLanding ele={landing} />
                </>
              )}

              <div
                className=" flex  items-center gap-1 cursor-pointer hover:text-[#6466f1]"
                onClick={() => {
                  setName("pages");
                  setDropDown(!dropDown);
                }}
              >
                <p className=" text-[14px]">Pages</p>
                <FaAngleDown size={10} />
              </div>
              {name === "pages" && dropDown && (
                <>
                  <DropDownPages ele={pages} />
                </>
              )}

              <div
                className=" flex  items-center gap-1 cursor-pointer hover:text-[#6466f1]"
                onClick={() => {
                  setName("account");
                  setDropDown(!dropDown);
                }}
              >
                <p className=" text-[14px]">Account</p>
                <FaAngleDown size={10} />
              </div>
              {name === "account" && dropDown && (
                <>
                  <DropDownAccount ele={accounts} />
                </>
              )}

              <div className=" flex  items-center gap-1 cursor-pointer hover:text-[#6466f1]">
                <p className=" text-[14px]">UI Kit </p>
              </div>

              <div className=" flex  items-center gap-1 cursor-pointer hover:text-[#6466f1]">
                <p className=" text-[14px]">Docs</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ResponiveNavBarr;
