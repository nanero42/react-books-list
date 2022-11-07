import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import { ThemeContext } from "../../contexts/Theme";
import "./index.scss";

export default function NavBar() {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const {isAuthentificated, toggleAuth} = useContext(AuthContext);

  const theme = isLightTheme ? light : dark;

  return (
    <nav className={["navbar", theme.ui, theme.text].join(' ')}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>{ isAuthentificated ? 'Signed in' : 'Signed out' }</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
