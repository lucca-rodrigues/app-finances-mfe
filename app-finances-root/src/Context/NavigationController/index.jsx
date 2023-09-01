import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useMemo } from "react";
import { useLayoutEffect } from "react";

const NavigationControllerContext = createContext();

const NavigationControllerProvider = ({ children }) => {
  const navigate = useNavigate();
  const [storedNavigation, setStoredNavigation] = useState(null);
  // const [notHasToken, setNotHasToken] = useState(false);

  const hasToken = Cookies.get("app_myfinances");

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedNavigation = Cookies.get("app_myfinances_navigation");
      if (updatedNavigation && updatedNavigation !== storedNavigation) {
        setStoredNavigation(updatedNavigation);
        Cookies.remove("app_myfinances_navigation");
        navigate(updatedNavigation);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [navigate, storedNavigation]);

  // if (window.location.href !== "/" && !hasToken) {
  //   window.location.href = "/";

  //   return null;
  // }

  return (
    <NavigationControllerContext.Provider
      value={{
        navigate,
      }}
    >
      {children}
    </NavigationControllerContext.Provider>
  );
};

function useNavigationController() {
  const context = useContext(NavigationControllerContext);

  return context;
}

export { NavigationControllerProvider, useNavigationController };
