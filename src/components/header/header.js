import React from "react";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// import { ReactComponent as Bg } from "../../assets/Burger.svg";

import "./header.css";

const Header = () => {
  // const variants = {
  //   on: { y: 0 },
  //   off: { y: 175 },
  // };

  return (
    <div className={"headerWrapper"}>
      <ul className={"link-holder"}>
        <Link to="/">
          <li className={"header-item"}>Home</li>
        </Link>
        <Link to="/blog">
          <li className={"header-item"}>Blog</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
