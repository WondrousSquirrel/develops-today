import { RETRIEVE_POSTS } from "../actions/types";

const initialState = {
  posts: [],
  post: []
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
    default:
      return state;
  }
}
