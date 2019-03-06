import React from "react";
import { Link, Route } from "react-router-dom";

import PostList from "../Containers/PostList";
import CreatePost from "../Containers/CreatePost";
import Post from "../Containers/Post";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="create">Create Post</Link>
      </div>
      <Route exact path="/" component={PostList} />
      <Route path="/create" component={CreatePost} />
      <Route path="/detail/:id" component={Post} />
    </>
  );
};

export default Navbar;
