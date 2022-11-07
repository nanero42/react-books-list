import { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [auth, setAuth] = useState({
    isAuthentificated: false,
  })
  const toggleAuth = () => {
    setAuth({...auth, isAuthentificated: !auth.isAuthentificated});
  }
  return(
    <AuthContext.Provider value={{...auth, toggleAuth}}>
      {props.children}
    </AuthContext.Provider>
  );
}