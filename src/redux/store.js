import { createStore } from "redux";
import allReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store = createStore(
  allReducers,
  //applyMiddleware(thunk)

  // alows our actions to return an object or function
  composeWithDevTools(applyMiddleware(thunk))
  /*   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk)) */
);
// globalized state // at the moment this is all in my index.js // can write it there also
