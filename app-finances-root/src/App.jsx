import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Routes from "./Routes";

const App = () => (
  <>
    <Routes />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
