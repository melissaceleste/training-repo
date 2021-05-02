import "./Card.css";
import { showDetails, like } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Card({ url, title }) {
  const details = useSelector((state) => state.showDetailsReducer); //useSelector: to have access to the whole counter state/ to call the state
  //  const liked = useSelector((state) => state.liked);
  const restaurants = useSelector((state) => state.restaurantsReducer);
  const dispatch = useDispatch(); //gives us the ability to execute an action

  return (
    <div className="card_container">
      <h3> {title}</h3>
      <button onClick={() => dispatch(showDetails(!details))}>
        show details
      </button>
      <p hidden={details}>
        <img src={url} alt="" width="100px" />
      </p>
      {/*  <span onClick={() => likeRestaurant(restaurants.id)}>
        {liked.includes(restaurants.id) ? "❤️" : "🤍"}
      </span> */}
    </div>
  );

  /*   function likeRestaurant(currentId) {
    let newArray;

    // if the clicked id is already inside of likedCharacters
    if (liked.includes(currentId)) {
      // then create a new array consisting of everything but the currentId
      newArray = liked.filter((id) => id !== currentId);
    } else {
      // then create a new array that contains everything before and also currentId
      newArray = [...liked, currentId];
    }

    dispatch(like(newArray);
  } */
}
