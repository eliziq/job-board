import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { saveToSessionStorage } from "./util/helpers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

store.subscribe(() => saveToSessionStorage("state", store.getState()));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
