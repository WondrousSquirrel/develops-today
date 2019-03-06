import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getPost } from "../actions/postActions";

const Post = props => {
  useEffect(() => {
    props.getPost(props.match.params.id);
  }, []);

  return (
    <>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
      <hr />
      {props.post.comments.map(comment => {
        return <p key={comment.postId}>{comment.body}</p>;
      })}
    </>
  );
};

const mapStateToProps = state => ({
  post: state.postReducer.singlePost
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
