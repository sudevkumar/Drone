import React from "react";

const DropDownLanding = ({ ele }) => {
  return (
    <div className="h-auto w-full flex flex-col border-l border-gray-600 ">
      {ele.map((e, i) => (
        <div className=" w-full  h-full flex">
          {e?.img && <img src={e.img} className=" w-full h-[90%]" />}
          <div className=" flex gap-3 text-[12px] p-2">
            <p>{e.name}</p>
            {e?.new === true && (
              <div className=" text-[9px] rounded-sm bg-green-600 flex items-center justify-center py-[1px] px-1">
                New
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropDownLanding;
