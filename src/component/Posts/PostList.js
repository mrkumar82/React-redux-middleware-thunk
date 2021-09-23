import React from "react";

function PostList({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostList;
