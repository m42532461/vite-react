import React from "react";
import Navbar from "../components/Navbar";
import art1 from "../assets/Home_art 1.svg";
const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="flex w-[1400px]">
        <div className="flex-1 left flex flex-col">
          <span>Hi there</span>
          <h1>I'm a programmer</h1>
          <span>Welcome to my profolio website</span>
          <button>Learn more about me</button>
          <div className="flex">
            <img src="" alt="github" />
            <img src="" alt="linkedin" />
            <img src="" alt="instagram" />
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
