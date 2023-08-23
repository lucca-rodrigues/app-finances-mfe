import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Account from "./Pages/Account";

const App = () => (
  <>
    <Account />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
