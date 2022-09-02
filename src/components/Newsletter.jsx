import React from "react";
import SendIcon from "@mui/icons-material/Send";
const Newsletter = () => {
  return (
    // Container
    <div className="h-[60vh] bg-[#fcf5f5] flex items-center justify-center flex-col">
      {/* Title */}
      <h1 className="text-[70px] mb-[20px]">Newsletter</h1>
      {/* Description */}
      <div className="text-[24px] mb-[20px] font-extralight">
        Get timely updates from your favorite products
      </div>
      {/* InputContainer */}
      <div className="w-1/2 h-[40px] bg-white flex justify-between border-gray-300 border">
        {/* Input */}
        <input placeholder="Your email" className="flex-[8] pl-[20px]"></input>
        {/* Button */}
        <button className="flex-1 bg-teal-600 text-white">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
