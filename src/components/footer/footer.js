import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "./footer.css";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { t } = useTranslation();
  return (
    <div className={"footer-wrapper"}>
      <div className={"backToTop"}>
        <span onClick={() => scrollTop()}>{t("footer.scroll")}</span>
      </div>
      <div className={"socials"}>
        <span>{t("footer.toks")}</span>
        <motion.a
          href="https://www.tiktok.com/@foraloop"
          whileHover={{
            y: "-6px",
            transition: { duration: 0.4 },
          }}
          alt="For A Loop Tik Tok Page"
        >
          TikTok
          <svg
            width="54"
            height="62"
            viewBox="0 0 54 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Tik">
              <g id="Vector 2">
                <mask id="path-3-inside-3" fill="white">
                  <path d="M27.775 1.00001C26.5 1.00002 25.8625 1.64836 25.8625 2.94505V40.5494C24.5875 47.033 14.3875 46.3846 15.025 39.2527C15.3441 35.6833 16.9375 34.7143 20.125 34.0659C21.3752 33.8116 21.4 34.0659 21.4 32.7692V22.3956C21.4 20.4505 20.7625 20.4505 18.85 20.4505C8.65001 20.4505 1 28.8791 1 39.9011C1 50.9231 9.92501 60 20.125 60C30.325 60 39.25 50.9231 39.25 40.5494V24.989C43.075 26.9341 45.625 27.5824 49.45 27.5824C51.3625 27.5824 52 26.9341 52 24.989V15.9121C52 14.6154 51.3625 13.967 50.0875 13.967C44.35 13.967 39.25 9.42857 39.25 2.94505C39.25 1.64836 38.6125 1.00001 37.3375 1L27.775 1.00001Z" />
                </mask>
                <path
                  d="M27.775 1.00001C26.5 1.00002 25.8625 1.64836 25.8625 2.94505V40.5494C24.5875 47.033 14.3875 46.3846 15.025 39.2527C15.3441 35.6833 16.9375 34.7143 20.125 34.0659C21.3752 33.8116 21.4 34.0659 21.4 32.7692V22.3956C21.4 20.4505 20.7625 20.4505 18.85 20.4505C8.65001 20.4505 1 28.8791 1 39.9011C1 50.9231 9.92501 60 20.125 60C30.325 60 39.25 50.9231 39.25 40.5494V24.989C43.075 26.9341 45.625 27.5824 49.45 27.5824C51.3625 27.5824 52 26.9341 52 24.989V15.9121C52 14.6154 51.3625 13.967 50.0875 13.967C44.35 13.967 39.25 9.42857 39.25 2.94505C39.25 1.64836 38.6125 1.00001 37.3375 1L27.775 1.00001Z"
                  stroke="var(--acc-light)"
                  strokeWidth="4"
                  mask="url(#path-3-inside-3)"
                />
              </g>
            </g>
          </svg>
        </motion.a>
        <motion.a
          href="https://twitter.com/Austinbaird21"
          whileHover={{
            y: "-6px",
            transition: { duration: 0.4 },
          }}
          alt="Austins Twitter Profile"
        >
          Twitter
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Twitter">
              <g id="Vector 1">
                <mask id="path-1-inside-1000" fill="white">
                  <path d="M4 9.5C12.2335 17.965 17.8354 20.7748 29.5 22.5C29.0863 21.4301 29 21 29 19.5C29 13.5 34 7 41.5 7C45.5 7 47.8052 8.27001 50.5 11L58 8C56.8726 11.5379 55.7756 12.9588 53 14.5C55.7466 14.6846 57.2491 14.3245 60 13C58.0072 15.8158 56.7973 17.3213 54 19.5C54 40 39 56 18.5 56C12 56 5.73131 53.9054 0 50.5C8.34983 50.8537 12.0407 49.3218 18 45.5C12.5899 44.5881 10.051 42.7814 6.5 37C9.02235 37.2663 10.2683 37.2084 12 36.5C5.70144 34.8338 3.5959 32.2353 2.5 24.5C4.78238 25.6775 6.01069 26.0377 8 25.5C2.45941 21.6308 1.70618 18.0542 4 9.5Z" />
                </mask>
                <path
                  d="M4 9.5C12.2335 17.965 17.8354 20.7748 29.5 22.5C29.0863 21.4301 29 21 29 19.5C29 13.5 34 7 41.5 7C45.5 7 47.8052 8.27001 50.5 11L58 8C56.8726 11.5379 55.7756 12.9588 53 14.5C55.7466 14.6846 57.2491 14.3245 60 13C58.0072 15.8158 56.7973 17.3213 54 19.5C54 40 39 56 18.5 56C12 56 5.73131 53.9054 0 50.5C8.34983 50.8537 12.0407 49.3218 18 45.5C12.5899 44.5881 10.051 42.7814 6.5 37C9.02235 37.2663 10.2683 37.2084 12 36.5C5.70144 34.8338 3.5959 32.2353 2.5 24.5C4.78238 25.6775 6.01069 26.0377 8 25.5C2.45941 21.6308 1.70618 18.0542 4 9.5Z"
                  stroke="var(--acc-light)"
                  strokeWidth="3"
                  mask="url(#path-1-inside-1000)"
                />
              </g>
            </g>
          </svg>
        </motion.a>
        <motion.a
          href="https://github.com/AustinB12"
          whileHover={{
            y: "-6px",
            transition: { duration: 0.4 },
          }}
          alt="Austin's GitHub Page"
        >
          GitHub
          <svg viewBox="0 0 128 128">
            <g fill="var(--acc-light)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
              ></path>
              <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
            </g>
          </svg>
        </motion.a>
      </div>
    </div>
  );
};

export default Footer;
