import React from "react";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoNodejs,
  IoLogoCss3,
} from "react-icons/io";
import { SiMongodb, SiPython, SiTailwindcss, SiReact } from "react-icons/si";
import useElementOnScreen from "../functions/useElementOnScreen";
import "animate.css";

import { options, scrollClass } from "../functions/options";

const Techs = () => {
  const [containerRef, isVisible] = useElementOnScreen(options);
  return (
    <div
      className={`flex flex-col w-[1400px] gap-[117px] pt-[113px] pb-[170px] items-center bg-BG`}
      id="resume"
      ref={containerRef}
    >
      <h1
        className={`text-[64px] font-black ${
          isVisible ? "animate-slide-right" : "opacity-0"
        }`}
      >
        <span className="text-[#263138]">My </span>

        <span className="text-[#445964]">Techs</span>
      </h1>
      <div
        className={`flex flex-col gap-10 items-center  ${
          isVisible ? "animate-slide-right" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center">
          <span className="text-[#445964] font-medium text-[24px] ">
            Technologies
          </span>
          <h2 className="text-[36px] font-black">
            <span className="text-[#263138]">Most </span>

            <span className="text-black">Handy</span>
          </h2>
        </div>

        <div className="flex gap-[100px]">
          <div className="w-[106px] h-[106px] hover:-translate-y-1 duration-200 cursor-pointer hover:translate-x-1 hover:scale-110">
            <SiReact className="w-full h-full" />
          </div>
          <div className="w-[106px] h-[106px] hover:-translate-y-1 duration-200 cursor-pointer hover:translate-x-1 hover:scale-110">
            <IoLogoNodejs className="w-full h-full" />
          </div>
          <div className="w-[106px] h-[106px] hover:-translate-y-1 duration-200 cursor-pointer hover:translate-x-1 hover:scale-110">
            <SiTailwindcss className="w-full h-full" />
          </div>
          <div className="w-[106px] h-[106px] hover:-translate-y-1 duration-200 cursor-pointer hover:translate-x-1 hover:scale-110">
            <SiMongodb className="w-full h-full" />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col gap-10 items-center  ${
          isVisible ? "animate-slide-right" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center">
          <span className="text-[#445964] font-medium text-[24px] ">
            Technologies
          </span>
          <h2 className="text-[36px] font-black">
            <span className="text-[#445964]">Also </span>

            <span className="text-black">used </span>
          </h2>
        </div>

        <div className="flex gap-[100px]">
          <div className="w-[106px] h-[106px] hover:-translate-y-1 duration-200 cursor-pointer hover:translate-x-1 hover:scale-110">
            <IoLogoJavascript className="w-full h-full" />
          </div>
          <div className="w-[106px] h-[106px] hover:-translate-y-1 duration-200 cursor-pointer hover:translate-x-1 hover:scale-110">
            <IoLogoHtml5 className="w-full h-full" />
          </div>
          <div className="w-[106px] h-[106px] hover:-translate-y-1 duration-200 cursor-pointer hover:translate-x-1 hover:scale-110">
            <IoLogoCss3 className="w-full h-full" />
          </div>
          <div className="w-[106px] h-[106px] hover:-translate-y-1 duration-200 cursor-pointer hover:translate-x-1 hover:scale-110">
            <SiPython className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techs;
