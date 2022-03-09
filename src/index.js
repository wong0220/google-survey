import React from "react";
import ReactDOM from "react-dom";
import Survey from "./Survey";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Survey />
  </Provider>,
  document.getElementById("root")
);
