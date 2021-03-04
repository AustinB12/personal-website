import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./sideNav.css";

const SideNav = (props) => {
  const variants = {
    open: {
      x: "20%",
    },
    closed: { x: "100%" },
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
          <button onClick={() => props.setNav(false)}>Close</button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default SideNav;
