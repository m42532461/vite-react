import React from "react";
import { google, dropbox, slack, shopify, atlassian } from "./index";
const Brand = () => {
  return (
    <div className="flex flex-wrap justify-center items-center m-[56px]">
      <div className="min-w-[120px] max-w-[150px] m-4 flex-1 items-center justify-center flex">
        <img src={google} />
      </div>
      <div className="min-w-[120px] max-w-[150px] m-4 flex-1 items-center justify-center flex">
        <img src={slack} />
      </div>
      <div className="min-w-[120px] max-w-[150px] m-4 flex-1 items-center justify-center flex">
        <img src={atlassian} />
      </div>
      <div className="min-w-[120px] max-w-[150px] m-4 flex-1 items-center justify-center flex">
        <img src={dropbox} />
      </div>
      <div className="min-w-[120px] max-w-[150px] m-4 flex-1 items-center justify-center flex">
        <img src={shopify} />
      </div>
    </div>
  );
};

export default Brand;
