import React from "react";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const AnimateTest = () => {
  const [items, setItems] = useState([0, 1, 2]);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  const add = () => setItems([...items, items.length]);
  return (
    <div>
      <ul ref={parent}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={add}>Add number</button>
      <button onClick={() => enableAnimations(false)}>Disable</button>
    </div>
  );
};

export default AnimateTest;
