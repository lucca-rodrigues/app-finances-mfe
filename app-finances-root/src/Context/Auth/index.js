import Cookies from "js-cookie";
import React, { createContext, useCallback, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const [userToken, setUserToken] = useState(null);
  const backendToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2OTM1MTYzOTB9.ATZsoRb8uKigsL-bQLLHio-C2-K5xFFj27aEw69hYNo";

  const globalInfos = {
    backendToken,
  };

  useEffect(() => {
    // Cookies.set("app_myfinances", JSON.stringify(globalInfos));
    const currentDomain = window.location.hostname;
    document.cookie = `app_myfinances=${JSON.stringify(globalInfos)}; domain=${currentDomain}; path=/`;
  }, []);
  return (
    <AuthContext.Provider
      value={{
        backendToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
