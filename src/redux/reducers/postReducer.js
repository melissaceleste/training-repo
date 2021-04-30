const initialState = [];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload; //get our data and return it
    default:
      return state;
  }
};

export default postsReducer;
