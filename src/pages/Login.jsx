import React from "react";

const Login = () => {
  return (
    <div
      className="w-[100vw] h-[100vh] bg-cover flex justify-center items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      }}
    >
      {/* Wrapper */}
      <div className="p-[20px] w-1/4 bg-white">
        <h1 className="text-[24px] font-light">SIGN IN</h1>
        <form className="flex flex-col">
          <input
            className="flex-1 min-w-2/5 my-[10px] p-[10px]"
            placeholder="username"
          />
          <input
            className="flex-1 min-w-2/5 my-[10px] p-[10px]"
            placeholder="password"
          />
          <span className="text-[12px] my-[20px]"></span>
          <button className="w-2/5 py-[15px] px-[20px] bg-teal-600 text-white cursor-pointer mb-[10px]">
            LOGIN
          </button>
          <a
            href="/"
            className=" my-[5px] text-[12px] underline cursor-pointer"
          >
            DO NOT YOU REMEMBER THE PASSWORD?
          </a>
          <a
            href="/"
            className=" my-[5px] text-[12px] underline cursor-pointer"
          >
            CREATE A NEW ACCOUNT
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
