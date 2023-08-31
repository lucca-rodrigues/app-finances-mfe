import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { AuthProvider } from "./Context/Auth";
import { NavigationControllerProvider } from "./Context/NavigationController";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationControllerProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </NavigationControllerProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
