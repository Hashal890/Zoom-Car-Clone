import React, { createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(false);
  const toggleIsAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <AuthContext.Provider value={[isAuth, toggleIsAuth]}>
      {children}
    </AuthContext.Provider>
  );
}
