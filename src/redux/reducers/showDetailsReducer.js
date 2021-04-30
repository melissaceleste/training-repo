const loggedReducer = (state = true, action) => {
  switch (action.type) {
    case "SHOW_DETAILS":
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
