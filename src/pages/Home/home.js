import React from "react";
import { motion } from "framer-motion";

import Header from "../../components/header/header";
import Intro from "../../components/intro/intro";
import Skills from "../../components/skills/skills";
import Projects from "../../components/projects/projects";
import Footer from "../../components/footer/footer";

import "./home.css";

const Home = (props) => {
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
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="Home-Container"
    >
      <Header
        lang={props.lang}
        setLang={props.setLang}
        currentTheme={props.currentTheme}
        changeTheme={props.changeTheme}
      />
      <div className={"Home-Content"}>
        <Intro />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </motion.div>
  );
};

export default Home;
