import React from "react";
import { SiGithub, SiInstagram } from "react-icons/si";
import Line from "../assets/line.png";
const ContactIcon = () => {
  return (
    <div className="flex gap-[26px] relative">
      <a href="https://github.com/m42532461" target="_blank">
        <SiGithub className="w-10 h-10 hover:-translate-y-1 duration-200 cursor-pointer text-black" />
      </a>
      <a
        href="https://l.facebook.com/l.php?u=https%3A%2F%2Fline.me%2Fti%2Fp%2F1gYa-cBgHt%3Ffbclid%3DIwAR3zUibGREqCqiNnmVdIyfChBX6eeuhy60CaKgEJltupKrYLjyCOti43RLs&h=AT1RzHbUJljnhr7fMz3mWo3jhx-kWP-yBv43YkaOwqNA_bzkpXFMldzC9ZpgX9EFAhuLDVtllTvo2SRuDBhFGHZq-H1RpQQGzNqRLEROsugrMxn8PyLVm9mTbFAFr8b9im6P5Q"
        target="_blank"
      >
        <img
          className="w-10 h-10 hover:-translate-y-1 duration-200 cursor-pointer "
          src={Line}
          alt="Line"
        />
      </a>
      <a href="https://www.instagram.com/couldchic0712/" target="_blank">
        <SiInstagram className="w-10 h-10 hover:-translate-y-1 duration-200 cursor-pointer text-black" />
      </a>
    </div>
  );
};

export default ContactIcon;
