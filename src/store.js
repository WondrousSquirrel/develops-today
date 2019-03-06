import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { addComment } from "./actions/postActions";

import rootReducer from "./reducers/index";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const comment = {
  postID: 2,
  body: "New Comment",
  id: 5
};

// store.dispatch(addComment(comment));

export default store;
