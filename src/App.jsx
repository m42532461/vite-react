import React, { useEffect, useRef, useState } from "react";
import useElementOnScreen from "./functions/useElementOnScreen";

// let sectionClass = "";
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       // section = "";
//       entry.target.classList.add("show");
//     } else {
//       // section = "";
//       entry.target.classList.remove("show");
//     }
//   });
// });
// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((el) => observer.observe(el));
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};
const App = () => {
  const [containerRef1, isVisible1] = useElementOnScreen(options);
  return (
    <div className="">
      <div className="h-screen w-screen bg-blue-200 flex items-center justify-center">
        scroll down
      </div>
      <div
        ref={containerRef1}
        className="h-[80vh] flex justify-center items-center"
      >
        {isVisible1 ? "IN" : "NOT IN"}
      </div>
      <div className="h-screen w-screen bg-blue-200 flex items-center justify-center">
        scroll up
      </div>
      {/* <section className="hidden">
        <h1>HI MOM</h1>
        <span>This is my website</span>
      </section>
      <section className="hidden">
        <h1>HI MOM</h1>
        <span>This is my website</span>
      </section>
      <section className="hidden">
        <h1>HI MOM</h1>
        <span>This is my website</span>
      </section> */}
    </div>
  );
};

export default App;
