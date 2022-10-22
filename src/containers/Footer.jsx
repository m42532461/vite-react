import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col p-12 md:p-[56px] lg:p-[135px] bg-footer">
      <div className="flex flex-col items-center justify-center pb-[140px] gap-16">
        <h1 className="gradient-text text-[32px] md:text-[62px] md:leading-[75px] font-extrabold -tracking-[0.04rem]  md:max-w-[70%] text-center">
          Do you want to step in to the future before others
        </h1>
        <button className="text-xs md:text-[18px] p-4 md:p-6 text-white border">
          Request Early Access
        </button>
      </div>
      <div className="flex flex-col lg:flex-row justify-between text-white">
        <div className="flex flex-col gap-5 items-center lg:items-start pb-20">
          <img src={logo} alt="logo" className="w-[236px] lg:w-[118px]" />
          <p className="max-w-[320px] lg:max-w-[160px] text-[16px] lg:text-[12px] text-center lg:text-start">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="flex flex-row justify-between gap-10 lg:gap-20 xl:gap-32 pl-4 lg:pl-0">
          <div className="flex flex-col justify-start flex-1">
            <h4 className="pb-8 text-[14px] ">Links</h4>
            <p className="text-[12px] pb-5">Overons</p>
            <p className="text-[12px] pb-5">Social Media</p>
            <p className="text-[12px] pb-5">Counters</p>
            <p className="text-[12px] pb-5">Contact</p>
          </div>
          <div className="flex flex-col justify-start flex-1 ">
            <h4 className="pb-8 text-[14px] ">Company</h4>
            <p className="text-[12px] pb-5">Terms & Conditions </p>
            <p className="text-[12px] pb-5">Privacy Policy</p>
            <p className="text-[12px] pb-5">Contact</p>
          </div>
          <div className="flex flex-col justify-start  flex-1">
            <h4 className="pb-8 text-[14px] ">Get in touch</h4>
            <p className="text-[12px] pb-5">
              Crechterwoord K12 182 DK Alknjkcb
            </p>
            <p className="text-[12px] pb-5">085-132567</p>
            <p className="text-[12px] pb-5">info@payme.net</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
