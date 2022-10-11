import React from "react";

const Button = ({ title, color = "FFF" }) => {
  return (
    <button
      className={`text-[14px] px-[21px] py-[7px] rounded-full border text-[#${color}] border-[#${color}]`}
    >
      {title}
    </button>
  );
};

export default Button;
