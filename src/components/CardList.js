import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../redux/actions";
import { previousBurger, nextBurger } from "../redux/actions";
import "./Posts.css";
import Card from "./Card";

export default function CardList() {
  const restaurants = useSelector((state) => state.restaurantsReducer); // add here the term from the reducer->index.js, to differentiate the states in case, with further reducers
  const { burgerNumber } = useSelector((state) => state.page);
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

      {/*   <div>
        <button
          onClick={() => dispatch(previousBurger())}
          disabled={burgerNumber === 0}
        >
          ◀
        </button>
        <button
          onClick={() => dispatch(nextBurger())}
          disabled={burgerNumber === restaurants.length - 1}
        >
          ▶
        </button>
      </div> */}
    </div>
  );
}
