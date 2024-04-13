import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { MessagesContextProvider } from "./context/MessagesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <MessagesContextProvider>
          <App />
        </MessagesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
