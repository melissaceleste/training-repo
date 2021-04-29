import "./styles/_base.css";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters();
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
