import {
  RETRIEVE_POSTS,
  RETRIEVE_POST,
  CREATE_POST,
  ADD_COMMENT
} from "./types";
import Axios from "axios";

const retrievePosts = posts => ({
  type: RETRIEVE_POSTS,
  payload: posts
});

const retrievePost = post => ({
  type: RETRIEVE_POST,
  payload: post
});

const _createPost = () => ({
  type: CREATE_POST
});

const _addComment = comment => ({
  type: ADD_COMMENT,
  payload: comment
});

// thunks

export const getAllPost = () => dispatch => {
  Axios.get("https://simple-blog-api.crew.red/posts")
    .then(response => dispatch(retrievePosts(response.data)))
    .catch(err => console.error(err.message));
};

export const getPost = id => dispatch => {
  Axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
    .then(response => dispatch(retrievePost(response.data)))
    .catch(err => console.error(err.message));
};

export const createPost = post => dispatch => {
  Axios.post("https://simple-blog-api.crew.red/posts", post)
    .then(() => dispatch(_createPost()))
    .catch(err => console.error(err.message));
};

export const addComment = comment => dispatch => {
  Axios.post("https://simple-blog-api.crew.red/comments", comment)
    .then(response => dispatch(_addComment(response.data)))
    .catch(err => console.error(err.message));
};
