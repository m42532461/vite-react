import React from "react";

const Portfolio = () => {
  return (
    <div className="flex flex-col w-[1400px]">
      <div className="flex gap-[91px] items-end pt-[91px]">
        <h1 className="text-[64px] font-black">
          <span className="text-[#263138]">My</span>
          <br /> <span className="text-[#445964]">Portfolio</span>
        </h1>
        <span className="text-[24px] font-medium text-[#445964]">
          These are some of the works and projects
          <br /> I've done
        </span>
      </div>
      <div className="flex gap-[18px]  font-black text-[24px] mb-[75px] mt-[80px]">
        {["Todos", "Web App", "Data Analysis", "Others"].map((project) => (
          <button className="py-5 px-[30px] first:bg-[#263138] first:text-white bg-Soft-Grey text-[#445964] rounded-[20px]">
            {project}
          </button>
        ))}
      </div>
      <div className="w-full flex justify-center gap-[30px]">
        <div className="flex flex-col gap-[50px]">
          <div className="w-[340px] h-[190px] bg-Dark-Grey rounded-[20px]">
            <img src="" alt="" />
          </div>
          <div className="w-[340px] h-[250px] bg-Soft-Grey rounded-[20px]">
            <img src="" alt="" />
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
