import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import art1 from "../assets/Home_art 1.svg";
import { SiInstagram, SiGithub } from "react-icons/si";
import Line from "../assets/line.png";
const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Freelancer", "Software Developer"];
  const period = 2000;

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
      className="flex flex-col items-center mb-[55px] bg-BG pb-[99.45px] "
      id="home"
    >
      <Navbar />
      <div className="flex w-[1400px] mt-[172px] items-end">
        <div className="flex-1 left flex flex-col gap-[150px] h-full ">
          <div className="text-[#445964]">
            <span className="text-[24px] font-medium">Hi there,</span>
            <h1 className="text-[72px] font-black">
              I'm a <span className="border-r-4 border-[#666]">{text}</span>
            </h1>
            <span className="text-[24px] font-medium">
              Welcome to my profolio website
            </span>
          </div>
          <div className="">
            <button className="px-[31px] py-[24px] font-black bg-[#263138] text-white rounded-[20px]">
              Learn more about me
            </button>
          </div>
          <div className="flex gap-[26px]">
            <SiGithub className="w-10 h-10" />
            <img className="w-10 h-10" src={Line} alt="Line" />
            <SiInstagram className="w-10 h-10" />
          </div>
        </div>
        <div className="flex-1 right">
          <img src={art1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
