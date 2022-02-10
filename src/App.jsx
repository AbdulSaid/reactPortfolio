import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./app.scss";
import Menu from "./components/menu/Menu";
import Toggle from "./components/toggle/Toggle";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Toggle />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
