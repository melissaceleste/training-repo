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

/* export const fetchPosts = () => {
  const promise = axios.get("https://rickandmortyapi.com/api/character");

  return {
    type: "FETCH_POSTS",
    payload: promise, // has the list of our posts
  };
}; */

export const fetchPosts = () => async (dispatch, getState) => {
  const response = await Axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  //console.log(response.data);
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};
