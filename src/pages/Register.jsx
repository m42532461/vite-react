import React from "react";

const Register = () => {
  return (
    <div
      className="w-[100vw] h-[100vh] bg-center flex justify-center items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      }}
    >
      {/* Wrapper */}
      <div className="p-[20px] w-2/5 bg-white">
        <h1 className="text-[24px] font-light">CREATE AN ACCOUNT</h1>
        <form className="flex flex-wrap">
          <input
            className="flex-1 min-w-2/5 mt-[20px] mr-[10px] p-[10px]"
            placeholder="name"
          />
          <input
            className="flex-1 min-w-2/5 mt-[20px] mr-[10px] p-[10px]"
            placeholder="lastname"
          />
          <input
            className="flex-1 min-w-2/5 mt-[20px] mr-[10px] p-[10px]"
            placeholder="username"
          />
          <input
            className="flex-1 min-w-2/5 mt-[20px] mr-[10px] p-[10px]"
            placeholder="email"
          />
          <input
            className="flex-1 min-w-2/5 mt-[20px] mr-[10px] p-[10px]"
            placeholder="password"
          />
          <input
            className="flex-1 min-w-2/5 mt-[20px] mr-[10px] p-[10px]"
            placeholder="confirm password"
          />
          <span className="text-[12px] my-[20px]"></span>
          <button className="w-2/5 py-[15px] px-[20px] bg-teal-600 text-white cursor-pointer">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
