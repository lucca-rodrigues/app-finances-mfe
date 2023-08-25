import React, { useEffect } from "react";
import { useAuth } from "../Context/Auth";

const Configure = ({ navigateTo }) => {
  const { backendToken } = useAuth();

  const globalInfos = {
    backendToken,
  };

  console.log("Configure");
  const currentDomain = window.location.hostname;
  document.cookie = `app_myfinances=${JSON.stringify(globalInfos)}; domain=${currentDomain}; path=/`;

  useEffect(() => {
    console.log("navigateTo inside useEffect:", navigateTo);
  }, [navigateTo]);

  return null;
};

export default Configure;
