const initialState = {
  items: [],
  loading: false,
  error: null,
};

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RESTAURANTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_RESTAURANTS_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload, //get our data and return it
      };
    case "FETCH_RESTAURANTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
        items: [],
      };
    default:
      return state;
  }
};

export default restaurantsReducer;
