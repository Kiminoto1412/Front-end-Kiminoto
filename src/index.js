import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import bootstrap from "bootstrap";
import ErrorContextProvider from "./context/ErrorContext";
import AuthContextProvider from "./context/AuthContext";
import CategoriesContextProvider from "./context/CategoriesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorContextProvider>
        <AuthContextProvider>
          <CategoriesContextProvider>
            <App />
          </CategoriesContextProvider>
        </AuthContextProvider>
      </ErrorContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
