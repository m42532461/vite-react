import React from "react";
import useElementOnScreen from "../functions/useElementOnScreen";
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8,
};
const AnimateTest = () => {
  const [containerRef1, isVisible1] = useElementOnScreen(options);
  const [containerRef2, isVisible2] = useElementOnScreen(options);
  const [containerRef3, isVisible3] = useElementOnScreen(options);
  return (
    <div>
      <div className="h-screen w-screen bg-blue-200 flex items-center justify-center hover:animate-[scalebottom_1s_ease-in-out_1]">
        scroll down
      </div>
      <div
        ref={containerRef1}
        className={`h-screen flex justify-center items-center ${
          isVisible1 ? "" : "opacity-0"
        } transition duration-300 ease-in`}
      >
        <h1>HI MOM</h1>
        <span>This is my website</span>
      </div>
      <div
        ref={containerRef2}
        className={`h-screen flex justify-center items-center ${
          isVisible2 ? "" : "opacity-0"
        } duration-300 ease-in`}
      >
        <h1>HI MOM</h1>
        <span>This is my website</span>
      </div>
      <div
        ref={containerRef3}
        className={`h-screen flex justify-center items-center ${
          isVisible3 ? "" : "opacity-0"
        } duration-300 ease-in`}
      >
        <h1>HI MOM</h1>
        <span>This is my website</span>
      </div>
      <div className="h-screen w-screen bg-blue-200 flex items-center justify-center">
        scroll up
      </div>
    </div>
  );
};

export default AnimateTest;
