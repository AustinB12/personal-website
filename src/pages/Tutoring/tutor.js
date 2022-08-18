import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import "./tutor.css";

const Tutoring = (props) => {
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
      className={"tutoring-container"}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <Header
        lang={props.lang}
        setLang={props.setLang}
        currentTheme={props.currentTheme}
        changeTheme={props.changeTheme}
      />
      <main className={"tutoring-content"}>
        <div className="left-side"></div>
        <div className="right-side">
          <h1>Austin Baird</h1>
          <h2>{t("tutor.title")}</h2>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Tutoring;
