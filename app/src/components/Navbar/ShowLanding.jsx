import React from "react";
import { landing } from "./navbarUtils";

const ShowLanding = ({ setShowDropDown }) => {
  return (
    <div
      className=" absolute -left-[4px] top-[60px] w-[700px] h-[400px]  shadow-xl bg-[#0B0F19] rounded-md flex text-white "
      onMouseLeave={() => setShowDropDown(false)}
    >
      <div className=" w-[35%] h-full rounded-l-md">
        <img
          src={"https://silicon.createx.studio/assets/img/landings.jpg"}
          alt=""
          className=" rounded-l-md w-full h-full"
        />
      </div>

      <div className=" w-[65%] grid grid-cols-2 p-4 text-sm">
        {landing.slice(1, landing.length).map((ele, ind) => (
          <div
            className=" flex gap-3 cursor-pointer "
            onClick={() => setShowDropDown(false)}
          >
            <p>{ele.name}</p>
            {ele.new === true && (
              <div className="bg-green-600 h-5 w-[35px] flex text-[10px] justify-center items-center rounded-md">
                New
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowLanding;

// bg-[#0B0F19]
