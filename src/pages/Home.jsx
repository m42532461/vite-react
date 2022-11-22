import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import art1 from "../assets/Home_art 1.svg";
import useElementOnScreen from "../functions/useElementOnScreen";

import { options, scrollClass } from "../functions/options";
import ContactIcon from "../components/ContactIcon";
const Home = ({ language, changeLanguage }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Freelancer", "Software Developer"];
  const period = 2000;

  const [containerRef, isVisible] = useElementOnScreen(options);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <div
      className={`flex flex-col items-center mb-[55px] bg-BG pb-[99.45px]  ${
        isVisible ? "" : "opacity-0"
      } ${scrollClass}`}
      id="home"
      ref={containerRef}
    >
      <Navbar changeLanguage={changeLanguage} />
      <div
        className={`flex w-[380px] px-5 2xl:px-0 2xl:w-[1400px] mt-[100px] 2xl:mt-[172px] items-end ${
          isVisible ? "animate-slide-left" : ""
        }`}
      >
        <div className="flex-1 left flex flex-col gap-[100px] 2xl:gap-[150px] h-full ">
          <div className="text-[#445964]">
            <span className="text-[24px] font-black 2xl:font-medium">
              Hi there,
            </span>
            <h1 className="text-[44px] 2xl:text-[72px] font-black">
              I'm a <span className="border-r-4 border-[#666]">{text}</span>
            </h1>
            <span className="text-[24px] font-black 2xl:font-medium">
              Welcome to my website
            </span>
          </div>
          <div className="">
            <button className="px-[31px] py-[24px] font-black bg-[#263138] text-white rounded-[20px] hover:-translate-y-1 duration-200 cursor-pointer hover:shadow-xl">
              Learn more about me
            </button>
          </div>
          <ContactIcon />
        </div>
        <div className="flex-1 right hidden 2xl:block">
          <img src={art1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
