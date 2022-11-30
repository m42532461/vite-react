import AnimateTest from "./components/AnimateTest";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Techs from "./pages/Techs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ToTop from "./components/ToTop";
import { useState } from "react";
const App = () => {
  const [language, setLanguage] = useState("English");
  return (
    <div className="flex flex-col items-center bg-BG overflow-clip relative">
      <Home language={language} changeLanguage={setLanguage} />
      <AboutMe language={language} />
      <Portfolio language={language} />
      <Techs language={language} />
      <Services language={language} />
      <Contact language={language} />
      <ToTop language={language} />
    </div>
  );
};

export default App;
