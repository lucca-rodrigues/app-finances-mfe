import React, { createContext, useCallback, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const [userToken, setUserToken] = useState(null);
  const userToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2OTI5OTcyNDd9.XEMb0Oq5I3CYYMyFj5NLjfj9gSeWm4IdH6H343-CB7M";

  return (
    <AuthContext.Provider
      value={{
        userToken,
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
