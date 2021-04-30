import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../redux/actions";

export default function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return <div></div>;
}
