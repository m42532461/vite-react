import React, { useState } from "react";

import { CgCodeClimate } from "react-icons/cg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex justify-between w-[400px] 2xl:w-[1400px] items-center pt-5 ">
      <div className="flex items-center gap-5">
        <CgCodeClimate className="w-24 h-24 " />
        <h1 className="text-[36px] font-black text-[#445964]">Paul Haung</h1>
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
              <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
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
          <div className="flex flex-col absolute top-10 right-0 animate-[scale-up-center_0.4s_cubic-bezier(.39,.57,.56,1)_both] min-w-[200px] text-end bg-footer p-8">
            <div className="flex flex-col">
              <a href="" className="font-Manrope my-2">
                Home
              </a>
              <a href="" className="font-Manrope my-2">
                What is GPT
              </a>
              <a href="" className="font-Manrope my-2">
                Open AI
              </a>
              <a href="" className="font-Manrope my-2">
                Case Studies
              </a>
              <a href="" className="font-Manrope my-2">
                Library
              </a>
            </div>
            <div className="block md:hidden">
              <button className="font-Manrope my-2">Sign in</button>
              <button className="py-3 px-6 leading-[25px] bg-[#FF4820] rounded-[5px] my-2">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
