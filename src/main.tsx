import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// 引入react-router
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
