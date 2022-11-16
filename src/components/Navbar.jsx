import React from "react";

import { CgCodeClimate } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className="flex justify-between w-[1400px] items-center pt-5 ">
      <div className="flex items-center gap-5">
        <CgCodeClimate className="w-24 h-24 " />
        <h1 className="text-[36px] font-black text-[#445964]">Paul Haung</h1>
      </div>
      <ul className="flex gap-20 text-xl text-[#445964] font-medium">
        {["Home", "About", "Portfolio", "Service", "Resume", "Contact"].map(
          (item) => (
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          )
        )}
      </ul>
    </div>
  );
};

export default Navbar;
