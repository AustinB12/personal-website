import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Select from "react-select";

import "./sideTheme.css";

const SideTheme = (props) => {
  const variants = {
    open: {
      x: "0%",
    },
    closed: { x: "-100%" },
  };

  const options = [
    { value: "dark-theme", label: "Midnight" },
    { value: "light-theme", label: "Light" },
    { value: "red-theme", label: "Warm" },
    { value: "blue-theme", label: "Ocean" },
    { value: "green-theme", label: "Garden" },
  ];

  const getLabel = (value) => {
    switch (value) {
      case "dark-theme":
        return options[0].label;
      case "light-theme":
        return options[1].label;
      case "red-theme":
        return options[2].label;
      case "blue-theme":
        return options[3].label;
      case "green-theme":
        return options[4].label;
      default:
        return options[0].label;
    }
  };

  return (
    <AnimatePresence>
      {props.isOpen && (
        <motion.nav
          className={"sideNav-wrapper"}
          variants={variants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ damping: 5 }}
        >
          <Select
            className="theme-select"
            name={"themes"}
            id={"themeSelect"}
            onChange={(e) => props.changeTheme(e.value)}
            options={options}
            placeholder="Select a Theme..."
            value={{
              value: props.currentTheme,
              label: getLabel(props.currentTheme),
            }}
          ></Select>
          <button onClick={() => props.setTheme(false)}>Close</button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
export default SideTheme;
