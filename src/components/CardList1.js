import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../redux/actions";
import { previousBurger, nextBurger } from "../redux/actions";
import "./Posts.css";
import Card from "./Card";
import Pagination1 from "./Pagination1";

export default function CardList2() {
  const restaurants = useSelector((state) => state.restaurantsReducer); // add here the term from the reducer->index.js, to differentiate the states in case, with further reducers
  const { burgerNumber } = useSelector((state) => state.page);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = restaurants.items.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bla">
      {restaurants.loading ? (
        <h1>Loading...</h1>
      ) : (
        currentPosts.map((el) => <Card title={el.title} url={el.url} />)
      )}
      <Pagination1
        postsPerPage={postsPerPage}
        totalPosts={restaurants.items.length}
        paginate={paginate}
      />
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
