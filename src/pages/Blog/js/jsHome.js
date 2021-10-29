import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

import "./jsHome.css";

const JsHome = (props) => {
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
      className="js-home-wrapper"
    >
      <Header
        lang={props.lang}
        setLang={props.setLang}
        currentTheme={props.currentTheme}
        changeTheme={props.changeTheme}
      />
      <main className={"js-home-content"}>
        <h2>{t("js-home.title")}</h2>
        <div className="posts-wrapper">
          <div className="blog-post">
            <Link to="/blog/js/strings">Strings</Link>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};
export default JsHome;
