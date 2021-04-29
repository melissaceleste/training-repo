import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducers from "./redux/reducers";

const store = createStore(allReducers);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// working with redux:
// npx install redux react-redux
// folders: redux -> actions(index.js) & reducers(index.js(combineReducer), ...Reducer.js, ...Reducer.js, ...)
// write the actions, write the reducers, import everything
// write the store
// dispatch the store with the reducers for example: store.dispatch(increment())
