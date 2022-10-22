import React from "react";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

import { Article } from "../components";
const Blog = () => {
  return (
    <div className="flex flex-col m-[56px] lg:m-[135px]">
      <div className="w-full">
        <h1 className="gradient-text text-[30px] md:text-[62px] md:leading-[75px] -tracking-[0.04rem] font-Manrope font-extrabold mb-20">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="w-full h-full">
        <div className="flex flex-col md:grid md:grid-cols-[minmax(0,1.5fr),repeat(2,minmax(0,1fr))]  gap-8">
          {[blog01, blog02, blog03, blog04, blog05].map((article) => (
            <div className="first:row-span-2 w-full h-full">
              <Article img={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
