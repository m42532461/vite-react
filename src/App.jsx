import AnimateTest from "./components/AnimateTest";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Techs from "./pages/Techs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ToTop from "./components/ToTop";
import { CgArrowUp } from "react-icons/cg";
const App = () => {
  return (
    <div className="flex flex-col items-center bg-BG overflow-clip relative">
      <Home />
      <AboutMe />
      <Portfolio />
      <Techs />
      <Services />
      <Contact />
      <ToTop />
    </div>
  );
};

export default App;
