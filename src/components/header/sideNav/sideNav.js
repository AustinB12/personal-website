import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./sideNav.css";

const SideNav = (props) => {
  const variants = {
    open: {
      x: "0%",
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
          <div
            className={"outside-container"}
            role="button"
            onClick={() => props.setNav(false)}
          >
            <div className={"stuff-container"}>
              <ul className={"link-holder"}>
                <Link to="/">
                  <motion.li
                    whileHover={{
                      x: "10px",
                      transition: { duration: 0.4 },
                    }}
                    className={"header-item"}
                  >
                    Home
                  </motion.li>
                </Link>
                <Link to="/blog">
                  <motion.li
                    whileHover={{
                      x: "10px",
                      transition: { duration: 0.4 },
                    }}
                    className={"header-item"}
                  >
                    Blog
                  </motion.li>
                </Link>
                <Link to="/me">
                  <motion.li
                    whileHover={{
                      x: "10px",
                      transition: { duration: 0.4 },
                    }}
                    className={"header-item"}
                  >
                    Contact Me
                  </motion.li>
                </Link>
              </ul>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default SideNav;
