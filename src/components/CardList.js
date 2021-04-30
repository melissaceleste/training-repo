import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../redux/actions";
import "./Posts.css";
import Card from "./Card";

export default function CardList() {
  const restaurants = useSelector((state) => state.restaurantsReducer); // add here the term from the reducer->index.js, to differentiate the states in case, with further reducers
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  return (
    <div className="bla">
      {restaurants.loading ? (
        <h1>Loading...</h1>
      ) : (
        restaurants.items.map((el) => <Card title={el.title} url={el.url} />)
      )}
    </div>
  );
}
