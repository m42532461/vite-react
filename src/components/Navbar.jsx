import React from "react";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div
      className="navbar py-8 px-10 md:px-14 lg:px-24 xl:px-[136px] flex justify-between items-center text-white text-[18px] font-medium 
    "
    >
      <div className="navbar-links flex leading-[24.6px]  items-center flex-1">
        <div className="navbar-links-logo w-[62px] h-[16px] mr-2 md:mr-8">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden lg:flex text-[16px] xl:text-[18px]">
          <a href="#home" className="mr-[54px] font-Manrope">
            Home
          </a>
          <a href="#gpt3__whatgpt3" className="mr-[34px] font-Manrope">
            What is GPT
          </a>
          <a href="#possibility" className="mr-[46px] font-Manrope">
            Open AI
          </a>
          <a href="#features" className="mr-[34px] font-Manrope">
            Case Studies
          </a>
          <a href="#blog" className="font-Manrope">
            Library
          </a>
        </div>
      </div>
      <div className="hidden md:flex">
        <button className="px-3 md:px-[26px]">Sign in</button>
        <button className=" py-2 md:py-4 px-3 md:px-[45px] leading-[25px] bg-[#FF4820] rounded-[5px]">
          Sign up
        </button>
      </div>
      <div className="flex lg:hidden ml-4 relative bg-footer ">
        {toggleMenu ? (
          <RiCloseLine
            className=" cursor-pointer "
            color="fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className=" cursor-pointer "
            color="fff"
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
