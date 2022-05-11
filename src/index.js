import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import UserLoginProvider from "./components/Context/UserLogin";
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserLoginProvider>
      <App />
    </UserLoginProvider>
  </React.StrictMode>,
);
