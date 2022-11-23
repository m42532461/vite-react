import React, { useState } from "react";
import useElementOnScreen from "../functions/useElementOnScreen";

import { options } from "../functions/options";
import HoverEffectDiv from "../components/HoverEffectDiv";
import {
  ecommerce1,
  ecommerce2,
  ecommerce3,
  ecommerce4,
  ecommerce5,
  ecommerce6,
  shop1,
  shop2,
  shop3,
  shop4,
  shop5,
  shop6,
  dashboard1,
  dashboard2,
  dashboard3,
  dashboard4,
  dashboard5,
  dashboard6,
  others1,
  others2,
  others3,
  others4,
  others5,
  others6,
} from "../assets/index";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const projects = [
  {
    title: "Ecommerce",
    img: [
      ecommerce1,
      ecommerce2,
      ecommerce3,
      ecommerce4,
      ecommerce5,
      ecommerce6,
    ],
    link: ["https://ecommerce-ecpay.netlify.app/"],
  },
  {
    title: "Shop",
    img: [shop1, shop2, shop3, shop4, shop5, shop6],
    link: [
      "https://dashboard-sample-syncfusion.netlify.app/",
      "https://ecommerce-dashboard-admin.netlify.app/",
    ],
  },
  {
    title: "Dashboard",
    img: [
      dashboard1,
      dashboard2,
      dashboard3,
      dashboard4,
      dashboard5,
      dashboard6,
    ],
    link: ["https://ecommerce-ecpay.netlify.app/"],
  },
  {
    title: "Others",
    img: [others1, others2, others3, others4, others5, others6],
    link: ["https://ecommerce-ecpay.netlify.app/"],
  },
];
import layout from "../assets/layout.png";
import uiux from "../assets/uiux.png";
import ecommerce from "../assets/ecommerce.png";
import shop from "../assets/shop.png";
import ScrollOnActive from "../components/ScrollOnActive";
const Portfolio = () => {
  const [containerRef, isVisible] = useElementOnScreen(options);
  const [selected, setSelected] = useState("Ecommerce");
  const [source, setSource] = useState([
    ecommerce1,
    ecommerce2,
    ecommerce3,
    ecommerce4,
    ecommerce5,
    ecommerce6,
  ]);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  return (
    <div
      className={`flex flex-col 2xl:w-[1400px] pb-20 2xl:pb-[145px] `}
      id="portfolio"
      ref={containerRef}
    >
      <div
        className={`hidden 2xl:flex flex-col 2xl:flex-row gap-[91px] items-end pt-[91px] ${
          isVisible ? "animate-slide-left" : " opacity-0"
        }`}
      >
        <h1 className="text-[36px] 2xl:text-[64px] font-black">
          <span className="text-[#263138]">My</span>
          <br /> <span className="text-[#445964]">Portfolio</span>
        </h1>
        <span className="text-[24px] font-medium text-[#445964]">
          These are some of the works and projects
          <br /> I've done
        </span>
      </div>
      <div
        className={`flex 2xl:hidden flex-col 2xl:flex-row gap-[30px] items-center pt-[191px]`}
      >
        <h1 className="text-[36px] 2xl:text-[64px] font-black">
          <span className="text-[#263138]">My</span>
          <br /> <span className="text-[#445964]">Portfolio</span>
        </h1>
        <span className="text-[24px] font-medium text-[#445964] px-10">
          These are some of the works and projects I've done
        </span>
      </div>
      <div
        className={`hidden 2xl:block md:flex gap-[9px] 2xl:gap-[18px]  font-black text-[18px] 2xl:text-[24px] mb-[75px] mt-[80px] ${
          isVisible ? "animate-slide-left " : "opacity-0"
        }`}
      >
        {projects.map((project) => (
          <button
            className={`relative inline-flex items-center justify-start overflow-hidden transition-all mx-2 group py-[10px] px-[15px] 2xl:px-[30px] 2xl:py-5 first:text-white  text-[#445964] rounded-[13px] 2xl:rounded-[20px]  ${
              selected === project.title ? "bg-[#263138]" : "bg-Soft-Grey"
            } ease-out duration-500`}
            key={project.title}
            onClick={() => {
              setSource(project.img);
              setSelected(project.title);
            }}
          >
            <span
              className={`w-0 h-0 rounded bg-[#263138] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1 group-active:bg-[#3f6a77] groutp-active:duration-100`}
            ></span>
            <span
              className={`w-full text-[#445964] transition-colors duration-300 ease-in-out group-hover:text-white z-10  ${
                selected === project.title ? "text-white " : ""
              }`}
            >
              {project.title}
            </span>
          </button>
        ))}
      </div>
      <div className="flex flex-col 2xl:hidden gap-40 pt-20">
        <ScrollOnActive img={ecommerce} duration="duration-[8s]" />
        <ScrollOnActive img={shop} />
        <ScrollOnActive img={uiux} duration="duration-[10s]" />
        <ScrollOnActive img={layout} />
      </div>
      {selected === "Ecommerce" && (
        <div
          className={`hidden w-full 2xl:flex flex-col items-center 2xl:flex-row justify-center gap-[30px] ${
            isVisible ? "animate-slide-left" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-[50px]">
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[191.25px]"
              color="bg-Dark-Grey"
              img={source[3]}
            />
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[255px]"
              color="bg-Soft-Grey"
              img={source[0]}
            />
          </div>
          <div className="flex flex-col gap-[50px]">
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[255px]"
              color="bg-Grey"
              img={source[1]}
            />
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[191.25px]"
              color="bg-Dark-Grey"
              img={source[4]}
            />
          </div>
          <div className="flex flex-col gap-[50px]">
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[191.25px]"
              color="bg-Soft-Grey"
              img={source[5]}
            />
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[255px]"
              color="bg-Grey"
              img={source[2]}
            />
          </div>
        </div>
      )}
      {selected === "Shop" && (
        <div
          className={`hidden w-full 2xl:flex flex-col items-center 2xl:flex-row justify-center gap-[30px] ${
            isVisible ? "animate-slide-left" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-[50px]">
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[191.25px]"
              color="bg-Dark-Grey"
              img={source[3]}
            />
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[255px]"
              color="bg-Soft-Grey"
              img={source[0]}
            />
          </div>
          <div className="flex flex-col gap-[50px]">
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[255px]"
              color="bg-Grey"
              img={source[1]}
            />
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[191.25px]"
              color="bg-Dark-Grey"
              img={source[4]}
            />
          </div>
          <div className="flex flex-col gap-[50px]">
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[191.25px]"
              color="bg-Soft-Grey"
              img={source[5]}
            />
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[255px]"
              color="bg-Grey"
              img={source[2]}
            />
          </div>
        </div>
      )}
      {selected === "Dashboard" && (
        <div
          className={`hidden w-full 2xl:flex flex-col items-center 2xl:flex-row justify-center gap-[30px] ${
            isVisible ? "animate-slide-left" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-[50px]">
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[191.25px]"
              color="bg-Dark-Grey"
              img={source[3]}
            />
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[255px]"
              color="bg-Soft-Grey"
              img={source[0]}
            />
          </div>
          <div className="flex flex-col gap-[50px]">
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[255px]"
              color="bg-Grey"
              img={source[1]}
            />
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[191.25px]"
              color="bg-Dark-Grey"
              img={source[4]}
            />
          </div>
          <div className="flex flex-col gap-[50px]">
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[191.25px]"
              color="bg-Soft-Grey"
              img={source[5]}
            />
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[255px]"
              color="bg-Grey"
              img={source[2]}
            />
          </div>
        </div>
      )}
      {selected === "Others" && (
        <div
          className={`hidden w-full 2xl:flex flex-col items-center 2xl:flex-row justify-center gap-[30px] ${
            isVisible ? "animate-slide-left" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-[50px]">
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[191.25px]"
              color="bg-Dark-Grey"
              img={source[3]}
            />
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[255px]"
              color="bg-Soft-Grey"
              img={source[0]}
            />
          </div>
          <div className="flex flex-col gap-[50px]">
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[255px]"
              color="bg-Grey"
              img={source[1]}
            />
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[191.25px]"
              color="bg-Dark-Grey"
              img={source[4]}
            />
          </div>
          <div className="flex flex-col gap-[50px]">
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[191.25px]"
              color="bg-Soft-Grey"
              img={source[5]}
            />
            <HoverEffectDiv
              width="w-[340px]"
              height="h-[255px]"
              color="bg-Grey"
              img={source[2]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
