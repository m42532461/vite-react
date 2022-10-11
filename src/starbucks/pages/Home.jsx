import React from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <div className="w-full h-[10px] bg-[#006341]"></div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
