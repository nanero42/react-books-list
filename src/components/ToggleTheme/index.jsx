import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

export default function ToggleTheme() {
  const {toggleTheme} = useContext(ThemeContext);

  return(
    <button onClick={toggleTheme}>Toggle theme</button>
  );
}