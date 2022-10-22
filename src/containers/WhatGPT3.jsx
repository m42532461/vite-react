import React from "react";
import logo from "../assets/logo.svg";
import { Feature } from "../components";
import "./style.css";
const WhatGPT3 = () => {
  return (
    <div className="m-[56px] lg:m-[135px] p-[55px]" id="gpt3__whatgpt3">
      <div className="hidden lg:flex justify-between items-start w-full">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between py-[91px]">
        <h2 className="gradient-text text-[34px] font-extrabold font-Manrope leading-[45px] max-w-[472px]">
          The possibilities are beyond your imagination
        </h2>
        <p className="text-[16px] pt-10 lg:pt-0 font-medium font-Manrope leading-[30px] text-[#FF8A71] ">
          Explore The Library
        </p>
      </div>
      <div className="flex flex-wrap flex-row justify-center lg:justify-between ">
        <div>
          <Feature
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of
          plate heard oh ought."
            direction="col"
          />
        </div>
        <div>
          <Feature
            title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly
          bachelor entrance to on by. As put impossible own apartments b"
            direction="col"
          />
        </div>
        <div>
          <Feature
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly
          bachelor entrance to on by. As put impossible own apartments b"
            direction="col"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
