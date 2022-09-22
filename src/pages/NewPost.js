import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import {v4 as uuid} from "uuid";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addPost } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title === "" || description === "") {
      alert("Input fields shouldn't be empty");
    }else{
    const newPost = {
      id: uuid(),
      title,
      description
    }
    addPost(newPost);
    navigate("/published");
    alert("Post added successfully");
  };
}

  return (
    <>
      <div className="form-container">
        <h1 style={{ textAlign: "center", marginTop: "3rem", padding: "3rem" }}>
          Create Post
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="type1">
            <label>Title</label>
            <input
              type="text"
              id="text1"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <br />
          <div className="type2">
            <label>Description</label>
            <textarea
              cols="10"
              rows="6"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="post-btn">
            <button type="submit" id="btn3">
              Create Post
            </button>
            <Link to="/">
              <button type="button" id="btn4">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPost;
