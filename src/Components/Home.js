import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <>
      <SideBar>
        <Outlet />
      </SideBar>
    </>
  );
};

export default Home;
