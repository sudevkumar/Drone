import React from "react";
import { spec } from "./spec";
import { useDarkContext } from "../../context/DardMode";

const Specs = () => {
  const { dark } = useDarkContext();
  return (
    <div
      className={` mt-[100px] w-full mb-32 ${
        !dark ? "bg-[#0B0F19] text-white" : "bg-white text-black"
      }`}
    >
      <div className=" w-[90%] m-auto flex flex-col lg:flex-row">
        {/* Left */}
        <div className=" w-[100%] lg:w-[70%] ">
          <h1 className=" text-[40px] font-bold mb-9">Specs</h1>
          {spec.map((ele, ind) => (
            <div
              className={`flex py-[40px] border-t border-b items-center ${
                ind === spec.length - 1 && "mb-[20px]"
              }`}
            >
              <h4 className=" font-semibold text-[22px] w-[60%]">
                {ele.title}
              </h4>
              <div className=" w-[40%] flex flex-col gap-2">
                {ele.con.map((e, i) => (
                  <p className="text-[16px] font-light">{e}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right */}

        <div className=" lg:w-[30%] w-[100%]  h-[300px] lg:flex lg:flex-col mt-20 grid grid-cols-2">
          <img
            src="https://silicon.createx.studio/assets/img/landing/product/specs/01.png"
            alt=""
          />

          <img
            src="https://silicon.createx.studio/assets/img/landing/product/specs/02.png"
            alt=""
          />

          <img
            src="https://silicon.createx.studio/assets/img/landing/product/specs/03.png"
            alt=""
          />

          <img
            src="https://silicon.createx.studio/assets/img/landing/product/specs/04.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Specs;
