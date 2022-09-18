import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { login } from "../redux/apiCalls";
import { v4 as uuidv4 } from "uuid";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [inputError, setInputError] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [uuid, setuuid] = useState(null);
  const [code, setCode] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleSendMail = (e) => {
    e.preventDefault();
    if (!username || !email) {
      setInputError(true);
      return;
    }
    // send mail
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setInputError(true);
      return;
    }
    if (!isForgotPassword) {
      login(dispatch, { username, password });
      navigate("/");
    } else {
      // reset password
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <Announcement />
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
              onChange={(e) => {
                setUsername(e.target.value);
                if (password && e.target.value) setInputError(false);
              }}
            />
            {!isForgotPassword && (
              <input
                className="flex-1 min-w-2/5 my-[10px] p-[10px]"
                placeholder="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (e.target.value && username) setInputError(false);
                }}
              />
            )}
            {isForgotPassword && (
              <>
                <input
                  className="flex-1 min-w-2/5 my-[10px] p-[10px]"
                  placeholder="email"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (e.target.value && username) {
                      setInputError(false);
                    }
                  }}
                />
                <input
                  className="flex-1 min-w-2/5 my-[10px] p-[10px]"
                  placeholder="verify code"
                  type="text"
                  onChange={(e) => {
                    setCode(e.target.value);
                    if (e.target.value && username) {
                      setInputError(false);
                    }
                  }}
                />
                <button
                  onClick={handleSendMail}
                  className={`w-1/2 py-[5px] bg-gray-600 text-white cursor-pointer mb-[10px] hover:bg-teal-600 ${
                    isFetching && "cursor-not-allowed bg-green-200"
                  }`}
                >
                  send mail to get verify code
                </button>
              </>
            )}
            <span className="text-[12px] my-[20px]"></span>
            <button
              onClick={handleClick}
              // disabled={isFetching}
              className={`w-2/5 py-[15px] px-[20px] bg-teal-600 text-white cursor-pointer mb-[10px] ${
                isFetching && "cursor-not-allowed bg-green-200"
              }`}
            >
              {isForgotPassword ? "VERIFY" : "LOGIN"}
            </button>
            <span className={`text-red-600 ${inputError ? "" : "hidden"}`}>
              Something went wrong
            </span>
            <span
              className=" my-[5px] text-[12px] underline cursor-pointer"
              onClick={() => {
                setIsForgotPassword(true);
                setuuid(uuidv4());
              }}
            >
              DO NOT YOU REMEMBER THE PASSWORD?
            </span>
            <a
              href="/register"
              className=" my-[5px] text-[12px] underline cursor-pointer"
            >
              CREATE A NEW ACCOUNT
            </a>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
