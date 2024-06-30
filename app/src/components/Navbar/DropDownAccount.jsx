import React from "react";

const DropDownAccount = ({ ele }) => {
  return (
    <div className="h-auto w-full flex flex-col border-l border-gray-600 ">
      {ele.map((ele, ind) => (
        <p className=" p-2 text-[12px]">{ele}</p>
      ))}
    </div>
  );
};

export default DropDownAccount;
