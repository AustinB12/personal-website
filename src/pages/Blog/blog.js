import React from "react";

import Header from "../../components/header/header";

import "./blog.css";

const Blog = () => {
  return (
    <div className={"blog-wrapper"}>
      <Header />
      <p>I'm the blog!!!!</p>
      <p>I'm still under construction :)</p>
      <p>some topics to come:</p>
      <ul>
        <li>
          Python
          <ul>
            <li>Lists & List Methods</li>
            <li>Strings & String Methods</li>
          </ul>
        </li>
        <li>C#</li>
        <li>JS</li>
        <li>React</li>
      </ul>
    </div>
  );
};

export default Blog;
