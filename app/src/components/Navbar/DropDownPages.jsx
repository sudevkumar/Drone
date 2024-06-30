import React from "react";

const DropDownPages = ({ ele, i }) => {
  return (
    <div className="h-auto w-full flex flex-col border-l border-gray-600 ">
      {ele.map((e, i) => (
        <>
          <h1 className="text-[12px] p-2">{e.heading}</h1>
          {e.title.map((a, b) => (
            <p className="text-[12px] p-2 font-extralight">{a}</p>
          ))}
        </>
      ))}
    </div>
  );
};

export default DropDownPages;
