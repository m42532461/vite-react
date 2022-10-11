import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Slider = ({ data }) => {
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
    <div className="w-[800px] hidden xl:flex relative overflow-hidden h-[235px]">
      <div
        className="rounded-full w-[50px] h-[50px] bg-[#fff7f7] opacity-50 flex justify-center items-center absolute top-0 bottom-0 m-auto left-[10px] cursor-pointer z-[2]"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftIcon />
      </div>
      {/* Wrapper */}
      <div
        className={` flex -translate-x-[${
          slideIndex * 800
        }px]  ease-linear duration-1000`}
      >
        {/* Slider */}
        {data.map((item) => (
          <div
            key={item.id}
            className={`flex items-center  bg-[#${item.bg}] w-[800px]`}
          >
            {/* ImgContainer */}
            <div className="flex-1 h-full">
              <img src={item.img} className="" />
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
