import React from "react";

const Portfolio = () => {
  return (
    <div className="flex flex-col w-[1400px]">
      <div className="flex">
        <h1>My Portfolio</h1>
        <span>These are some of the works and projects I've done</span>
      </div>
      <div className="flex">
        {["Todos", "Web App", "Data Analysis", "Others"].map((project) => (
          <button>{project}</button>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col">
          <div className="w-[340px] h-[190px]">
            <img src="" alt="" />
          </div>
          <div className="w-[340px] h-[250px]">
            <img src="" alt="" />
          </div>
        </div>
        <div className="flex flex-col"></div>
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
};

export default Portfolio;
