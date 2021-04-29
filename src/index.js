import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // connects our store(global state) with the entire App
import App from "./App";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
/* import { createStore } from "redux";
import allReducers from "./redux/reducers"; */

/* const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// working with redux:
// npx install redux react-redux // & redux devtools extension install in Browser and fill into the const store
// folders: redux -> actions(index.js) & reducers(index.js(combineReducer), ...Reducer.js, ...Reducer.js, ...)
// write the actions, write the reducers, import everything
// write the store or write it into the index.js
// dispatch the store with the reducers for example: store.dispatch(increment())
