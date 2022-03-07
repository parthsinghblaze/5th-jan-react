import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainApp from "./MainApp";
ReactDOM.render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>,
  document.getElementById("root")
);

// 1 -> src delete all the folder's
// 2 -> create a file in src name it as index.js
// 3 -> then in index.js import react , reactDOM
// 4 -> ReactDOM.render( What To Show , Where To Show )
