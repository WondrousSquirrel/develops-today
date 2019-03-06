import { RETRIEVE_POSTS } from "./types";
import Axios from "axios";

const retrievePosts = posts => ({
  type: RETRIEVE_POSTS,
  payload: posts
});

// thunks

export const getAllPost = () => dispatch => {
  Axios.get("https://simple-blog-api.crew.red/posts")
    .then(response => dispatch(retrievePosts(response.data)))
    .catch(err => console.error(err.message));
};
