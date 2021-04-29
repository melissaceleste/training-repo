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
