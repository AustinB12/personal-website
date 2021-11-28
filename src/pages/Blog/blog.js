import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import "./blog.css";

const Blog = (props) => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 1.2,
      },
    },
    exit: {
      x: "100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className={"blog-wrapper"}
    >
      <Header
        lang={props.lang}
        setLang={props.setLang}
        currentTheme={props.currentTheme}
        changeTheme={props.changeTheme}
      />
      <div className={"blog-content"}>
        <h1 id={"blog-title"}>{t("blog.title")}!</h1>
        <p>
          I'm still under construction, and have more content planned. For now
          I've split my blog posts into a few different categories:
        </p>
        <div className={"home-holder"}>
          <div className={"a-home javascript"}>
            <Link to="blog/js">JavaScript</Link>
          </div>
          <div className={"a-home"}>
            <Link to="blog/python">Python</Link>
          </div>
          <div className={"a-home"}>
            <Link to="blog/svg">SVGs</Link>
          </div>
          <div className={"a-home"}>
            <Link to="blog/svg">C#</Link>
          </div>
          <div className={"a-home"}>
            <Link to="blog/svg">React</Link>
          </div>
          <div className={"a-home"}>
            <Link to="blog/svg">Programming / Software Development Topics</Link>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Blog;
