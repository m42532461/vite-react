import React from "react";

const Article = ({
  img,
  title = "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  date = "Sep 26, 2021",
}) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full">
        <img src={img} alt="" className="w-full h-full" />
      </div>
      <div className="bg-blog text-white px-5 py-8 flex flex-col  justify-between h-full">
        <div className="flex flex-col ">
          <p className="text-[12px] font-bold pb-4">{date}</p>
          <h1 className="text-[20px] font-extrabold pb-20">{title}</h1>
        </div>
        <p className="text-[12px] font-bold">Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
