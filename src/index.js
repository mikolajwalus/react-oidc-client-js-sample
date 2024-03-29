import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import { Root } from "./Root";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { UserManager } from "oidc-client";

if (window.location.pathname === "/silent-renew") {
  var userManager = new UserManager();
  userManager.signinSilentCallback();
} else {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Root />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
