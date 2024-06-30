import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoPlayImage = () => {
  return (
    <div className=" w-full h-[40vh] sm:h-[60vh] lg:h-[75vh] rounded-lg  mb-[30px] relative cursor-pointer group">
      <img
        src="https://silicon.createx.studio/assets/img/landing/product/video-cover.jpg"
        alt=""
        className=" h-full w-full rounded-lg"
      />

      <div className=" group-hover:bg-[#6466f1] group-hover:text-white absolute left-[50%] z-20 top-[50%] right-[50%] bottom-[50%] bg-white w-[70px] h-[70px] flex justify-center items-center rounded-full ">
        <FaPlay />
      </div>
    </div>
  );
};

export default VideoPlayImage;
