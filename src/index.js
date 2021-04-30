import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // connects our store(global state) with the entire App
import App from "./App";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
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
// get access to the whole app over the <Provider> in the global index.js
// call the actual function with the states of the stores in the components:
// ---> seSelector: to have access to the whole counter state:
// ---> dispatch the store with the reducers for example: store.dispatch(increment()) gives us the ability to execute an action
// ---> call the functions from the actions to the part where they should be called (button for example): Import {increment} from './actions' & button onClick={() => dispatch(increment())}
// finish

// Pagination:
// npm install react-router-dom
// Import {BrowserRouter} from.. in index.js

// middleware= between the action and the reducer = a function that returns another function
//API fetching:
// npm install axios
// npm install redux thunk
// npm install redux-devtools-extension
// reducer.js, index.js from reducer, actions, store.js, global index.js, component.js, app,js, css
