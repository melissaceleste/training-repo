import restaurants from "../../components/CardList";

const initialState = {
  burgerNumber: 0,
};

export default function burgerReducer(state = initialState, action) {
  switch (action.type) {
    case "burger/nextBurger":
      return restaurants.length - 1 > state.burgerNumber
        ? { ...state, burgerNumber: state.burgerNumber + 1 }
        : { ...state };

    case "burger/previousBurger":
      return state.burgerNumber > 0
        ? { ...state, burgerNumber: state.burgerNumber - 1 }
        : { ...state };

    default:
      return state;
  }
}
