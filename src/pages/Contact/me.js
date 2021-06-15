import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import Header from "../../components/header/header";

import "./me.css";

const Me = (props) => {
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
      className={"me-wrapper"}
    >
      <Header
        lang={props.lang}
        setLang={props.setLang}
        currentTheme={props.currentTheme}
        changeTheme={props.changeTheme}
      />
      <h1>{t("contact-me")}!</h1>
      <article>
        <p>{t("email")}: austinzbaird@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/%F0%9F%92%BB-austin-baird-2a1490171/">
            My Profile
          </a>
        </p>
      </article>
    </motion.div>
  );
};
export default Me;
