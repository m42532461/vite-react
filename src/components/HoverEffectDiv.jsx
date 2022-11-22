import React from "react";

const HoverEffectDiv = ({ width, height, color, img, link }) => {
  return (
    <div className={`${width} ${height} ${color} rounded-[22px] relative`}>
      <a
        href={link}
        target="_blank"
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition delay-75 duration-500 ease-in-out rounded-[20px] blur-md hover:blur-0"
      >
        <img src={img} alt="" />
      </a>
    </div>
  );
};

export default HoverEffectDiv;
