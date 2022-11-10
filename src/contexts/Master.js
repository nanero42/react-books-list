import { createContext } from 'react';
import ThemeContextProvider from './Theme';
import AuthContextProvider from './Auth';
import BookContextProvider from './Book';

export const MasterContext = createContext();

export default function MasterContextProvider(props) {
  return <MasterContext.Provider value>
    <ThemeContextProvider>
      <AuthContextProvider>
        <BookContextProvider>
          {props.children}
        </BookContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  </MasterContext.Provider>
}