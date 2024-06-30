import React from "react";
import { CiMail } from "react-icons/ci";

const FooterLeft = () => {
  return (
    <div className=" w-full lg:w-[37%] h-full ">
      <h1 className=" text-[30px] font-semibold">Newsletter</h1>
      <p className=" mt-10 w-[90%] font-light">
        Please, subscribe to our newsletter to keep updated about our news and
        offers.
      </p>
      <div className=" w-[89%] h-[45px] border-[0.1px] border-gray-600 rounded-md mt-10 flex bg-[#10141E] ">
        {/* Icon */}
        <div className=" w-[10%]  h-full flex justify-center items-center">
          <CiMail size={24} />
        </div>

        {/* Input */}
        <input
          type="text"
          className=" w-[60%] h-[100%] bg-[#10141E] outline-none"
          name=""
          id=""
          placeholder="Your email"
        />
        <button className=" w-[30%] h-full bg-[#4044EE] rounded-r-md">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default FooterLeft;
