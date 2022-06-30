import React from "react";
import logo from "../assests/images/Tasks-Settings-Blurb-Icon-256x256.png";
import list from "../assests/images/list.png";
import complete from "../assests/images/complete.png";
import calender from "../assests/images/calender.png";
import menu from "../assests/images/menu.png";
import { Link, useNavigate } from "react-router-dom";
const SideBar = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div class="drawer drawer-mobile bg-[#122A3B]">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
          <div className="flex items-center justify-between px-3 py-3 lg:hidden">
            <div className="flex items-center justify-start gap-3">
              <img src={logo} className="w-8 h-8" alt="" />
              <span className="text-xl font-bold text-[#00C897] font-ralway">
                Task Manager
              </span>
            </div>
            <label for="my-drawer-2" class="w-8 h-8  drawer-button ">
              <img src={menu} alt="" />
            </label>
          </div>
          {children}
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-[250px] lg:w-[300px]  text-white bg-[#082032]">
            {/* <!-- Sidebar content here --> */}
            <li className=" mb-10 rounded-lg  ">
              <div className="flex items-center gap-3 ">
                <img src={logo} className="w-10 h-10" alt="" />
                <Link to="/">
                  <span className="lg:text-2xl font-bold text-emerald-500 font-ralway">
                    Task Manager
                  </span>
                </Link>
              </div>
            </li>
            <li className="bg-[#2A2550] transition-all duration-500 ease-in-out mb-4 rounded-lg">
              <div
                className="flex items-center gap-2 py-[10px] px-[10px]"
                onClick={() => navigate("/todo")}
              >
                <img src={list} className="w-10 h-10" alt="" />
                <span className="text-gray-300 font-semibold font-ralway">
                  To-Do
                </span>
              </div>
            </li>
            <li className="bg-[#2A2550] mb-4 rounded-lg ">
              <div
                className="flex items-center gap-2 py-[10px] px-[10px] "
                onClick={() => navigate("/complete")}
              >
                <img src={complete} className="w-10 h-10" alt="" />
                <span className=" font-semibold font-ralway">
                  Completed Tasks
                </span>
              </div>
            </li>
            <li className="bg-[#2A2550] mb-4 rounded-lg">
              <div
                className="flex items-center gap-2 py-[10px] px-[10px]"
                onClick={() => navigate("/calender")}
              >
                <img src={calender} className="w-10 h-10" alt="" />
                <span className=" font-semibold font-ralway">Calendar</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
