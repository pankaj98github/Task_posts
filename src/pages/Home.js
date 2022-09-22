import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const Home = () => {
  const [search, setSearch] = useState("");
  const { posts } = useContext(GlobalContext);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  let postSearch = posts.filter(post => {
    return Object.keys(post).some((key) =>
      post[key]
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  });

  return (
    <>
      <h1 style={{ marginTop: "4rem" }}>Search, Create and Filter Function</h1>
      <div className="container">
        <BsSearch className="icon" />
        &nbsp;
        <input
          type="search"
          id="search"
          placeholder="Search here.."
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="container-btn">
        <Link to="/newpost">
          <button type="button" id="btn1">
            Create Post
          </button>
        </Link>

        <Link to="/published">
          <button type="button" id="btn2">
            Publised Post
          </button>
        </Link>
      </div>
      <div className="post-list">
        {postSearch.map((post) => (
          <div className="post-group" key={post.id}>
            <div className="post-item1">{post.title}</div>
            <div className="post-item2">{post.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
