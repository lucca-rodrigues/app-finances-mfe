import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Routes from "./Routes";
import { AuthProvider } from "./Context/Auth";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
