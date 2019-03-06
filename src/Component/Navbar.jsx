import React from "react";
import { Link, Route } from "react-router-dom";

import PostList from "../Containers/PostList";
import CreatePost from "../Containers/CreatePost";

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="create">Create Post</Link>
      <Route exact path="/" component={PostList} />
      <Route path="/create" component={CreatePost} />
    </>
  );
};

export default Navbar;
