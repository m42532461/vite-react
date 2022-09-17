import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "../redux/apiCalls";
import { useState } from "react";
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const [reload, setReload] = useState(0);
  const dispatch = useDispatch();
  const handleLogout = () => {
    logout(dispatch);
    setReload((prev) => prev + 1);
    navigate("/");
  };

  return (
    <div className="sm:h-[60px] h-[50px]">
      <div className="sm:px-[20px]  py-[10px] flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <span className="text-[14px] cursor-pointer hidden sm:flex">EN</span>
          <div className=" border-[0.5px] border-solid border-gray-300 flex items-center ml-[25px] p-[5px]">
            <input
              className="border-none w-[50px] sm:w-full"
              placeholder="Search"
            />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="flex-1 text-center">
          <h1
            className="font-bold sm:text-3xl text-[24px] cursor-pointer"
            onClick={() => navigate("/")}
          >
            LAMA.
          </h1>
        </div>
        <div className="sm:flex-1 flex-[2] flex items-center sm:justify-end justify-center">
          {!user && (
            <div
              className="sm:text-[14px] text-[12px] cursor-pointer sm:ml-[25px] ml-[10px]"
              onClick={() => navigate("/register")}
            >
              REGISTER
            </div>
          )}
          {!user && (
            <div
              className="sm:text-[14px] text-[12px] cursor-pointer sm:ml-[25px] ml-[10px]"
              onClick={() => navigate("/login")}
            >
              SIGN IN
            </div>
          )}
          {user && (
            <div
              className="sm:text-[14px] text-[12px] cursor-pointer sm:ml-[25px] ml-[10px]"
              onClick={() => navigate("/account")}
            >
              My Account
            </div>
          )}
          {user && (
            <div
              className="sm:text-[14px] text-[12px] cursor-pointer sm:ml-[25px] ml-[10px]"
              onClick={handleLogout}
            >
              LOGOUT
            </div>
          )}
          <div className="sm:text-[14px] text-[12px] cursor-pointer sm:ml-[25px] ml-[10px]">
            <Badge
              badgeContent={quantity}
              color="primary"
              onClick={() => navigate("/cart")}
            >
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
