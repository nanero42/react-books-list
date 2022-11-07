import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import "./index.scss";

export default function NavBar() {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav className={["navbar", theme.ui, theme.text].join(' ')}>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
