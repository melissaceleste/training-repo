// if i got more than one reducer - to combine all mein reducers, because i would split the reducers in several foulders // reducers checked which actions you did and modify the store on this base

import { combineReducers } from "redux";
// import der reducers
import counterReducer from "../reducers/counter";

const allReducers = combineReducers({
  counter: counterReducer, // kann hier auch nur counterReducer hinschreiben (selbe wie counterReducer:counterReducer)
  // weitere Reducer hierrunter einfach
});

export default allReducers;
