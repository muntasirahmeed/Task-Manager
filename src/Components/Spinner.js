import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-16 h-16 border-b-4 border-[#F0A500] rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
