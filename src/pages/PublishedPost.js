import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const PublishedPost = () => {
  const { posts } = useContext(GlobalContext);

  return (
    <>
      <Link to="/">
        <button
          type="button"
          id="btn4"
          style={{ marginTop: "2rem", marginLeft: "-80rem", background:"black" }}
        >
          Go to Home
        </button>
      </Link>
      <h1 style={{ textAlign: "center" }}>Published Posts</h1>
      {posts.map((post) => (
        <div className="post-group" key={post.id}>
          <div className="post-item1">{post.title}</div>
          <div className="post-item2">{post.description}</div>
        </div>
      ))}
    </>
  );
};

export default PublishedPost;
