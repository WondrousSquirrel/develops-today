import { RETRIEVE_POSTS, RETRIEVE_POST, ADD_COMMENT } from "../actions/types";

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
        posts: payload
      };
    }
    case RETRIEVE_POST: {
      return {
        ...state,
        singlePost: payload
      };
    }
    case ADD_COMMENT: {
      return {
        ...state,
        singlePost: {
          ...state.singlePost,
          comments: [payload, ...state.singlePost.comments]
        }
      };
    }
    default:
      return state;
  }
}
