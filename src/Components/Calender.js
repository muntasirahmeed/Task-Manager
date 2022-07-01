import React, { useState } from "react";
import calender from "../assests/images/calender2.png";
// import Calendar from "react-calendar";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calender1 = () => {
  // const [value, onChange] = useState(new Date());
    const [date, setDate] = useState(new Date());

  return (
    <div className="">
      <div className="  h-screen flex flex-col gap-5 items-center justify-center font-ralway">
        <div className="bg-white">
          <div className="shadow rounded-lg bg-white px-3 py-2">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
        <div className="bg-[#082032]  px-10 py-3 rounded-lg flex items-center gap-4">
          <img src={calender} alt="" />
          <h1 className="lg:text-4xl font-bold text-yellow-500">
            Features Coming
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Calender1;
