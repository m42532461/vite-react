import React from "react";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoNodejs,
  IoLogoCss3,
} from "react-icons/io";
import { SiMongodb, SiPython, SiTailwindcss, SiReact } from "react-icons/si";
const Techs = () => {
  return (
    <div
      className="flex flex-col w-[1400px] gap-[117px] pt-[113px] pb-[170px] items-center bg-BG"
      id="resume"
    >
      <h1 className="text-[64px] font-black">
        <span className="text-[#263138]">My </span>

        <span className="text-[#445964]">Techs</span>
      </h1>
      <div className="flex flex-col gap-10 items-center">
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
          <div className="w-[106px] h-[106px]">
            <SiReact className="w-full h-full" />
          </div>
          <div className="w-[106px] h-[106px]">
            <IoLogoNodejs className="w-full h-full" />
          </div>
          <div className="w-[106px] h-[106px]">
            <SiTailwindcss className="w-full h-full" />
          </div>
          <div className="w-[106px] h-[106px]">
            <SiMongodb className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center">
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
          <div className="w-[106px] h-[106px]">
            <IoLogoJavascript className="w-full h-full" />
          </div>
          <div className="w-[106px] h-[106px]">
            <IoLogoHtml5 className="w-full h-full" />
          </div>
          <div className="w-[106px] h-[106px]">
            <IoLogoCss3 className="w-full h-full" />
          </div>
          <div className="w-[106px] h-[106px]">
            <SiPython className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techs;
