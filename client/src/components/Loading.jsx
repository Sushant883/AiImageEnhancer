import React from "react";

const Loading = () => {
  return (
    <div className="flex h-full justify-center items-center">
      <div
        className=" animate-spin border-4 w-[5vmax] 
        border-t-transparent border-b-transparent border-l-red-300 border-r-red-300
    h-[5vmax] rounded-full border-red-300"
      ></div>
    </div>
  );
};

export default Loading;
Loading;
