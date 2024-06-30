import React from "react";
import { useDarkContext } from "../../context/DardMode";

const TypeOfDrones = () => {
  const { dark } = useDarkContext();
  return (
    <div
      className={` h-auto lg:h-[90vh] w-full ${
        !dark ? "bg-[#0B0F19]" : "bg-[#F3F6FF]"
      }`}
    >
      <div className=" w-[80%] h-full flex flex-col lg:flex-row m-auto ">
        <div className=" w-[100%] lg:w-[40%] h-full  flex flex-col justify-center gap-7">
          <div className=" flex flex-col gap-0">
            <h1
              className={`text-[38px] font-semibold ${
                !dark ? " text-white" : "text-black"
              }`}
            >
              Two colors.
            </h1>
            <h1
              className={`text-[38px] font-semibold ${
                !dark ? " text-white" : "text-black"
              }`}
            >
              Choose your best.
            </h1>
          </div>

          <p
            className={` text-[15px] font-light ${
              !dark ? " text-white" : " text-black"
            }`}
          >
            “ProDrone 2.0 changes the rules of the game in aerial photography.
            Now you can capture more details from a safe distance, as well as
            implement different visual effects with different focal lengths.”
          </p>

          <div>
            <h1
              className={`text-[21px] font-semibold ${
                !dark ? " text-white" : " text-black"
              }`}
            >
              Wade Warren
            </h1>
            <p
              className={`font-light  ${!dark ? " text-white" : " text-black"}`}
            >
              ProDrone Inc. Co-Owner
            </p>
          </div>
        </div>

        <div className=" w-[100%] lg:w-[60%] mt-10 lg:mt-0 pb-10 lg:pb-0 h-full flex flex-col lg:flex-row gap-3 justify-center items-center">
          <div
            className={` w-full ${
              !dark ? "bg-[#1E212B]  hover:border-[1px] text-white" : "bg-white"
            } shadow-xl hover:shadow-2xl h-[480px] cursor-pointer rounded-[10px] hover:skew-y-1  `}
          >
            <div className=" h-[65%] w-full">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/colors/01.png"
                alt=""
                className=" h-full"
              />
              <div className=" h-[35%] flex flex-col items-center gap-2 ">
                <p className=" text-[17px] font-light ">White ProDrone 2.0</p>
                <h1 className=" text-[30px] font-semibold">$1200</h1>
                <button className=" px-7 py-3 bg-[#6366fa] text-[13px] font-semibold text-white rounded-[10px]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div
            className={` w-full ${
              !dark ? "bg-[#1E212B]  hover:border-[1px] text-white" : "bg-white"
            } shadow-xl hover:shadow-2xl h-[480px] cursor-pointer rounded-[10px] hover:skew-y-1  `}
          >
            <div className=" h-[65%] w-full">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/colors/02.png"
                alt=""
                className=" h-full"
              />
              <div className=" h-[35%] flex flex-col items-center gap-2 ">
                <p className=" text-[17px] font-light ">Black ProDrone 2.0</p>
                <h1 className=" text-[30px] font-semibold">$1100</h1>
                <button className=" px-7 py-3 bg-[#6366fa] text-[13px] font-semibold text-white rounded-[10px]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeOfDrones;
