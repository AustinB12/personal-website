import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./sideNav.css";

const SideNav = (props) => {
  const variants = {
    open: {
      x: "0%",
    },
    closed: { x: "100%" },
  };

  const { t } = useTranslation();

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
                <Link to="/survey">
                  <motion.li
                    whileHover={{
                      x: "10px",
                      transition: { duration: 0.4 },
                    }}
                    className={"header-item"}
                  >
                    Survey
                  </motion.li>
                </Link>
                <Link to="/">
                  <motion.li
                    whileHover={{
                      x: "10px",
                      transition: { duration: 0.4 },
                    }}
                    className={"header-item"}
                  >
                    {t("header.home")}
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
                    {t("header.blog")}
                  </motion.li>
                </Link>
                <Link to="/svg">
                  <motion.li
                    whileHover={{
                      x: "10px",
                      transition: { duration: 0.4 },
                    }}
                    className={"header-item"}
                  >
                    {t("header.svgs")}
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
                    {t("header.contact")}
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
