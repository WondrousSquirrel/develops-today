import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getAllPost, deletePost } from "../actions/postActions";

const PostList = props => {
  useEffect(() => {
    props.getAllPost();
  }, []);

  const handleDelete = id => {
    props.deletePost(id);
    props.getAllPost();
  };

  return (
    <>
      {props.posts.map(post => {
        return (
          <div className="post" key={post.id}>
            <div>
              <h2>{post.title}</h2>
              <div className="body">
                <p>{post.body}</p>
              </div>
              <div className="footer">
                <button>
                  <Link to={`/detail/${post.id}`}>Detail</Link>
                </button>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
            </div>
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
  getAllPost: PropTypes.func,
  deletePost: PropTypes.func
};

export default connect(
  mapStateToProps,
  { getAllPost, deletePost }
)(PostList);
