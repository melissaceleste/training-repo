export const restaurantsPerPage = (state = 10, action) => {
  switch (action.type) {
    case "pagination/restaurantsPerPage":
      return state;
    default:
      return state;
  }
};

export const pageLimit = (state = 5, action) => {
  switch (action.type) {
    case "pagination/pageLimit":
      return state;
    default:
      return state;
  }
};

export const currentPageReducer = (state = 1, action) => {
  switch (action.type) {
    case "pagination/goToNextPage":
      return { ...state, page: state.page + 1 };
    case "pagination/goToPreviousPage":
      return { ...state, page: state.page - 1 };
    default:
      return state;
  }
};
export default currentPageReducer;

/* export const pages = (state = 10, action) => {
    switch (action.type) {
      case "pagination/restaurantsPerPage":
        return !state;
      default:
        return state;
    }
  }; */
