import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions";

export default function Counter() {
  const counter = useSelector((state) => state.counter); //useSelector: to have access to the whole counter state/ to call the state
  const dispatch = useDispatch(); //gives us the ability to execute an action

  return (
    <div>
      <h1>
        {" "}
        Counter= {counter} {/* that's the state */}{" "}
      </h1>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
    </div>
  );
}
