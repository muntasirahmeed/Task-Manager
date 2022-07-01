import React, { useState } from "react";
import calender from "../assests/images/calender2.png";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calender = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div className="">
      <div className="  h-screen flex flex-col gap-5 items-center justify-center font-ralway">
        <div className="bg-white">
          <DayPicker
            className="px-10 py-5"
            mode="single"
            selected={selected}
            onSelect={setSelected}
          ></DayPicker>
        </div>
        <div className="bg-[#082032]  px-10 py-3 rounded-lg flex items-center gap-4">
          <img src={calender} alt="" />
          <h1 className="lg:text-4xl font-bold text-yellow-500">
            Coming Soon
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Calender;
