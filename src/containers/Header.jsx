import React from "react";
import style from "./style.css";
import people from "../assets/people.png";
import ai from "../assets/ai.png";
const Header = () => {
  return (
    <div
      className="px-10 md:px-14 lg:px-24 xl:px-[136px] flex flex-col xl:flex-row items-center justify-center pt-20 lg:mb-12"
      id="#home"
    >
      <div className=" left flex flex-col w-full flex-1 xl:mr-20 ">
        <h1 className="gradient-text font-extrabold font-Manrope text-[40px] sm:text-[50px] md:text-[62px]">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className=" font-normal font-Manrope text-[20px] leading-[27px] text-[#81AFDD] mt-6">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="flex pt-8 pb-4">
          <input
            type="email"
            placeholder="Your Email Address"
            className="bg-footer border-none min-h-[40px] flex-[2] p-4 rounded-l-[5px]  text-white"
          />
          <button className="text-white font-bold text-[16px] md:text-[20px] leading-[27px] py-3  px-[16px] rounded-r-[5px] bg-[#FF4820] flex-[1] md:flex-[0.6] items-center">
            Get Started
          </button>
        </div>
        <div className="img flex mt-8 flex-col lg:flex-row justify-start items-center">
          <img src={people} alt="people" className="w-[181.79px] h-[38px]" />
          <p className="ml-4 font-medium leading-[38px] text-white text-center">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="right flex-1 flex justify-center items-center">
        <img src={ai} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Header;
