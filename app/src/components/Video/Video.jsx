import React from "react";
import VideoPlayImage from "./VideoPlayImage";
import { useDarkContext } from "../../context/DardMode";

const Video = () => {
  const { dark } = useDarkContext();
  return (
    <div className={`h-auto  w-full  mt-[90px] sm:mt-[120px] `}>
      <div className=" w-[90%] sm:w-[80%] m-auto flex flex-col lg:flex-row ">
        <div className=" w-full mb-6 ">
          <h1
            className={`text-[22px] sm:text-[32px] font-semibold ${
              dark ? " text-black" : "text-white"
            }`}
          >
            Shoot like a pro with our new
          </h1>
          <h1
            className={`text-[22px] sm:text-[32px] font-semibold ${
              dark ? " text-black" : "text-white"
            }`}
          >
            easy to use <span className=" text-[#6466f1]"> ProDrone 2.0</span>
          </h1>
        </div>
        <div className=" w-full ">
          <p
            className={` leading-[30px] ${dark ? "text-black " : "text-white"}`}
          >
            Featuring a 1-inch CMOS sensor that can shoot 4K/60fps videos and
            20MP photos, ProDrone 2.0 grants filmmakers absolute creative
            freedom. It carefully optimizes user experience and intelligent
            features.
          </p>
        </div>
      </div>

      <div className=" w-[90%] sm:w-[80%] m-auto mt-[40px] flex ">
        <VideoPlayImage />
      </div>
    </div>
  );
};

export default Video;
