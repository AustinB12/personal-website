import React from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import "./blog.css";

const Blog = (props) => {
  const history = useHistory();

  const routeChange = (route) => {
    let path = `blog/${route}`;
    history.push(path);
  };

  return (
    <div className={"blog-wrapper"}>
      <Header
        lang={props.lang}
        setLang={props.setLang}
        currentTheme={props.currentTheme}
        changeTheme={props.changeTheme}
      />
      <div className={"blog-content"}>
        <h1>Welcome to my Blog!</h1>
        <p>I'm still under construction :)</p>
        <p>some topics to come:</p>
        <p>Python: Lists, Strings, Functions</p>
        <button onClick={() => routeChange("python")}>Python Home</button>
        <p>SVG Animations</p>
        <p>OOP</p>
        <p>C# / Interfaces / Dependency Injection</p>
        <p>JS Basics</p>
        <button onClick={() => routeChange("js")}>JS Home</button>
        <p>React Fundamentals</p>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
