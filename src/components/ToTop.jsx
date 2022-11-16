import React, { useState } from "react";
import { CgArrowUp } from "react-icons/cg";

const ToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div
      className={` bottom-10 right-10 sticky w-full flex justify-end ${
        visible ? "" : "opacity-0"
      }`}
    >
      <button
        className="px-10 text-[40px] flex items-center"
        onClick={() => scrollToTop()}
      >
        <CgArrowUp />
        Top
      </button>
    </div>
  );
};

export default ToTop;
