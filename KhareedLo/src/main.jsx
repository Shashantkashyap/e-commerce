import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ContextProvider from "./Context/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ContextProvider>
);
