import React from "react";
import { useDarkContext } from "../../context/DardMode";
import ResponsiveBenifits from "./ResponsiveBenifits";

const Benifits = () => {
  const { dark } = useDarkContext();
  return (
    <>
      <div className=" w-full mt-[100px] mb-[30px] hidden lg:block">
        <h1
          className={`text-center text-[33px] font-semibold ${
            !dark ? "text-white" : "text-black"
          }`}
        >
          The benefits of world-changing drone
        </h1>

        <div className=" w-[72%] m-auto h-auto mt-[40px]">
          <div className="  w-full h-[400px] flex">
            {/* Left */}
            <div className=" w-[20%] h-full flex justify-around flex-col ">
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
                  className={`text-[20px] font-semibold ${
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
                  className={`text-[20px] font-semibold ${
                    dark ? " text-black" : "text-white"
                  }`}
                >
                  5-Directions
                </p>
              </div>
            </div>

            {/* Middle */}
            <div className=" w-[60%] h-full ">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/benefits/image.png"
                alt=""
                className=" h-full"
              />
            </div>

            {/* Right */}
            <div className=" w-[20%] h-full flex justify-around flex-col ">
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
                  className={`text-[20px] font-semibold ${
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
                  className={`text-[20px] font-semibold ${
                    dark ? " text-black" : "text-white"
                  }`}
                >
                  1 inch
                </p>
              </div>
            </div>
          </div>
          {/* Below */}

          <div className="  w-[87.5%] m-auto flex justify-between">
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
                className={`text-[20px] font-semibold ${
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
                className={`text-[20px] font-semibold ${
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
                className={`text-[20px] font-semibold ${
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
                className={`text-[20px] font-semibold ${
                  dark ? " text-black" : "text-white"
                }`}
              >
                4dB
              </p>
            </div>
          </div>
        </div>
      </div>

      <ResponsiveBenifits />
    </>
  );
};

export default Benifits;
