import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = ({ interval = 3000 }) => {
  const slides = [
    {
      image:
        "https://silicon.createx.studio/assets/img/landing/product/hero/slider/03.jpg",
      caption: "Slide 1",
    },
    {
      image:
        "https://silicon.createx.studio/assets/img/landing/product/hero/slider/01.jpg",
      caption: "Slide 2",
    },
    {
      image:
        "https://silicon.createx.studio/assets/img/landing/product/hero/slider/02.jpg",
      caption: "Slide 3",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, slides.length]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      <div className=" w-full h-full relative">
        <img
          src={slides[currentSlide].image}
          alt=""
          className=" w-[55%] h-full absolute left-[25%] z-10 shadow-lg rounded-md"
        />

        <img
          src={
            currentSlide === 0
              ? slides[2]?.image
              : slides[currentSlide - 1]?.image
          }
          alt=""
          className=" w-[22%] h-[150px] absolute left-[20%] top-[35px] opacity-[.9]"
        />

        <img
          src={
            currentSlide === 2
              ? slides[0]?.image
              : slides[currentSlide + 1]?.image
          }
          alt=""
          className=" w-[22%] h-[150px] absolute right-[15%] top-[35px] opacity-[.9]"
        />
      </div>
      <div className=" w-ful h-2 mt-10 text-white flex items-center justify-center gap-3">
        <div
          className="  cursor-pointer h-10 w-10  rounded-full bg-[#12172a] flex justify-center items-center"
          onClick={goToPreviousSlide}
        >
          <IoIosArrowBack />
        </div>

        <p className=" text-sm">{currentSlide + 1}/3</p>
        <div
          className=" cursor-pointer  h-10 w-10  rounded-full bg-[#12172a] flex justify-center items-center"
          onClick={goToNextSlide}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </>
  );
};

export default Slider;
