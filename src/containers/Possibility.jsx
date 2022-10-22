import React from "react";
import feature from "../assets/Feature.png";
const Possibility = () => {
  return (
    <div
      className="flex flex-col md:flex-row mx-[56px] lg:mx-[135px]  gap-4"
      id="possibility"
    >
      <div className="flex-1">
        <img src={feature} alt="feature" />
      </div>
      <div className="flex-1 flex flex-col justify-end">
        <div className="w-[90%]">
          <p className="text-[16px] leading-[30px] font-medium text-[#71E5FF] font-Manrope">
            Request Early Access to Get Started
          </p>
          <h2 className="py-[10px] text-[34px] leading-[45px] font-extrabold gradient-text font-Manrope">
            The possibilities are beyond your imagination
          </h2>
          <p className="py-[13px] text-[16px] leading-[30px] font-normal text-text font-Manrope">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className="py-[18px] text-[16px] leading-[30px] font-medium text-subtext font-Manrope">
            Request Early Access to Get Started
          </p>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
