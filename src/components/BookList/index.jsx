import { useContext } from "react";
import { ThemeContext } from "../../contexts";
import s from "./index.module.scss";

export default function BookList() {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light: dark;

  console.log(theme);

  return <div className={s.BookList} style={{ color: theme.syntax, background: theme.bg }}>
    <ul>
      <li style={{ background: theme.ui }}>the wey of kings</li>
      <li style={{ background: theme.ui }}>the name of the wind</li>
      <li style={{ background: theme.ui }}>the final empire</li>
    </ul>
  </div>
}