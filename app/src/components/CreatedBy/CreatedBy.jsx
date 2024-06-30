import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const CreatedBy = () => {
  return (
    <div className="bg-[#0B0F19] text-white h-auto lg:h-[100px]  pt-[15px] pb-[10px] ">
      <div className=" w-[85%] h-[0.1px] m-auto bg-gray-700" />

      <div className=" w-[85%] m-auto h-[80px] flex flex-col lg:flex-row gap-1">
        <div className=" w-full flex items-center h-full mt-3">
          <p className=" text-sm text-gray-500">
            © All rights reserved. Made by{" "}
            <span className=" text-[15px] text-white cursor-pointer hover:text-[#4044EE]">
              Sudev Kumar
            </span>
          </p>
        </div>

        <div className=" w-full flex items-center lg:justify-end h-full gap-3 ">
          <div className="bg-[#12172a] w-[50px] rounded-full hover:bg-[#1877F2] cursor-pointer h-[50px] flex justify-center items-center hover:shadow-sm hover:shadow-[#1877F2]">
            <FaFacebookF />
          </div>
          <div className="bg-[#12172a] w-[50px] rounded-full hover:bg-[#1877F2] cursor-pointer h-[50px] flex justify-center items-center hover:shadow-sm hover:shadow-[#1877F2]">
            <FaInstagram />
          </div>
          <div className="bg-[#12172a] w-[50px] rounded-full hover:bg-[#1877F2] cursor-pointer h-[50px] flex justify-center items-center hover:shadow-sm hover:shadow-[#1877F2]">
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatedBy;
