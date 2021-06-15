import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import Header from "../../components/header/header";

import { ReactComponent as Bob } from "../../assets/BobFront.svg";
import { ReactComponent as Linda } from "../../assets/LindaFront.svg";
import { ReactComponent as Tina } from "../../assets/TinaFront.svg";
import { ReactComponent as Noodle } from "../../assets/Noodle.svg";
import { ReactComponent as SadDuo } from "../../assets/SadDuo.svg";

import "./svgs.css";

const SVGs = (props) => {
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
      className={"svgs-container"}
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
      <h1>{t("svgs.under-construction")}</h1>
      <h3>{t("svgs.sample")}</h3>
      <Bob />
      <Linda />
      <Tina />
      <Noodle />
      <SadDuo />
    </motion.div>
  );
};

export default SVGs;
