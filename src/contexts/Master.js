import { createContext } from 'react';
import ThemeContextProvider from './Theme';
import AuthContextProvider from './Auth';

export const MasterContext = createContext();

export default function MasterContextProvider(props) {
  return <MasterContext.Provider value>
    <ThemeContextProvider>
      <AuthContextProvider>
        {props.children}
      </AuthContextProvider>
    </ThemeContextProvider>
  </MasterContext.Provider>
}