import React from "react";

const Feature = ({
  title,
  text,
  direction = "row",
  titleFont = "24px",
  textFont = "16px",
  leading = "67px",
}) => {
  return (
    <div
      className={`flex justify-between flex-${direction} gap-5 md:gap-10 items-start w-full`}
    >
      <div className="flex flex-col max-w-[180px] min-w-[160px] pt-10">
        <div className="gradient-bar w-[38px] h-[3px]" />
        <h3
          className={`text-[${titleFont}] font-extrabold font-Manrope leading-[${leading}] text-white -tracking-[0.04rem]`}
        >
          {title}
        </h3>
      </div>
      <p
        className={`text-text text-[${textFont}] font-medium font-Manrope leading-[30px] max-w-[350px]`}
      >
        {text}
      </p>
    </div>
  );
};

export default Feature;
