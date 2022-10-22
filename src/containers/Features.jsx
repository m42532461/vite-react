import React, { Fragment } from "react";
import { Feature } from "../components";

const Features = () => {
  const featuresData = [
    {
      title: "Improving end distrusts instantly",
      text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      title: "Become the tended active",
      text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      title: "Message or am nothing",
      text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      title: "Really boy law county",
      text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row m-[56px] lg:m-[135px]">
      <div className=" flex-1 xl:pr-40">
        <h2 className="gradient-text text-[34px] leading-[45px] font-extrabold font-Manrope">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <p className="text-subtext text-[16px] leading-[30px] mt-[34px] mb-20">
          Request Early Access to Get Started
        </p>
      </div>
      <div className=" flex-1">
        <div className="hidden md:block">
          {featuresData.map((data) => (
            <Feature
              title={data.title}
              text={data.text}
              titleFont="18px"
              textFont="14px"
              direction="row"
              leading="24px"
            />
          ))}
        </div>
        <div className="flex flex-col md:hidden w-full">
          {featuresData.map((data) => (
            <Feature
              title={data.title}
              text={data.text}
              titleFont="18px"
              textFont="14px"
              direction="col"
              leading="24px"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
