import React from "react";

const ScrollOnHover = ({
  width = "w-[370px]",
  height = "h-[600px]",
  img,
  duration = "duration-[5s]",
}) => {
  return (
    <div className="flex justify-center items-center">
      <div className={`${width} ${height} overflow-hidden relative group`}>
        <img
          src={img}
          className={`${duration} w-full h-full object-cover object-top group-hover:object-bottom transition-all ease-linear`}
          alt=""
        />
        <img
          src={img}
          className="absolute top-0 left-0 w-full h-full  object-cover object-top z-10 group-hover:hidden"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 group hover:opacity-0"></div>
      </div>
    </div>
  );
};

export default ScrollOnHover;
