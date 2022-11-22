import React, { useState } from "react";
import ContactIcon from "../components/ContactIcon";

import { SiGithub, SiInstagram } from "react-icons/si";
import useElementOnScreen from "../functions/useElementOnScreen";
import { options, scrollClass } from "../functions/options";

import Line from "../assets/line.png";
const Contact = () => {
  const [containerRef, isVisible] = useElementOnScreen(options);
  const [toggle, setToggle] = useState(false);
  return (
    <div
      id="contact"
      className=" flex flex-col gap-[100px] w-[1400px] items-center pb-20"
      ref={containerRef}
    >
      <h1
        className={` text-[#263138] text-[36px] 2xl:text-[64px] font-black w-full text-left ${
          isVisible ? "animate-slide-right" : "opacity-0"
        }`}
      >
        <span className="text-[#263138]">Contact </span>
        <span className="text-[#445964]">Info</span>
      </h1>
      <div
        className={` flex flex-col text-[30px] font-bold gap-20 ${
          isVisible ? "animate-slide-right" : "opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5">
          {[
            { key: "Email", value: "m42532461@gmail.com" },
            { key: "LineID", value: "m42532461" },
            { key: "Github", value: "https://github.com/m42532461" },
            { key: "Instagram", value: "couldchic0712" },
          ].map((info) => (
            <div className="flex gap-3" key={info.key}>
              <div className="text-[#445964]">{info.key}: </div>
              <div className="text-[#263138]">{info.value}</div>
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="flex gap-[26px] ">
            <a
              href="https://github.com/m42532461"
              target="_blank"
              className="hover:-translate-y-1 duration-200 cursor-pointer"
            >
              <SiGithub className="w-10 h-10 " />
            </a>
            <a
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fline.me%2Fti%2Fp%2F1gYa-cBgHt%3Ffbclid%3DIwAR3zUibGREqCqiNnmVdIyfChBX6eeuhy60CaKgEJltupKrYLjyCOti43RLs&h=AT1RzHbUJljnhr7fMz3mWo3jhx-kWP-yBv43YkaOwqNA_bzkpXFMldzC9ZpgX9EFAhuLDVtllTvo2SRuDBhFGHZq-H1RpQQGzNqRLEROsugrMxn8PyLVm9mTbFAFr8b9im6P5Q"
              target="_blank"
            >
              <img
                className="w-10 h-10 hover:-translate-y-1 duration-200 cursor-pointer"
                src={Line}
                alt="Line"
              />
            </a>
            <a href="https://www.instagram.com/couldchic0712/" target="_blank">
              <SiInstagram className="w-10 h-10 hover:-translate-y-1 duration-200 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
