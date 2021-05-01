import { combineReducers } from "redux";
// import der reducers
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import restaurantsReducer from "./restaurantReducer";
import showDetailsReducer from "./showDetailsReducer";
import like from "./like";
import pageReducer from "./burger";

const allReducers = combineReducers({
  counter: counterReducer, // kann hier auch nur counterReducer hinschreiben (selbe wie counterReducer:counterReducer)
  logged: loggedReducer,
  restaurantsReducer: restaurantsReducer,
  showDetailsReducer: showDetailsReducer,
  liked: like,
  page: pageReducer,
});

export default allReducers;

// if i got more than one reducer - to combine all mein reducers, because i would split the reducers in several foulders // reducers checked which actions you did and modify the store on this base
