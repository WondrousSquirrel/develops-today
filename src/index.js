import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./Component/App";

import { BrowserRouter as Router } from "react-router-dom";

import "./style.scss";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
