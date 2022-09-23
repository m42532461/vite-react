import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderItems } from "../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    // Container
    <div className="w-full h-[100vh] hidden xl:flex relative overflow-hidden ">
      <div
        className="rounded-full w-[50px] h-[50px] bg-[#fff7f7] opacity-50 flex justify-center items-center absolute top-0 bottom-0 m-auto left-[10px] cursor-pointer z-[2]"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftIcon />
      </div>
      {/* Wrapper */}
      <div
        className={`h-full flex -translate-x-[${
          slideIndex * 100
        }vw]  ease-linear duration-1000`}
      >
        {/* Slider */}
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center w-[100vw] h-[100vh] bg-[#${item.bg}]`}
          >
            {/* ImgContainer */}
            <div className="flex-1 h-full">
              <img src={item.img} className=" h-4/5" />
            </div>
            {/* InfoContainer */}
            <div className="flex-1 p-[50px]">
              {/* Title */}
              <h1 className=" font-bold text-[70px]">{item.title}</h1>
              {/* Description */}
              <p className="font-[20px] my-[50px] font-medium tracking-[3px]">
                {item.desc}
              </p>
              {/* Button */}
              <button className="p-[10px] text-[20px] border border-r-2 border-b-2 border-solid border-black cursor-pointer">
                SHOW NOW
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="rounded-full w-[50px] h-[50px] bg-[#fff7f7] opacity-50 flex justify-center items-center absolute top-0 bottom-0 m-auto right-[10px] cursor-pointer"
        onClick={() => handleClick("right")}
      >
        <ArrowRightIcon />
      </div>
      <div className="h-full"></div>
    </div>
  );
};

export default Slider;
