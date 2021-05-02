import { useEffect, useState } from "react";
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

  const [restaurantsPerPage, setRestaurantsPerPage] = useState(10);
  const [pageLimit, setPageLimit] = useState(15);
  const [pages] = useState(
    Math.round(restaurants.items.length / restaurantsPerPage)
  );
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  // get the page which the user clicks and change it to this
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * restaurantsPerPage - restaurantsPerPage;
    const endIndex = startIndex + restaurantsPerPage;
    return restaurants.items.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div className="bla">
      <div>
        {/* show the posts, 10 posts at a time */}
        <div className="dataContainer">
          {getPaginatedData().map((idx) => (
            <Card key={idx} title={idx.title} url={idx.url} />
            /*   <Card key={idx} data={d} /> */
          ))}
        </div>

        {/* show the pagiantion
        it consists of next and previous buttons
        along with page numbers, in our case, 5 page
        numbers at a time
    */}
        <div className="pagination">
          {/* previous button */}
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          >
            prev
          </button>

          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${
                currentPage === item ? "active" : null
              }`}
            >
              <span>{item}</span>
            </button>
          ))}

          {/* next button */}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? "disabled" : ""}`}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
