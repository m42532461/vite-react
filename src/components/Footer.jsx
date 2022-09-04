import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left */}
      <div className="flex-1 flex flex-col p-[20px]">
        {/* Logo */}
        <h1 className="text-[30px] font-bold">LAMA.</h1>
        {/* Desc */}
        <p className="my-[20px] ">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        {/* SocialContainer */}
        <div className="flex ">
          <div className="w-[40px] h-[40px] rounded-full text-white bg-[#3B5999] justify-center items-center flex mr-[20px]">
            <FacebookIcon />
          </div>
          <div className="w-[40px] h-[40px] rounded-full text-white bg-[#E4405F] justify-center items-center flex mr-[20px]">
            <InstagramIcon />
          </div>
          <div className="w-[40px] h-[40px] rounded-full text-white bg-[#55ACEE] justify-center items-center flex mr-[20px]">
            <TwitterIcon />
          </div>
          <div className="w-[40px] h-[40px] rounded-full text-white bg-[#E60023] justify-center items-center flex mr-[20px]">
            <PinterestIcon />
          </div>
        </div>
      </div>
      {/* Center */}
      <div className="flex-1 p-[20px] hidden md:block">
        {/* Title */}
        <h3 className="mb-[30px] text-md font-semibold">Useful Links</h3>
        {/* List */}
        <ul className="flex flex-wrap">
          {/* ListItem */}
          <li className="mb-[10px] w-1/2">Home</li>
          <li className="mb-[10px] w-1/2">Cart</li>
          <li className="mb-[10px] w-1/2">Man Fashion</li>
          <li className="mb-[10px] w-1/2">Woman Fashion</li>
          <li className="mb-[10px] w-1/2">Accessories</li>
          <li className="mb-[10px] w-1/2">My Account</li>
          <li className="mb-[10px] w-1/2">Order Tracking</li>
          <li className="mb-[10px] w-1/2">Wishlist</li>
          <li className="mb-[10px] w-1/2">Terms</li>
          <li className="mb-[10px] w-1/2">Home</li>
        </ul>
      </div>
      {/* Right */}
      <div className="flex-1 p-[20px] bg-[#fff8f8] md:bg-white">
        {/* Title */}
        <h3 className="mb-[30px] text-md font-semibold">Useful Links</h3>
        {/* ContactItem */}
        <div className="mb-[20px] flex items-center">
          <RoomIcon style={{ marginRight: "10px" }} /> 622 Dixie Path , South
          Tobinchester 98336
        </div>
        <div className="mb-[20px] flex items-center">
          <PhoneIcon style={{ marginRight: "10px" }} /> +1 234 5678
        </div>
        <div className="mb-[20px] flex items-center">
          <EmailIcon style={{ marginRight: "10px" }} /> contact@mail.com
        </div>
        {/* Payment */}
        <img className="w-1/2" src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    </div>
  );
};

export default Footer;
