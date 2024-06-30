import React from "react";
import { accounts } from "./navbarUtils";

const ShowAccount = ({ setShowDropDown }) => {
  return (
    <div
      className=" absolute -left-[4px] top-[60px] w-[200px] h-[380px]  shadow-xl bg-[#0B0F19] rounded-md flex flex-col gap-2 text-white p-10 "
      onMouseLeave={() => setShowDropDown(false)}
    >
      {accounts.map((ele, ind) => (
        <p className=" text-[15px]" onClick={() => setShowDropDown(false)}>
          {ele}
        </p>
      ))}
    </div>
  );
};

export default ShowAccount;
