import React from "react";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";

import "./components.css";

import postlist from "../posts.json";

const PostList = () => {
  const excerptList = postlist.map(post => {
    const words = post.content.split(" ");
    const fifty = words.slice(0, 20);
    const content = fifty.join(" ");
    return {
      ...post,
      content
    };
  });
  return (
    <div className="postlist">
      <h1 className="title">All Posts</h1>
      {excerptList.map(post => (
        <div key={post.id} className="post-card">
          <h2>
            <Link to={`/post/${post.id}`} className="links">
              {post.title}
            </Link>
          </h2>
          <small>
            Published on {post.date} by {post.author}
          </small>
          <hr />
          <Markdown source={post.content} escapeHtml={false} />
          <small>Read more ...</small>
        </div>
      ))}
    </div>
  );
};

export default PostList;
