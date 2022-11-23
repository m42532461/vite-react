import React, { useState } from "react";

import { CgCodeClimate } from "react-icons/cg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex justify-between w-[370px] 2xl:w-[1400px] items-center pt-5 ">
      <div className="flex items-center gap-1 2xl:gap-5">
        <CgCodeClimate className="w-16 h-16 2xl:w-24 2xl:h-24 " />
        <h1 className="text-[26px] 2xl:text-[36px] font-black text-[#445964]">
          Paul Huang
        </h1>
      </div>
      <div className="text-[20px] text-[#445964] font-semibold h-full hidden lg:flex">
        {["Home", "About", "Portfolio", "Service", "Techs", "Contact"].map(
          (item) => (
            <div
              className=" h-full  hover:-translate-y-1 duration-200 cursor-pointer hover:border-b-2 px-10 py-5 rounded-[10px] relative"
              key={item}
            >
              <a href={`#${item.toLowerCase()}`} className="">
                {item}
              </a>
            </div>
          )
        )}
      </div>
      <div className="flex lg:hidden ml-4 relative bg-footer ">
        {toggleMenu ? (
          <RiCloseLine
            className=" cursor-pointer "
            color="000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className=" cursor-pointer "
            color="000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="flex flex-col absolute top-10 right-0 animate-[scale-up-center_0.4s_cubic-bezier(.39,.57,.56,1)_both] min-w-[200px] text-end bg-Grey text-white opacity-90 p-8 z-10">
            <div className="flex flex-col items-center  ">
              {[
                "Home",
                "About",
                "Portfolio",
                "Service",
                "Techs",
                "Contact",
              ].map((item) => (
                <div
                  className=" h-full  hover:-translate-y-1 duration-200 cursor-pointer hover:border-b-2 px-5 py-3"
                  key={item}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className=""
                    onClick={() => setToggleMenu(false)}
                  >
                    {item}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
