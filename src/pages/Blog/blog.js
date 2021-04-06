import React from "react";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import "./blog.css";

const Blog = (props) => {
  return (
    <div className={"blog-wrapper"}>
      <Header
        currentTheme={props.currentTheme}
        changeTheme={props.changeTheme}
      />
      <div className={"blog-content"}>
        <h1>Welcome to my Blog!</h1>
        <p>I'm still under construction :)</p>
        <p>some topics to come:</p>
        <p>Python: Lists, Strings, Functions</p>
        <p>SVG Animations</p>
        <p>OOP</p>
        <p>C# / Interfaces / Dependency Injection</p>
        <p>JS Basics</p>
        <p>React Fundamentals</p>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
