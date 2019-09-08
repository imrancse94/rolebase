import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store/index";
import { Provider } from "react-redux";
import Http from './Http';
import cookie from "js-cookie";
import jwt from "jsonwebtoken";
import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
// import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'

const jwt_secret = "knCj1t1a1ctajE7lWF9yddGGHKbRZUDxtXYbBdNyyQhv5bUe12e7uK9QYloOTrGm";

let token = cookie.get("token");
if (token) {
  jwt.verify(token, jwt_secret, (err, decoded) => {
    if (err) {
      cookie.remove("token");
      token = null;
    } else {
      if (decoded.iss !== "http://localhost:8000/api/auth/login") {
        cookie.remove("token");
        token = null;
      }
    }
  });
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
if (token) {
  Http.post("http://localhost:8000/api/auth/me").then(res => {
    store.dispatch({ type: "SET_LOGIN", payload: res.data });
    console.log('render');
    render();
  });
} else {
  render();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
