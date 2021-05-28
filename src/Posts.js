import React from "react";
import useFetchData from "./CustomHook";

export default function Posts() {
const [posts,setPosts,loading] =useFetchData([], "https://jsonplaceholder.typicode.com/posts")

  return (
    <div>
      {loading ? "loading ........": posts.map((post) => {
        return (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
