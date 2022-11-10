import { useContext } from "react";
import { BookContext } from "../../contexts/Book";
import { ThemeContext } from "../../contexts/Theme";
import "./index.scss";

export default function BookList() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books, setBooks } = useContext(BookContext);

  return (
    <div className={["book-list", theme.text, theme.bg].join(' ')}>
      <ul className={"book-list__list"}>
        {books.map(b => <li key={b.id} className={["book-list__item", theme.ui].join(' ')}>{b?.title || '-'}</li>)}
      </ul>
    </div>
  );
}
