import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

import "./svgHome.css";

const SvgHome = (props) => {
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
      className="svg-home-wrapper"
    >
      <Header
        lang={props.lang}
        setLang={props.setLang}
        currentTheme={props.currentTheme}
        changeTheme={props.changeTheme}
      />
      <main className={"svg-home-content"}>
        <h2>{t("svg-home.title")}</h2>
        <p>Still working on this page :)</p>
      </main>
      <Footer />
    </motion.div>
  );
};
export default SvgHome;
