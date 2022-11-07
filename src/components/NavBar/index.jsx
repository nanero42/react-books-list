import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import s from "./index.module.scss";

export default function NavBar() {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav className={s.navbar} style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
