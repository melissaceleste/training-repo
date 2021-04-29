import "./styles/_base.css";
import { useEffect, useState } from "react";
import Counter from "./components/Counter";
//import CardList from "./components/CardList";
import Card from "./components/Card";
// import { useDispatch, useSelector } from "react-redux";

function App() {
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
      <Card />
      {characters.map((character) => (
        <Card
          image={character.image}
          name={character.name}
          status={character.status}
        />
      ))}
      {/* <CardList/> */}
    </body>
  );
}

export default App;

/* onClick={() => dispatch(increment)} // callback with the dispatch function, to execute my increment action */
