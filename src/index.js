import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlovalProvider } from "./Context/Provider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";

ReactDOM.render(
  <GlovalProvider>
    <App />
  </GlovalProvider>,
  document.getElementById("root")
);
