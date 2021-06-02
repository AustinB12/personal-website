import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import SideNav from "./sideNav/sideNav";
import SideTheme from "./sideTheme/sideTheme";
import LangPicker from "./langPicker/langPicker";

import { ReactComponent as PaintBrush } from "../../assets/paintbrush.svg";

import "./header.css";

const Header = (props) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isThemeOpen, setThemeOpen] = useState(false);

  const Path = (props) => (
    <motion.path
      strokeWidth="3"
      stroke="var(--txt)"
      strokeLinecap="round"
      {...props}
    />
  );

  let answer = isNavOpen ? "open" : "closed";

  return (
    <div className={"headerWrapper"}>
      <div className={"theme-wrapper"}>
        <div role="button" onClick={() => setThemeOpen(true)}>
          <PaintBrush />
        </div>
        <LangPicker lang={props.lang} setLang={props.setLang} />
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
        <div role="button" id="navButton" onClick={() => setNavOpen(true)}>
          <svg
            id="burger"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <Path
              initial="closed"
              animate={answer}
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              initial="closed"
              animate={answer}
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              initial="closed"
              animate={answer}
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </div>
        {/* <div role="button" onClick={() => setNavOpen(true)}>
          <svg
            id="burger"
            width="36"
            height="16"
            viewBox="0 0 36 16"
            fill="none"
          >
            <motion.rect
              initial="initial"
              animate={answer}
              variants={variants2}
              width="36"
              height="4"
              rx="3"
              y="0"
              fill="white"
            />
            <motion.rect
              initial="initial"
              animate={answer}
              variants={variants}
              width="36"
              height="4"
              rx="3"
              y="12"
              fill="white"
            />
            <motion.rect
              initial="initial"
              animate={answer}
              variants={variants}
              width="36"
              height="4"
              rx="3"
              y="6"
              fill="white"
            />
          </svg>
        </div> */}
        <SideNav isOpen={isNavOpen} setNav={setNavOpen} />
      </nav>
    </div>
  );
};

export default Header;
