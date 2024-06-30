import React from "react";

const FooterRight = () => {
  return (
    <div className=" w-full mt-10 lg:mt-0 pb-10 lg:pb-0 lg:w-[37%] h-full">
      <h1 className=" text-[30px] font-semibold">Payments accepted</h1>
      <div className=" flex gap-[35px]">
        <div className=" w-[100px] h-[45px] border border-gray-500 rounded-md mt-10 ">
          <img
            src="https://silicon.createx.studio/assets/img/landing/product/payments/visa.png"
            alt=""
          />
        </div>

        <div className=" w-[100px] h-[45px] border border-gray-500 rounded-md mt-10">
          <img
            src="https://silicon.createx.studio/assets/img/landing/product/payments/mastercard.png"
            alt=""
          />
        </div>

        <div className=" w-[100px] h-[45px] border border-gray-500 rounded-md mt-10">
          <img
            src="https://silicon.createx.studio/assets/img/landing/product/payments/paypal.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FooterRight;
