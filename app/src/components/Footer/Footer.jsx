import React from "react";
import FooterLeft from "./FooterLeft";
import FooterMiddle from "./FooterMiddle";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <div className={` h-auto lg:h-[350px] bg-[#0B0F19] text-white pt-20`}>
      <div className=" w-[85%] m-auto h-full lg:mb-10 flex flex-col lg:flex-row ">
        <FooterLeft />
        <FooterMiddle />
        <FooterRight />
      </div>
    </div>
  );
};

export default Footer;
