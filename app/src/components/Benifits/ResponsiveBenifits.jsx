import React from "react";
import { useDarkContext } from "../../context/DardMode";

const ResponsiveBenifits = () => {
  const { dark } = useDarkContext();
  return (
    <div className=" w-full mt-[6px] mb-[30px] block lg:hidden">
      <h1
        className={`text-center text-[23px] font-semibold ${
          !dark ? "text-white" : "text-black"
        }`}
      >
        The benefits of world-changing drone
      </h1>

      <div className=" w-full mt-3">
        <img
          src="https://silicon.createx.studio/assets/img/landing/product/benefits/image.png"
          alt=""
        />
      </div>

      <div className=" grid grid-cols-2 gap-y-9 sm:grid-cols-3">
        <div className=" flex flex-col justify-center items-center gap-1">
          <img
            src="https://silicon.createx.studio/assets/img/landing/product/benefits/battery.svg"
            alt=""
            className=" h-[60px] w-[60px]"
          />
          <p
            className={`mt-1 text-[14px] ${
              dark ? " text-black" : "text-white"
            }`}
          >
            Flight time
          </p>
          <p
            className={`text-[15px] font-semibold ${
              dark ? " text-black" : "text-white"
            }`}
          >
            60 min
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center gap-1">
          <img
            src="https://silicon.createx.studio/assets/img/landing/product/benefits/drone.svg"
            alt=""
            className=" h-[60px] w-[60px]"
          />
          <p
            className={`mt-1 text-[14px] ${
              dark ? " text-black" : "text-white"
            }`}
          >
            Obstacle sensing
          </p>
          <p
            className={`text-[15px] font-semibold ${
              dark ? " text-black" : "text-white"
            }`}
          >
            5-Directions
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center gap-1">
          <img
            src="https://silicon.createx.studio/assets/img/landing/product/benefits/zoom-in.svg"
            alt=""
            className=" h-[60px] w-[60px]"
          />
          <p
            className={`mt-1 text-[14px] ${
              dark ? " text-black" : "text-white"
            }`}
          >
            Optical camera
          </p>
          <p
            className={`text-[15px] font-semibold ${
              dark ? " text-black" : "text-white"
            }`}
          >
            2x zoom
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center gap-1">
          <img
            src="https://silicon.createx.studio/assets/img/landing/product/benefits/computer-microprocessor.svg"
            alt=""
            className=" h-[60px] w-[60px]"
          />
          <p
            className={`mt-1 text-[14px] ${
              dark ? " text-black" : "text-white"
            }`}
          >
            Sensor
          </p>
          <p
            className={`text-[15px] font-semibold ${
              dark ? " text-black" : "text-white"
            }`}
          >
            1 inch
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center gap-1">
          <img
            src="https://silicon.createx.studio/assets/img/landing/product/benefits/monitor.svg"
            alt=""
            className=" h-[60px] w-[60px]"
          />
          <p
            className={`mt-1 text-[14px] ${
              dark ? " text-black" : "text-white"
            }`}
          >
            Ultra-clear video
          </p>
          <p
            className={`text-[15px] font-semibold ${
              dark ? " text-black" : "text-white"
            }`}
          >
            4K
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center gap-1">
          <img
            src="https://silicon.createx.studio/assets/img/landing/product/benefits/thermometer.svg"
            alt=""
            className=" h-[60px] w-[60px]"
          />
          <p
            className={`mt-1 text-[14px] ${
              dark ? " text-black" : "text-white"
            }`}
          >
            Working temperature
          </p>
          <p
            className={`text-[15px] font-semibold ${
              dark ? " text-black" : "text-white"
            }`}
          >
            -10°C to 40°C
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center gap-1">
          <img
            src="https://silicon.createx.studio/assets/img/landing/product/benefits/led-light.svg"
            alt=""
            className=" h-[60px] w-[60px]"
          />
          <p
            className={`mt-1 text-[14px] ${
              dark ? " text-black" : "text-white"
            }`}
          >
            For night time
          </p>
          <p
            className={`text-[15px] font-semibold ${
              dark ? " text-black" : "text-white"
            }`}
          >
            LED searchlight
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center gap-1">
          <img
            src="https://silicon.createx.studio/assets/img/landing/product/benefits/audio.svg"
            alt=""
            className=" h-[60px]"
          />
          <p
            className={`mt-1 text-[14px] ${
              dark ? " text-black" : "text-white"
            }`}
          >
            Noise reduction
          </p>
          <p
            className={`text-[15px] font-semibold ${
              dark ? " text-black" : "text-white"
            }`}
          >
            4dB
          </p>
        </div>

        {/* nlnln */}
      </div>
    </div>
  );
};

export default ResponsiveBenifits;
