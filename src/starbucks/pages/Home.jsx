import React from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-[full]  flex flex-col items-center relative">
      <div className="w-[130px] h-[220px] z-30 fixed top-[153px] right-4">
        <img
          src="https://www.starbucks.com.tw/home/objects/images/index-AD/221005/index-AD@3x.jpg"
          alt=""
          className=" rounded-2xl "
        />
      </div>
      <div className="w-full">
        <div className="w-full h-[10px] bg-[#006341]"></div>
      </div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
