import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";

export default function CardList({ characters }) {
  const counter = useSelector((state) => state.characters); //useSelector: to have access to the whole counter state:
  const dispatch = useDispatch(); //gives us the ability to execute an action

  return (
    <div>
      {characters.map((character) => (
        <Card
          image={character.image}
          name={character.name}
          status={character.status}
        />
      ))}
    </div>
  );
}
