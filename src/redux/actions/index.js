// where everything  happen // describes what we wanna do

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

export function fetchCharacters(
  url = "https://rickandmortyapi.com/api/character"
) {
  return (dispatch) => {
    dispatch(fetchCharactersBegin());
    return fetch(url)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchCharactersSuccess(json.characters));
        return json.characters;
      })
      .catch((error) => dispatch(fetchCharactersFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_CHARACTERS_BEGIN = "FETCH_CHARACTERS_BEGIN";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

export const fetchCharactersBegin = () => ({
  type: FETCH_CHARACTERS_BEGIN,
});

export const fetchCharactersSuccess = (characters) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: { characters },
});

export const fetchCharactersFailure = (error) => ({
  type: FETCH_CHARACTERS_FAILURE,
  payload: { error },
});
