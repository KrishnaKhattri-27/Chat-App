import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { MessagesContextProvider } from "./context/MessagesContext";
import { SocketContextProvider } from "./context/SocketContext";
import { ConversationContextProvider } from "./context/ConversationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SocketContextProvider>
          <ConversationContextProvider>
            <MessagesContextProvider>
              <App />
            </MessagesContextProvider>
          </ConversationContextProvider>
        </SocketContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
