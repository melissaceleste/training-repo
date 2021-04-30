import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import "./Posts.css";
import Card from "./Card";

export default function Posts() {
  const state = useSelector((state) => state.postsReducer); // add here the term from the reducer->index.js, to differentiate the states in case, with further reducers
  const dispatch = useDispatch();

  console.log("haha");
  console.log(state);
  console.log("huhuu");

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="bla">
      {state.loading ? (
        <h1>Loading...</h1>
      ) : (
        state.items.map((el) => <Card title={el.title} url={el.url} />)
      )}
    </div>
  );
}

/*
  /* 
  function renderPosts() {
    if (state.loading) {
      return <h1>Loading...</h1>;
    }
    return state.items.map((el) => <h3> {el.title} </h3>);
  }


        {/*    {renderPosts()} 



import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Card from "./Card";

export default function Posts() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state);
  console.log("haha");
  console.log(characters);
  console.log("huhuu");
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
        {posts.map((character) => (
        <Card
          image={character.image}
          name={character.name}
          status={character.status}
        />
      ))} 
        {characters.map((character) => (
        <Card
          image={character.image}
          name={character.name}
          status={character.status}
        />
      ))} 
       {characters.map((el) => {
        <h2> {el.name} </h2>;
      })} 
      </div>
      );
    }
     */

/* const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  console.log("haha");
  console.log(posts);
  console.log("huhuu");

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {posts &&
        posts.map((item) => {
          return (
            <div key={item.id}>
              {" "}
              <h3> {item.title}</h3>
            </div>
          );
        })}
      {/*  {posts.map((el) => {
        return <h2> {el.title} </h2>;
      })} 
    </div>
    );
  };
  
  export default Posts; */
