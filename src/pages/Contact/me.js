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
      <svg
        width="306"
        height="246"
        viewBox="0 0 306 246"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="RotoryPhone">
          <g id="All">
            <g id="PhoneBase">
              <path
                id="Vector 1"
                d="M106 32L106 75C106 84 106 85 114.5 85H141.5"
                stroke="black"
                stroke-width="3"
              />
              <path
                id="Vector 2"
                d="M200.5 32L200.5 75C200.5 84 200.5 85 192 85H165"
                stroke="black"
                stroke-width="3"
              />
              <path
                id="Rectangle 1"
                d="M25 197H281V215C281 218.314 278.314 221 275 221H31C27.6863 221 25 218.314 25 215V197Z"
                fill="#C4C4C4"
              />
              <path
                id="Rectangle 2"
                d="M82.3072 104.569C85.225 99.8629 90.3685 97 95.9057 97H210.094C215.631 97 220.775 99.8629 223.693 104.569L281 197H25L82.3072 104.569Z"
                fill="#DD9191"
              />
              <rect
                id="Rectangle 3"
                x="129"
                y="80"
                width="48"
                height="17"
                fill="#C4C4C4"
              />
              <rect
                id="Rectangle 6"
                x="125"
                y="76"
                width="56"
                height="4"
                rx="2"
                fill="#DD9191"
              />
            </g>
            <motion.g
              id="Rotory"
              animate={{ rotate: [0, 180, 30, 280, 75, 0, 90, 0, 0, 0, 0, 0] }}
              transition={{ duration: 6, delay: 3, repeat: 0 }}
            >
              <path
                id="Rotor"
                d="M201 147C201 173.51 179.51 195 153 195C126.49 195 105 173.51 105 147C105 120.49 126.49 99 153 99C179.51 99 201 120.49 201 147ZM124.2 147C124.2 162.906 137.094 175.8 153 175.8C168.906 175.8 181.8 162.906 181.8 147C181.8 131.094 168.906 118.2 153 118.2C137.094 118.2 124.2 131.094 124.2 147Z"
                fill="#C4C4C4"
              />
              <g id="Buttons">
                <circle id="Ellipse 2" cx="153" cy="108" r="6" fill="#DD9191" />
                <circle
                  id="Ellipse 11"
                  cx="167"
                  cy="184"
                  r="6"
                  fill="#DD9191"
                />
                <circle
                  id="Ellipse 10"
                  cx="152"
                  cy="187"
                  r="6"
                  fill="#DD9191"
                />
                <circle id="Ellipse 9" cx="114" cy="149" r="6" fill="#DD9191" />
                <circle id="Ellipse 8" cx="124" cy="121" r="6" fill="#DD9191" />
                <circle id="Ellipse 7" cx="138" cy="184" r="6" fill="#DD9191" />
                <circle id="Ellipse 6" cx="137" cy="111" r="6" fill="#DD9191" />
                <circle id="Ellipse 5" cx="116" cy="135" r="6" fill="#DD9191" />
                <circle id="Ellipse 4" cx="126" cy="176" r="6" fill="#DD9191" />
                <circle id="Ellipse 3" cx="116" cy="164" r="6" fill="#DD9191" />
              </g>
            </motion.g>
            <motion.g
              id="Phone"
              animate={{ rotate: [0, 8, -8, 8, -8, 8, -8, 0] }}
              transition={{ duration: 1.5, delay: 9, repeat: 1 }}
            >
              <path
                id="Vector 3"
                d="M269.015 74.5C269.015 55 234.015 25 155.015 25C89.5146 25 39.0146 48 40.0146 74.5L92.5146 64.5C92.5146 58.5 101.015 54 107.015 54H200.515C209.515 54 216.515 61 216.515 66L269.015 74.5Z"
                fill="#DD9191"
              />
              <rect
                id="Rectangle 4"
                x="35"
                y="73.024"
                width="64"
                height="16"
                rx="8"
                transform="rotate(-10.8288 35 73.024)"
                fill="#C4C4C4"
              />
              <rect
                id="Rectangle 5"
                width="64"
                height="16"
                rx="8"
                transform="matrix(-0.982193 -0.187875 -0.187875 0.982193 273.866 73.024)"
                fill="#C4C4C4"
              />
            </motion.g>
          </g>
        </g>
      </svg>
    </motion.div>
  );
};
export default Me;
