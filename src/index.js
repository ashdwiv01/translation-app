import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { TextContextProvider } from "./store/text-context";

ReactDOM.render(
  <TextContextProvider>
    <App />
  </TextContextProvider>,
  document.getElementById("root")
);
