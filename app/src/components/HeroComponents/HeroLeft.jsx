import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "./slider/Slider";

const HeroLeft = () => {
  return (
    <div className=" w-[100%] lg:w-[40%]  flex flex-col items-center justify-center gap-3">
      <div className=" flex flex-col gap-3">
        <h3 className=" text-[19px] font-extralight text-gray-300">
          Make your moments fly with
        </h3>
        <h1 className=" text-[45px] font-semibold text-white">ProDrone 2.0</h1>
      </div>
      <div className="flex gap-3">
        <button className=" bg-[#6466f1] hover:bg-[#313276] text-[11px] flex h-[40px] w-[135px] justify-center items-center gap-1 rounded-sm text-white">
          Watch Video
          <FaPlay size={10} />
        </button>
        <button className="bg-white hover:bg-gray-200 text-[11px] flex h-[40px] w-[135px] justify-center items-center gap-1 rounded-sm text-black font-semibold">
          Learn More
          <IoIosArrowRoundForward size={18} />
        </button>
      </div>
      <div className=" w-full h-[220px] mt-[80px]">
        <Slider />
      </div>
    </div>
  );
};

export default HeroLeft;
