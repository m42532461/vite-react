import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between w-[1400px] items-center pt-5">
      <div className="flex items-center gap-5">
        <img src="" alt="LOGO" />
        <h1 className="text-[36px]">Paul Haung</h1>
      </div>
      <ul className="flex gap-20 text-xl text-[#445964]">
        {["home", "about", "portfolio", "service", "resume", "contact"].map(
          (item) => (
            <li>{item}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default Navbar;
