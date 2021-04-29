import "./styles/_base.css";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import Counter from "./components/Counter";
// import { useDispatch, useSelector } from "react-redux";

function App() {
  /*   const counter = useSelector((state) => state.counter); //useSelector: to have access to the whole counter state:
  const dispatch = useDispatch(); //gives us the ability to execute an action */
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters();
    // eslint-disable-next-line
  }, []);

  function getAllCharacters(url = "https://rickandmortyapi.com/api/character") {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters((oldState) => [...oldState, ...data.results]);

        const nextUrl = data.info.nextUrl; //Paginierung
        nextUrl && getAllCharacters(nextUrl); // er durchläuft das fetchen nochmal nur mit der nextUrl (Url der zweiten Seite)
      });
  }

  return (
    <body>
      <Counter />
      {characters.map((character) => (
        <Card
          image={character.image}
          name={character.name}
          status={character.status}
        />
      ))}
    </body>
  );
}

export default App;

/* onClick={() => dispatch(increment)} // callback with the dispatch function, to execute my increment action */
