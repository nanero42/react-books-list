import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import "./index.scss";

export default function BookList() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className={["book-list", theme.text, theme.bg].join(' ')}>
      <ul className={"book-list__list"}>
        <li className={["book-list__item", theme.ui].join(' ')}>the wey of kings</li>
        <li className={["book-list__item", theme.ui].join(' ')}>the name of the wind</li>
        <li className={["book-list__item", theme.ui].join(' ')}>the final empire</li>
      </ul>
    </div>
  );
}
