import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import About from "./pages/about";
import Post from "./pages/post";
import NotFound from "./pages/notfound";

import "typeface-raleway";
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/404" component={NotFound} />
      <Route path="/post/:id" render={props => <Post {...props} />} />
    </div>
  </Router>,
  document.getElementById("root")
);
