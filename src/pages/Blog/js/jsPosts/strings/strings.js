import React from "react";
import { motion } from "framer-motion";

import Header from "../../../../../components/header/header";
import Footer from "../../../../../components/footer/footer";

import "./strings.css";

const JsPostStrings = (props) => {
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
      className="post-wrapper"
    >
      <Header
        lang={props.lang}
        setLang={props.setLang}
        currentTheme={props.currentTheme}
        changeTheme={props.changeTheme}
      />
      <h1>So you wanna learn about strings?</h1>
      <div className="post-content-wrapper">
        <h3>What do you mean by "String" ?</h3>
        <p>
          A string just mean plain text. It is a variable type in JavaScript,
          and many other languages.
        </p>
      </div>
      <Footer />
    </motion.div>
  );
};
export default JsPostStrings;
