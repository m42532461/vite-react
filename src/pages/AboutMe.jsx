import React from "react";
import Score from "../assets/score.svg";
import { FiHexagon } from "react-icons/fi";
const AboutMe = () => {
  return (
    <div
      className="flex flex-col w-[1400px] bg-BG items-center gap-[108px] pb-[136px] pt-[55px]"
      id="about"
    >
      <div className=" flex flex-col items-center w-[1032px] gap-10">
        <div className="">
          <img src="" alt="" />
          <FiHexagon className="w-[183px] h-[207px]" />
        </div>
        <h1 className="text-[64px] font-black">
          <span className="text-[#445964]">Paul </span>
          <span className="text-[#263138]">Haung</span>
        </h1>
        <span className="text-[24px] font-medium text-[#445964]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eos
          facere, labore enim nostrum perferendis quisquam doloremque sit
          incidunt laborum quis placeat neque. Dolorem fugit magni pariatur quis
          id perferendis!
        </span>
      </div>
      <div className="flex flex-col items-center w-[1032px]">
        <h1 className="text-[64px] font-black">
          <span className="text-[#263138]">Hard </span>
          <span className="text-[#445964]">Skills</span>
        </h1>
        <div className="text-[36px] text-[#445964] Roboto grid grid-cols-4 gap-x-[50px] gap-y-[71px] pt-[62px]">
          {[
            { name: "HTML", score: 4 },
            { name: "React", score: 4 },
            { name: "CSS", score: 3 },
            { name: "MongoDB", score: 4 },
            { name: "JavaScript", score: 4 },
            { name: "MySQL", score: 4 },
            { name: "C", score: 4 },
            { name: "Python", score: 4 },
          ].map((skill) => (
            <div className="col-span-1">
              <div className="w-full flex flex-col items-center">
                <h2 className="text-[36px] font-black">{skill.name}</h2>
                <div className="flex gap-2">
                  {Array(skill.score)
                    .fill(1)
                    .map((count) => (
                      <div className="w-8 h-8 ">
                        <img src={Score} alt="" />
                      </div>
                    ))}
                  {Array(5 - skill.score)
                    .fill(1)
                    .map((count) => (
                      <div className="w-8 h-8 ">
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
