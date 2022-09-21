import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { emailSubscribe } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
const Newsletter = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const handleSubscribe = (e) => {
    e.preventDefault();
    emailSubscribe(dispatch, email);
  };
  return (
    // Container
    <div className="h-[60vh] bg-[#fcf5f5] flex items-center justify-center flex-col">
      {/* Title */}
      <h1 className="text-[70px] mb-[20px]">Newsletter</h1>
      {/* Description */}
      <div className="text-[24px] mb-[20px] font-extralight text-center">
        Get timely updates from your favorite products
      </div>
      {/* InputContainer */}
      <div className="sm:w-1/2 w-[80%] h-[40px] bg-white flex justify-between border-gray-300 border">
        {/* Input */}
        <input
          placeholder="Your email"
          className="flex-[8] pl-[20px]"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        {/* Button */}
        <button
          onClick={handleSubscribe}
          className="flex-1 bg-teal-600 text-white"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
