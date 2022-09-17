import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { register } from "../redux/apiCalls";

const Register = () => {
  const [input, setInput] = useState({});
  const [confirmPassword, setConfirmPassword] = useState(true);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setConfirmPassword(input.password === input.confirmPassword);
  };
  console.log(input);

  const handleRegister = (e) => {
    e.preventDefault();
    setConfirmPassword(input.password === input.confirmPassword);
    if (!input.password === input.confirmPassword) return;

    register(dispatch, input);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Announcement />
      <div
        className="w-[100vw] h-[calc(100vh-80px)] sm:h-[calc(100vh-90px)] bg-center flex justify-center items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        }}
      >
        {/* Wrapper */}
        <div className="p-[20px] w-3/4 md:w-2/5 bg-white">
          <h1 className="text-[24px] font-light">CREATE AN ACCOUNT</h1>

          {!confirmPassword && (
            <h3 className="text-[12px] my-[20px] text-red-600">
              passwords not the same
            </h3>
          )}
          <form className="flex flex-wrap">
            <input
              className="flex-1 min-w-2/5 mt-[20px] mr-[10px] p-[10px]"
              placeholder="firstname"
              name="firstname"
              onChange={handleChange}
              type="text"
            />
            <input
              className="flex-1 min-w-2/5 mt-[20px] mr-[10px] p-[10px]"
              placeholder="lastname"
              name="lastname"
              onChange={handleChange}
              type="text"
            />
            <input
              className="flex-1 min-w-2/5 mt-[20px] mr-[10px] p-[10px]"
              placeholder="username"
              name="username"
              onChange={handleChange}
              type="text"
            />
            <input
              className="flex-1 min-w-2/5 mt-[20px] mr-[10px] p-[10px]"
              placeholder="email"
              name="email"
              onChange={handleChange}
              type="text"
            />
            <input
              className="flex-1 min-w-2/5 mt-[20px] mr-[10px] p-[10px]"
              placeholder="password"
              name="password"
              onChange={handleChange}
              type="password"
              onFocus={() => setPasswordFocus(true)}
            />
            <input
              className="flex-1 min-w-2/5 mt-[20px] mr-[10px] p-[10px]"
              placeholder="confirm password"
              name="confirmPassword"
              onChange={handleChange}
              type="password"
              onFocus={() => setConfirmPasswordFocus(true)}
            />
            <button
              className="w-2/5 py-[15px] px-[20px] bg-teal-600 text-white cursor-pointer"
              onClick={handleRegister}
            >
              CREATE
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
