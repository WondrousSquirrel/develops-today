import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import uid from "uid";

import { createPost } from "../actions/postActions";

const CreatePost = props => {
  const [state, setState] = useState({ title: "", body: "" });

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleClick = e => {
    e.preventDefault();
    const post = {
      id: uid(),
      title: state.title,
      body: state.body
    };
    console.log(post);
    props.createPost(post);
  };

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleClick}>
        <label>
          Title:
          <input type="text" name="title" onChange={e => handleChange(e)} />
        </label>
        <label>
          Body:
          <input type="text" name="body" onChange={e => handleChange(e)} />
        </label>
        <div className="add-btn">
          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  );
};

export default connect(
  null,
  { createPost }
)(CreatePost);
