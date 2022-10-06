import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Topbar from "./shopee/components/Topbar";
import Home from "./shopee/pages/Home";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Home />
    </div>
  );
}

export default App;
