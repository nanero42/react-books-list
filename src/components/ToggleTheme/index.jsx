import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import "./index.scss";

export default function ToggleTheme() {
  const {toggleTheme} = useContext(ThemeContext);

  return(
    <button className="toggle-theme__button" onClick={toggleTheme}>Toggle theme</button>
  );
}