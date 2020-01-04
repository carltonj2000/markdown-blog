import React from "react";
import { Redirect } from "react-router-dom";
import Markdown from "react-markdown";

import Layout from "../components/layout";
import posts from "../posts.json";

import "./pages.css";

const Post = props => {
  const posta = posts.filter(p => p.id.toString() === props.match.params.id);
  if (posta.length === 0) return <Redirect to="/404" />;
  const post = posta[0];
  return (
    <Layout>
      <div key={post.id} className="post-card">
        <h2>{post.title}</h2>
        <small>
          Published on {post.date} by {post.author}
        </small>
        <hr />
        <Markdown source={post.content} escapeHtml={false} />
        <small>Read more ...</small>
      </div>
    </Layout>
  );
};

export default Post;
