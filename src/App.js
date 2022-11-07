import s from './App.module.scss';
import { BookList, NavBar, ToggleTheme } from './components';
import MasterContextProvider from './contexts/Master';

function App() {
  return (
    <div className={s.app}>
      <MasterContextProvider>
        <NavBar />
        <BookList />
        <ToggleTheme />
      </MasterContextProvider>
    </div>
  );
}

export default App;
