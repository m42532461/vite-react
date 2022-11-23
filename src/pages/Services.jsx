import React from "react";
import Quote from "../assets/quote.png";
import useElementOnScreen from "../functions/useElementOnScreen";

import { options, scrollClass } from "../functions/options";
const Services = () => {
  const [containerRef, isVisible] = useElementOnScreen(options);
  return (
    <div
      className={`flex flex-col items-center xl:w-[1400px] pt-[90px] pb-[121px] ${
        isVisible ? "" : "opacity-0"
      } ${scrollClass}`}
      id="service"
      ref={containerRef}
    >
      <div
        className={`flex justify-end w-full ${
          isVisible ? "animate-slide-left " : "opacity-0"
        }`}
      >
        <h1 className="text-[36px] 2xl:text-[64px] font-black pl-24 pr-[130px]">
          Services
        </h1>
      </div>
      <div
        className={`flex flex-col 2xl:flex-row w-full gap-[31px] text-white pt-[37px] 2xl:pt-[157px] pb-[42px] 2xl:pb-[142px] ${
          isVisible ? "animate-slide-left " : "opacity-0"
        }`}
      >
        <div className="flex-1 mx-10 2xl:mx-0">
          <div className="w-full mt-0 2xl:mt-[30px] bg-Dark-Grey pb-[41px] pt-10 px-10 rounded-[20px] flex flex-col items-center gap-[30px] min-h-[420px] hover:-translate-y-1 duration-200 cursor-pointer hover:translate-x-1 hover:scale-110">
            <h2 className="text-[30px] 2xl:text-[24px] font-black text-[#445964]">
              Layout
            </h2>
            <span className="text-[20px] 2xl:text-[24px] font-medium">
              Any kind of website layout. Accurately and correctly cut out the
              typesetting required by customers As long as you have an idea, let
              me help you complete it.
            </span>
          </div>
        </div>
        <div className="flex-1 mx-10 2xl:mx-0">
          <div className="w-full bg-Grey pb-[41px] pt-10 px-10 rounded-[20px] flex flex-col items-center gap-[30px] min-h-[420px] hover:-translate-y-1 duration-200 cursor-pointer hover:translate-x-1 hover:scale-110">
            <h2 className="text-[30px] 2xl:text-[24px] font-black text-[#263138]">
              Ecommerce
            </h2>
            <span className="text-[20px] 2xl:text-[24px] font-medium">
              {/* 任何形式風格的電商網站, 想要賣東西卻又不想被平台抽取高額手續費嗎? 想要快速建立自己的網站卻又不想要一頁式網站搞得像是詐騙嗎? 輕鬆擁有自己的平台，並且有客製化後台，輕鬆掌握銷售數據，抓住顧客的心 */}
              Any style of e-commerce website. Have your own platform and a
              customized dashboard, Grasp all sales data and capture the hearts
              of customers.
            </span>
          </div>
        </div>
        <div className="flex-1 mx-10 2xl:mx-0 ">
          <div className="w-full mt-0 2xl:mt-[30px] bg-Dark-Grey pb-[41px] pt-10 px-10 rounded-[20px] flex flex-col items-center gap-[30px] min-h-[420px] hover:-translate-y-1 duration-200 cursor-pointer hover:translate-x-1 hover:scale-110">
            <h2 className="text-[30px] 2xl:text-[24px] font-black text-[#445964]">
              Landing Page
            </h2>
            <span className="text-[20px] 2xl:text-[24px] font-medium">
              {/* 公司、品牌、機構等形象官網或入口網站。擁有一個好的形象官網或入口網站，不僅能讓受眾簡明扼要地知道您的服務內容，也能讓瀏覽者留下好印象，提升成為潛在受眾的可能性 */}
              Having a good website can not only let the audience understand
              your service content concisely, but also make a good impression on
              the viewers and increase the possibility of becoming a potential
              audience.
            </span>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col items-center gap-2 2xl:gap-7 text-[20px]
        2xl:text-[36px] ${isVisible ? "animate-slide-left " : "opacity-0"}`}
      >
        <div className="w-full flex justify-center">
          <img src={Quote} className="w-10 h-10" alt="" />
        </div>
        <span className=" font-black"></span>
        <h2 className=" font-black text-[#263138]">Not only these.</h2>
        <h2 className=" font-black text-[#263138]">
          Look forward to hearing from you!
        </h2>
      </div>
    </div>
  );
};
export default Services;
