import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "./sideNav/sideNav";
import SideTheme from "./sideTheme/sideTheme";
import Select from "react-select";

import { ReactComponent as Burger } from "../../assets/Burger.svg";
import { ReactComponent as Color } from "../../assets/ColorWheel.svg";

import "./header.css";

const Header = (props) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isThemeOpen, setThemeOpen] = useState(false);

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
    <div className={"headerWrapper"}>
      <nav className={"wide"}>
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
      </nav>
      <nav className={"narrow"}>
        <div role="button" onClick={() => setThemeOpen(true)}>
          <Color id="colorWheel" />
        </div>
        <SideTheme
          changeTheme={props.changeTheme}
          isOpen={isThemeOpen}
          setTheme={setThemeOpen}
        />
        <div role="button" onClick={() => setNavOpen(true)}>
          <Burger id="burger" />
        </div>
        <SideNav isOpen={isNavOpen} setNav={setNavOpen} />
      </nav>
    </div>
  );
};

export default Header;
