import React from "react";
import Score from "../assets/score.svg";
import { FiHexagon } from "react-icons/fi";
import useElementOnScreen from "../functions/useElementOnScreen";
import { options, scrollClass } from "../functions/options";
import "animate.css";
import avatar from "../assets/avatar1.jpg";

const AboutMe = ({ language }) => {
  const [containerRef, isVisible] = useElementOnScreen(options);
  return (
    <div
      className={`flex flex-col 2xl:w-[1400px] bg-BG items-center gap-[28px] 2xl:gap-[108px] 2xl:pb-[136px] pt-[55px]`}
      id="about"
      ref={containerRef}
    >
      <div
        className={` flex flex-col items-center w-[300px] 2xl:w-[1032px] gap-10 ${
          isVisible ? "animate-slide-right" : "opacity-0"
        }`}
      >
        <div className="flex flex-col-reverse 2xl:flex-col">
          <div className="flex justify-center relative">
            <div className="avatar">
              <div className="w-[120px] 2xl:w-[240px] mask mask-hexagon relative">
                <img src={avatar} className="grayscale-[20%]" />
                <div className="absolute top-0 left-0 w-full h-full bg-Grey  opacity-50 z-10"></div>
              </div>
            </div>
          </div>
          <h1 className="text-[36px] 2xl:text-[64px] font-black">
            <span className="text-[#445964]">Paul </span>
            <span className="text-[#263138]">Huang</span>
          </h1>
        </div>
        <span className="text-[14px] 2xl:text-[24px] font-medium text-[#445964]">
          {language === "Chinese"
            ? `我是Paul Huang，我是一位網頁前後端及軟體工程師。主要使用的技術為MERN (MongoDB + Express +
              React + Nodejs)，若您也有這方面的需求，歡迎隨時聯繫我，一起來完成他吧!!!`
            : `My name is Paul Huang, I'm a software and website developer. The main
          development technology currently used is MERN (MongoDB + Express +
          React + Nodejs). If you have any kind of need about skills I have,
          feel free to contact me. Let's get it!!!`}
        </span>
      </div>
      <div
        className={`flex flex-col items-center w-[330px] 2xl:w-[1032px] ${
          isVisible ? "animate-slide-right" : "opacity-0"
        }`}
      >
        <h1 className="text-[36px] 2xl:text-[64px] font-black">
          <span className="text-[#263138]">Hard </span>
          <span className="text-[#445964]">Skills</span>
        </h1>
        <div className="text-[36px] text-[#445964] Roboto grid grid-cols-2 2xl:grid-cols-4 gap-x-[50px] gap-y-[71px] pt-[62px]">
          {[
            { name: "HTML", score: 4 },
            { name: "CSS", score: 3 },
            { name: "JavaScript", score: 4 },
            { name: "React", score: 4 },
            { name: "MongoDB", score: 4 },
            { name: "Tailwind", score: 4 },
            { name: "Nodejs", score: 4 },
            { name: "Python", score: 3 },
          ].map((skill) => (
            <div className="col-span-1">
              <div
                className="w-full flex flex-col items-center hover:-translate-y-1 duration-200 cursor-pointer "
                key={skill.name}
              >
                <h2 className="text-[24px] 2xl:text-[36px] font-black">
                  {skill.name}
                </h2>
                <div className="flex gap-2">
                  {Array(skill.score)
                    .fill(1)
                    .map((count, index) => (
                      <div
                        className="w-6 h-6 2xl:w-8 2xl:h-8 "
                        key={skill + index}
                      >
                        <img src={Score} alt="" />
                      </div>
                    ))}
                  {Array(5 - skill.score)
                    .fill(1)
                    .map((count, index) => (
                      <div
                        className="w-6 h-6 2xl:w-8 2xl:h-8 "
                        key={skill + (5 - index)}
                      >
                        <img className=" opacity-20" src={Score} alt="" />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
