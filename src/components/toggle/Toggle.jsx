import "./toggle.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

function Toggle() {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src="assets/sun.png" alt="" className="t-icon" />
      <img src="assets/moon.png" alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : "25px" }}
      ></div>
    </div>
  );
}

export default Toggle;
