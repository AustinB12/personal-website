import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "./sideNav/sideNav";
import SideTheme from "./sideTheme/sideTheme";

import { ReactComponent as Burger } from "../../assets/Burger.svg";
import { ReactComponent as Color } from "../../assets/ColorWheel.svg";

import "./header.css";

const Header = (props) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isThemeOpen, setThemeOpen] = useState(false);

  return (
    <div className={"headerWrapper"}>
      <nav className={"wide"}>
        <div className={"theme-wrapper"}>
          <span>Theme Selector</span>
          <select
            className="theme-select"
            name={"themes"}
            id={"themeSelect"}
            onChange={(e) => props.changeTheme(e.target.value)}
            placeholder="Select a Theme..."
            value={props.currentTheme}
          >
            <option value="dark-theme">Midnight</option>
            <option value="light-theme">High Light</option>
            <option value="red-theme">Tangarine Dream</option>
            <option value="blue-theme">Wrightsville</option>
            <option value="green-theme">Garden</option>
          </select>
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
