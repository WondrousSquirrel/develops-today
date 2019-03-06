import { RETRIEVE_POSTS, RETRIEVE_POST } from "../actions/types";

const initialState = {
  posts: [],
  singlePost: {
    post: [],
    comments: []
  }
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case RETRIEVE_POSTS: {
      return {
        ...state,
        posts: payload,
        ...state.posts
      };
    }
    case RETRIEVE_POST: {
      return {
        ...state,
        singlePost: payload
      };
    }
    default:
      return state;
  }
}
