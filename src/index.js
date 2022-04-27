import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import styles from "./index.module.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
