import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import "./blog.css";

const Blog = (props) => {
  const { t } = useTranslation();

  return (
    <div className={"blog-wrapper"}>
      <Header
        lang={props.lang}
        setLang={props.setLang}
        currentTheme={props.currentTheme}
        changeTheme={props.changeTheme}
      />
      <div className={"blog-content"}>
        <h1>{t("blog.title")}</h1>
        <p>I'm still under construction :)</p>
        <p>some topics to come:</p>
        <Link to="blog/python">
        Python: Lists, Strings, Functions

        </Link>
        <p>SVG Animations</p>
        <p>OOP</p>
        <p>C# / Interfaces / Dependency Injection</p>
        <p>JS Basics</p>
        <Link to="blog/js">
          JS Home
        </Link>
        <p>React Fundamentals</p>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
