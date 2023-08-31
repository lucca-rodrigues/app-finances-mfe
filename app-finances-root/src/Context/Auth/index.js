import Cookies from "js-cookie";
import React, { createContext, useCallback, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [backendToken, setBackendToken] = useState(null);
  // const backendToken =
  //   "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2OTM2NjUwNjB9.b3mLVtK0d_DJg04m0R1ysK9O6uXgjUuiWLA1ymn1s_A";

  const globalInfos = {
    backendToken,
  };

  // useEffect(() => {
  //   // Cookies.set("app_myfinances", JSON.stringify(globalInfos));
  //   const currentDomain = window.location.hostname;
  //   document.cookie = `app_myfinances=${JSON.stringify(globalInfos)}; domain=${currentDomain}; path=/`;
  // }, []);

  useEffect(() => {
    const cookie = Cookies.get("app_myfinances");
    if (cookie) {
      const { backendToken } = JSON.parse(cookie);
      setBackendToken(backendToken);
    }
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
