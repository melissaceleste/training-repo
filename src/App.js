import "./styles/_base.css";
//import Counter from "./components/Counter";
import CardList from "./components/CardList";

function App() {
  return (
    <div>
      <CardList />
    </div>
  );
}

export default App;

/* onClick={() => dispatch(increment)} // callback with the dispatch function, to execute my increment action */
