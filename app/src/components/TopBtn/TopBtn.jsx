import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const TopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);
  const changeNavbarColor = () => {
    if (window.pageYOffset >= 540) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div
      className={` fixed bottom-2 right-2 w-[50px] h-[50px] bg-blue-300 rounded-full ${
        showBtn ? "flex" : "hidden"
      } justify-center items-center text-white font-bold cursor-pointer`}
      onClick={scrollToTop}
    >
      <IoIosArrowUp size={25} />
    </div>
  );
};

export default TopBtn;
