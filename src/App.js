import s from './App.module.scss';
import { BookList, NavBar } from './components';
import ThemeContextProvider from './contexts/Theme';

function App() {
  return (
    <div className={s.app}>
      <ThemeContextProvider>
      <NavBar />
      <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
