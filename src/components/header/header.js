import React from "react";
// import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
// import { motion } from "framer-motion";

// import { ReactComponent as Bg } from "../../assets/Burger.svg";

import "./header.css";

const Header = (props) => {
  // const [isSelected, setSelected] = useState("dark-theme");

  const options = [
    { value: "dark-theme", label: "Midnight" },
    { value: "light-theme", label: "High Light" },
    { value: "red-theme", label: "Tangerine Dream" },
    { value: "blue-theme", label: "Wrightsville" },
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
    <div className={"headerWrapper"}>
      <div className={"theme-wrapper"}>
        <span>Theme Selector</span>
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
      </div>
      <ul className={"link-holder"}>
        <Link to="/">
          <li className={"header-item"}>Home</li>
        </Link>
        <Link to="/blog">
          <li className={"header-item"}>Blog</li>
        </Link>
        <Link to="/me">
          <li className={"header-item"}>Contact Me</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
