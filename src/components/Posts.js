import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import "./Posts.css";
//import Card from "./Card";

export default function Posts() {
  const posts = useSelector((state) => state.postsReducer);
  const dispatch = useDispatch();

  console.log("haha");
  console.log(posts);
  console.log("huhuu");

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="bla">
      {posts
        ? posts.map((el) => {
            return <div>{el.title}</div>;
          })
        : "Loading..."}
      {/*    {posts.map((el) => (
        <h3> {el.title} </h3>
      ))} */}
    </div>
  );
}

/* import axios from "axios";
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
