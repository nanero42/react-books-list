import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { text: 'color-light-text', ui: 'color-light-ui', bg: 'color-light-bg' },
    dark: { text: 'color-dark-text', ui: 'color-dark-ui', bg: 'color-dark-bg' },
  })
  const toggleTheme = () => {
    setTheme({...theme, isLightTheme: !theme.isLightTheme});
  }
  
  return <ThemeContext.Provider value={{...theme, toggleTheme}}>
    {props.children}
  </ThemeContext.Provider>
}