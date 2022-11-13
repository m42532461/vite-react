import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h1 className="text-2xl p-20">Payment Successful!!</h1>
        <button className="border p-2" onClick={() => navigate("/")}>
          Back to Homepage
        </button>
      </div>
    </>
  );
};

export default Success;
