import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import uid from "uid";

import { getPost, addComment } from "../actions/postActions";

const Post = props => {
  const [commentMessage, setComment] = useState();

  useEffect(() => {
    props.getPost(props.match.params.id);
  }, []);

  const createComment = () => {
    console.log(commentMessage);
    const comment = {
      postId: props.match.params.id,
      body: commentMessage,
      id: uid()
    };
    props.addComment(comment);
    // props.getPost(props.match.params.id);
  };

  return (
    <>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
      <hr />
      {props.post.comments.map(comment => {
        return <p key={comment.id}>{comment.body}</p>;
      })}
      <input onChange={e => setComment(e.target.value)} />
      <button onClick={createComment}>Add comment</button>
    </>
  );
};

const mapStateToProps = state => ({
  post: state.postReducer.singlePost
});

Post.propTypes = {
  post: PropTypes.object,
  match: PropTypes.object,
  getPost: PropTypes.func
};

export default connect(
  mapStateToProps,
  { getPost, addComment }
)(Post);
