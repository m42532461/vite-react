import React from "react";
import useElementOnScreen from "../functions/useElementOnScreen";

import { options, scrollClass } from "../functions/options";
import ecpay1 from "../assets/ecpay1.jpg";

const Portfolio = () => {
  const [containerRef, isVisible] = useElementOnScreen(options);
  return (
    <div
      className={`flex flex-col w-[1400px] pb-[145px] `}
      id="portfolio"
      ref={containerRef}
    >
      <div
        className={`flex gap-[91px] items-end pt-[91px] ${
          isVisible ? "animate-slide-left" : " opacity-0"
        }`}
      >
        <h1 className="text-[64px] font-black">
          <span className="text-[#263138]">My</span>
          <br /> <span className="text-[#445964]">Portfolio</span>
        </h1>
        <span className="text-[24px] font-medium text-[#445964]">
          These are some of the works and projects
          <br /> I've done
        </span>
      </div>
      <div
        className={`flex gap-[18px]  font-black text-[24px] mb-[75px] mt-[80px] ${
          isVisible ? "animate-slide-left " : "opacity-0"
        }`}
      >
        {["Todos", "Web App", "Data Analysis", "Others"].map((project) => (
          <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group py-5 px-[30px] first:text-white bg-Soft-Grey text-[#445964] rounded-[20px]">
            <span className="w-0 h-0 rounded bg-[#263138] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-[#445964] transition-colors duration-300 ease-in-out group-hover:text-white z-10">
              {project}
            </span>
          </button>
        ))}
      </div>
      <div
        className={`w-full flex justify-center gap-[30px] ${
          isVisible ? "animate-slide-left" : "opacity-0"
        }`}
      >
        <div className="flex flex-col gap-[50px]">
          <div className="w-[340px] h-[190px] bg-Dark-Grey rounded-[20px]">
            <img src="" alt="" />
          </div>
          <div className="w-[340px] h-[250px] bg-Soft-Grey rounded-[20px]">
            <img src={ecpay1} className="object-center object-cover" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-[50px]">
          <div className="w-[340px] h-[250px] bg-Grey rounded-[20px]">
            <img src="" alt="" />
          </div>
          <div className="w-[340px] h-[190px] bg-Dark-Grey rounded-[20px]">
            <img src="" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-[50px]">
          <div className="w-[340px] h-[190px] bg-Soft-Grey rounded-[20px]">
            <img src="" alt="" />
          </div>
          <div className="w-[340px] h-[250px] bg-Grey rounded-[20px]">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
