import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers";

export const store = createStore(
  allReducers,
  applyMiddleware(thunk)
  /* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
);
// globalized state // at the moment this is all in my index.js // can write it there also
