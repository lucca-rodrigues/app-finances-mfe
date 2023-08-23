import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Signup from "./Pages/Signup";

const App = () => (
  <div className="container">
    <div>Name: app-finances-root</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>

    <Signup />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
