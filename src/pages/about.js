import React from "react";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import pages from "../pages.json";

import "./pages.css";

const About = () => {
  const about = pages.filter(page => page.file === "about.md")[0];
  console.log(about);
  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>About Page</h1>
      <div className="page-content">
        <Markdown source={about.content} escapeHtml={false} />
      </div>
    </Layout>
  );
};

export default About;
