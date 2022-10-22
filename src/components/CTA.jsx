import React from "react";

const CTA = () => {
  return (
    <div className="  m-[56px] lg:m-[135px] gradient-bg-light rounded-[10px] shadow-sm">
      <div className="px-9 py-14 flex  flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="">
          <p className="text-[#0E0E0E] font-Manrope font-medium text-[12px] leading-[30px]">
            Request Early Access to Get Started
          </p>
          <p className="text-[#0E0E0E] font-Manrope font-extrabold text-[24px] leading-[45px]">
            Register today & start exploring the endless possiblities.
          </p>
        </div>
        <div className="">
          <button className="py-[13px] px-[45px] bg-black text-white rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
