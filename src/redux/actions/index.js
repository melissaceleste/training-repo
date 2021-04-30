// where everything  happen // describes what we wanna do

import Axios from "axios";

export const increment = () => {
  return {
    //
    type: "INCREMENT",
  };
};
//returns an object with the name/type "INCREMENT". The Reducer will look for the action and execture the action

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const fetchRestaurants = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_RESTAURANTS_REQUEST" });

  try {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    dispatch({ type: "FETCH_RESTAURANTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_RESTAURANTS_FAILURE", error });
  }
};

export const showDetails = () => {
  return {
    type: "SHOW_DETAILS",
  };
};

export const like = () => {
  return {
    type: "LIKE",
  };
};
