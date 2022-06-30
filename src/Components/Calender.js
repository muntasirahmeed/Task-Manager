import React from "react";
import calender from "../assests/images/calender2.png";
const Calender = () => {
  return (
    <div className="">
      <div className=" h-screen flex items-center justify-center font-ralway">
        <div className="bg-[#082032] rounded-xl flex flex-col items-center gap-5  py-20 px-10">
          <img src={calender} alt="" />
          <h1 className="text-4xl font-bold text-yellow-500">Coming Very Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default Calender;
