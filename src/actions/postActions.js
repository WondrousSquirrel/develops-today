import { RETRIEVE_POSTS, RETRIEVE_POST } from "./types";
import Axios from "axios";

const retrievePosts = posts => ({
  type: RETRIEVE_POSTS,
  payload: posts
});

const retrievePost = post => ({
  type: RETRIEVE_POST,
  payload: post
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
