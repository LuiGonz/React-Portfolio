import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {ProvideTheme} from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ProvideTheme>
      <App />
    </ProvideTheme>
  </React.StrictMode>,
  document.getElementById("root")
);