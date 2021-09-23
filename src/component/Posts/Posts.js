import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addPosts } from "../../action/action";
import PostList from "./PostList";

function Posts() {
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();
  const data = posts.postsReducer;

  useEffect(async () => {
    dispatch(addPosts());
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {data.loading && <h2>Loading</h2>}
      {data.items.length ? (
        data.items.map((post, index) => {
          return <PostList key={index} post={post} />;
        })
      ) : (
        <h2> {data.error}</h2>
      )}
    </div>
  );
}

export default Posts;
