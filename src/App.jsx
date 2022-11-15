import AnimateTest from "./components/AnimateTest";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Techs from "./pages/Techs";
import Services from "./pages/Services";

const App = () => {
  return (
    <div className="flex flex-col items-center bg-BG">
      <Home />
      <AboutMe />
      <Portfolio />
      <Services />
      <Techs />
    </div>
  );
};

export default App;
