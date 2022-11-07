import s from './App.module.scss';
import { BookList, NavBar, ToggleTheme } from './components';
import AuthContextProvider from './contexts/Auth';
import ThemeContextProvider from './contexts/Theme';

function App() {
  return (
    <div className={s.app}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookList />
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
