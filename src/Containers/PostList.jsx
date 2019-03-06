import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getAllPost } from "../actions/postActions";

const PostList = props => {
  useEffect(() => {
    props.getAllPost();
  }, []);

  return (
    <>
      <h1>Post List</h1>
      {props.posts.map(post => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button>
              <Link to={`/detail/${post.id}`}>Detail</Link>
            </button>
          </div>
        );
      })}
    </>
  );
};

const mapStateToProps = state => ({
  posts: state.postReducer.posts
});

PostList.propTypes = {
  posts: PropTypes.array,
  getAllPost: PropTypes.func
};

export default connect(
  mapStateToProps,
  { getAllPost }
)(PostList);
