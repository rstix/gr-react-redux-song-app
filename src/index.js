import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // it is a component that is provided by the react-redux, it will sitt on top of all the components
import { createStore } from "redux"; // function from redux, it gets all the reducers and returns all the data (state) and redux reducers

import App from "./components/App";
import reducers from "./reducers";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  rootElement
);
