import React from "react";

import { CgCodeClimate } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className="flex justify-between w-[1400px] items-center pt-5 ">
      <div className="flex items-center gap-5">
        <CgCodeClimate className="w-24 h-24 " />
        <h1 className="text-[36px] font-black text-[#445964]">Paul Haung</h1>
      </div>
      <div className="flex text-[20px] text-[#445964] font-semibold h-full">
        {["Home", "About", "Portfolio", "Service", "Techs", "Contact"].map(
          (item) => (
            <div
              className=" h-full  hover:-translate-y-1 duration-200 cursor-pointer hover:border-b-2 px-10 py-5 rounded-[10px] relative"
              key={item}
            >
              <a href={`#${item.toLowerCase()}`} className="">
                {item}
              </a>
              <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
