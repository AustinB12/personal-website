import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "./sideNav/sideNav";
import SideTheme from "./sideTheme/sideTheme";

import { ReactComponent as PaintBrush } from "../../assets/paintbrush.svg";
import { ReactComponent as Burger } from "../../assets/Burger.svg";

import "./header.css";

const Header = (props) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isThemeOpen, setThemeOpen] = useState(false);

  return (
    <div className={"headerWrapper"}>
      <div className={"theme-wrapper"}>
        <div role="button" onClick={() => setThemeOpen(true)}>
          <PaintBrush />
        </div>
        <SideTheme
          changeTheme={props.changeTheme}
          isOpen={isThemeOpen}
          setTheme={setThemeOpen}
        />
      </div>
      <nav className={"wide"}>
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
        <div role="button" onClick={() => setNavOpen(true)}>
          <Burger id="burger" />
        </div>
        <SideNav isOpen={isNavOpen} setNav={setNavOpen} />
      </nav>
    </div>
  );
};

export default Header;
