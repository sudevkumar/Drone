import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const FooterMiddle = () => {
  return (
    <div className=" w-full mt-10 lg:mt-0 lg:w-[26%] h-full ">
      <h1 className=" text-[30px] font-semibold">Our Office</h1>
      <div className=" w-full flex mt-4 gap-3 hover:text-[#4044EE] cursor-pointer">
        <IoLocationOutline size={22} />
        <p className=" w-[70%] font-light tracking-wide	">
          3517 W. Gray St. Utica, Pennsylvania 57867
        </p>
      </div>

      <div className=" w-full flex mt-4 gap-3 hover:text-[#4044EE] cursor-pointer">
        <FiPhoneCall size={21} />
        <p className=" w-[70%] font-light tracking-wide	">(+91) 832 884 7712</p>
      </div>

      <div className=" w-full flex mt-4 gap-3 hover:text-[#4044EE] cursor-pointer">
        <CiMail size={24} />
        <p className=" w-[70%] font-light tracking-wide	">
          sudevkumar82@gmail.com
        </p>
      </div>
    </div>
  );
};

export default FooterMiddle;
