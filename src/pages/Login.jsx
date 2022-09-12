import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div
      className="w-[100vw] h-[100vh] bg-cover flex justify-center items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      }}
    >
      {/* Wrapper */}
      <div className="p-[20px] w-3/4 md:w-1/4 bg-white">
        <h1 className="text-[24px] font-light">SIGN IN</h1>
        <form className="flex flex-col">
          <input
            className="flex-1 min-w-2/5 my-[10px] p-[10px]"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="flex-1 min-w-2/5 my-[10px] p-[10px]"
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="text-[12px] my-[20px]"></span>
          <button
            onClick={handleClick}
            // disabled={isFetching}
            className={`w-2/5 py-[15px] px-[20px] bg-teal-600 text-white cursor-pointer mb-[10px] ${
              isFetching && "cursor-not-allowed bg-green-200"
            }`}
          >
            LOGIN
          </button>
          <span className=" text-red-600">Something went wrong</span>
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
