import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./sideTheme.css";

const SideTheme = (props) => {
  const variants = {
    open: {
      x: "0%",
    },
    closed: { x: "-100%" },
  };

  return (
    <AnimatePresence>
      {props.isOpen && (
        <motion.nav
          className={"sideTheme-wrapper"}
          variants={variants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ damping: 5 }}
        >
          <div className={"stuff-container"}>
            <div className={"color-container"}>
              <motion.div
                aria-checked
                role="radio"
                id="dark"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.4 },
                }}
                onClick={() => props.changeTheme("dark-theme")}
              >
                <span>Dark</span>
              </motion.div>
              <motion.div
                aria-checked
                role="radio"
                id="light"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.4 },
                }}
                onClick={() => props.changeTheme("light-theme")}
              >
                <span>Light</span>
              </motion.div>
              <motion.div
                aria-checked
                role="radio"
                id="red"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.4 },
                }}
                onClick={() => props.changeTheme("red-theme")}
              >
                <span>Red</span>
              </motion.div>
              <motion.div
                aria-checked
                role="radio"
                id="blue"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.4 },
                }}
                onClick={() => props.changeTheme("blue-theme")}
              >
                <span>Blue</span>
              </motion.div>
              <motion.div
                aria-checked
                role="radio"
                id="green"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.4 },
                }}
                onClick={() => props.changeTheme("green-theme")}
              >
                <span>Green</span>
              </motion.div>
            </div>
          </div>
          <div
            className={"outside-container"}
            role={"button"}
            onClick={() => props.setTheme(false)}
          ></div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
export default SideTheme;
