import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import "./blog.css";

const Blog = (props) => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 1.2,
      },
    },
    exit: {
      x: "100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className={"blog-wrapper"}
    >
      <Header
        lang={props.lang}
        setLang={props.setLang}
        currentTheme={props.currentTheme}
        changeTheme={props.changeTheme}
      />
      <div className={"blog-content"}>
        <h1 id={"blog-title"}>{t("blog.title")}!</h1>
        <svg
          id="workers"
          width="475"
          height="194"
          viewBox="0 0 475 194"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Contruction">
            <g id="Log-Back">
              <mask id="path-1-inside-1" fill="white">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M161 47H296V111H161C143.327 111 129 96.6731 129 79C129 61.3269 143.327 47 161 47Z"
                />
              </mask>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M161 47H296V111H161C143.327 111 129 96.6731 129 79C129 61.3269 143.327 47 161 47Z"
                fill="#856932"
              />
              <path
                d="M296 47H298V45H296V47ZM296 111V113H298V111H296ZM161 49H296V45H161V49ZM294 47V111H298V47H294ZM296 109H161V113H296V109ZM161 109C144.431 109 131 95.5685 131 79H127C127 97.7777 142.222 113 161 113V109ZM131 79C131 62.4315 144.431 49 161 49V45C142.222 45 127 60.2223 127 79H131Z"
                fill="#735A2A"
                mask="url(#path-1-inside-1)"
              />
            </g>
            <motion.g
              animate={{ x: [0, 50, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              id="Saw"
            >
              <path
                id="Union"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M103 47C187.091 53.2976 234.383 53.3215 319 47V74V85L313 74V86L307 74V85L301 74V86L295 74V85L289 74V86L283 74V85L277 74V86L271 74V85L265 74V86L259 74V85L253 74V86L247 74V85L241 74V86L235 74V85L229 74V86L223 74V85L217 74V86L211 74V85L205 74V86L199 74V85L193 74V86L187 74V85L181 74V86L175 74V85L169 74V86L163 74V85L157 74V86L151 74V85L145 74V86L139 74V85L133 74V86L127 74V85L121 74V86L115 74V85L109 74V86L103 74V47Z"
                fill="#C4C4C4"
              />
              <path
                id="Rectangle 3"
                d="M99 25H103V74H99C100.615 54.9233 100.652 44.1958 99 25Z"
                fill="#E9C056"
              />
              <path
                id="Rectangle 4"
                d="M323 26H319V75H323C321.385 55.9233 321.348 45.1958 323 26Z"
                fill="#E9C056"
              />
            </motion.g>
            <g id="Log-Front">
              <g id="Ellipse 2">
                <mask id="path-6-inside-2" fill="white">
                  <path d="M296 47V111H244C226.327 111 212 96.6731 212 79C212 61.3269 226.327 47 244 47H296Z" />
                </mask>
                <path
                  d="M296 47V111H244C226.327 111 212 96.6731 212 79C212 61.3269 226.327 47 244 47H296Z"
                  fill="#856932"
                  stroke="#735A2A"
                  strokeWidth="4"
                  mask="url(#path-6-inside-2)"
                />
              </g>
              <circle
                id="Ellipse 1"
                cx="296"
                cy="79"
                r="31"
                fill="#FED992"
                stroke="#735A2A"
                strokeWidth="2"
              />
              <path
                id="Ellipse 10"
                d="M317.45 78C317.754 78 318.001 77.7537 317.993 77.4501C317.904 73.8837 316.949 70.3894 315.206 67.2702C313.374 63.9907 310.733 61.2351 307.534 59.2657C304.335 57.2963 300.685 56.1788 296.932 56.0197C293.362 55.8684 289.812 56.5889 286.587 58.1153C286.313 58.2452 286.204 58.5766 286.341 58.8478V58.8478C286.478 59.119 286.808 59.2272 287.083 59.0976C290.139 57.6556 293.503 56.9752 296.885 57.1186C300.451 57.2698 303.918 58.3314 306.957 60.2023C309.996 62.0732 312.505 64.6911 314.246 67.8066C315.897 70.7619 316.804 74.0715 316.893 77.4501C316.901 77.7537 317.146 78 317.45 78V78Z"
                fill="#856932"
              />
              <path
                id="Ellipse 14"
                d="M284.867 59.6651C284.71 59.4055 284.371 59.3223 284.115 59.4863C282.54 60.4973 281.101 61.7051 279.832 63.0805C279.626 63.3037 279.649 63.6517 279.877 63.852V63.852C280.106 64.0523 280.453 64.0291 280.659 63.8062C281.854 62.5147 283.207 61.3792 284.686 60.4268C284.942 60.2624 285.025 59.9248 284.867 59.6651V59.6651Z"
                fill="#856932"
              />
              <path
                id="Ellipse 11"
                d="M279.96 78.1691C279.738 78.1338 279.529 78.2854 279.499 78.5085C279.15 81.1297 279.443 83.7987 280.356 86.2848C281.316 88.8985 282.929 91.2229 285.042 93.0365C287.154 94.8501 289.696 96.0925 292.425 96.6454C295.021 97.1712 297.704 97.0565 300.242 96.3141C300.458 96.2509 300.576 96.0209 300.507 95.8065V95.8065C300.439 95.5921 300.209 95.4744 299.993 95.5373C297.588 96.2375 295.046 96.3446 292.587 95.8464C289.995 95.3212 287.58 94.1409 285.573 92.4179C283.565 90.695 282.033 88.4868 281.121 86.0037C280.256 83.6484 279.977 81.1201 280.304 78.6364C280.334 78.4132 280.183 78.2044 279.96 78.1691V78.1691Z"
                fill="#856932"
              />
              <path
                id="Ellipse 12"
                d="M304.655 76.2843C304.768 76.2219 304.809 76.0797 304.744 75.9685C303.979 74.6622 302.906 73.5604 301.619 72.7596C300.265 71.9177 298.718 71.4365 297.126 71.3617C295.533 71.287 293.948 71.6212 292.522 72.3326C291.165 73.0093 289.994 74.0058 289.11 75.2347C289.034 75.3393 289.062 75.4847 289.168 75.5574V75.5574C289.275 75.63 289.42 75.6024 289.495 75.4979C290.335 74.3347 291.444 73.3915 292.73 72.7504C294.085 72.0745 295.591 71.757 297.104 71.828C298.617 71.899 300.086 72.3562 301.372 73.156C302.592 73.9147 303.609 74.9578 304.335 76.1944C304.401 76.3055 304.542 76.3466 304.655 76.2843V76.2843Z"
                fill="#856932"
              />
              <path
                id="Ellipse 13"
                d="M300.931 88.7421C300.991 88.8561 301.132 88.9001 301.244 88.8372C303.029 87.8395 304.439 86.2821 305.254 84.4024C306.069 82.5227 306.242 80.4292 305.751 78.4446C305.72 78.3195 305.591 78.2464 305.467 78.2805V78.2805C305.343 78.3146 305.27 78.443 305.301 78.5681C305.764 80.4501 305.598 82.4346 304.826 84.2167C304.053 85.9989 302.717 87.476 301.027 88.4241C300.914 88.4871 300.87 88.628 300.931 88.7421V88.7421Z"
                fill="#856932"
              />
              <rect
                id="Rectangle 9"
                x="210"
                y="83"
                width="36"
                height="26"
                fill="#856932"
              />
            </g>
            <g id="Bench">
              <rect
                id="Rectangle 12"
                x="177"
                y="111"
                width="102"
                height="11"
                fill="#915F31"
              />
              <path
                id="Rectangle 13"
                d="M171 190L195 122L207 122L183 190L171 190Z"
                fill="#915F31"
              />
              <path
                id="Rectangle 15"
                d="M294 189.791L270 121.791L258 121.791L282 189.791L294 189.791Z"
                fill="#915F31"
              />
              <path
                id="Rectangle 14"
                d="M194 180.791L218 112.791L230 112.791L206 180.791L194 180.791Z"
                fill="#915F31"
              />
              <path
                id="Rectangle 16"
                d="M270 180.791L246 112.791L234 112.791L258 180.791L270 180.791Z"
                fill="#915F31"
              />
              <rect
                id="Rectangle 10"
                x="174"
                y="111"
                width="11"
                height="11"
                fill="#AD6C2F"
              />
              <rect
                id="Rectangle 11"
                x="225"
                y="111"
                width="11"
                height="11"
                fill="#AD6C2F"
              />
            </g>
            <motion.g
              id="Guy1"
              animate={{ x: [0, 50, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
            >
              <motion.g
                animate={{ rotate: [-25, 10, -25] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <circle id="Ellipse 3" cx="32" cy="45" r="31" fill="#80D1FF" />
                <g id="HardHat">
                  <path
                    id="Ellipse 4"
                    d="M63 30.5C63 22.9413 59.7866 15.6922 54.0668 10.3475C48.3469 5.00267 40.5891 2 32.5 2C24.4109 2 16.6531 5.00267 10.9332 10.3475C5.21339 15.6922 2 22.9413 2 30.5L32.5 30.5H63Z"
                    fill="#F2F543"
                  />
                  <rect
                    id="Rectangle 5"
                    y="30"
                    width="65"
                    height="3"
                    rx="1.5"
                    fill="#EBE440"
                  />
                  <rect
                    id="Rectangle 6"
                    x="21"
                    y="1"
                    width="7"
                    height="14"
                    rx="1"
                    fill="#EBE440"
                  />
                  <rect
                    id="Rectangle 7"
                    x="29"
                    width="7"
                    height="18"
                    rx="1"
                    fill="#EBE440"
                  />
                  <rect
                    id="Rectangle 8"
                    x="37"
                    y="1"
                    width="7"
                    height="14"
                    rx="1"
                    fill="#EBE440"
                  />
                </g>
                <circle id="Ellipse 5" cx="22" cy="41" r="3" fill="black" />
                <circle id="Ellipse 6" cx="42" cy="41" r="3" fill="black" />
                <path
                  id="Vector 38"
                  d="M42 66C38 70.5 29 71 25 66"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.g>
              <g id="Shirt">
                <rect
                  id="Rectangle 17"
                  x="1"
                  y="78"
                  width="63"
                  height="96"
                  rx="7"
                  fill="var(--acc)"
                />
                <g id="Mask Group">
                  <mask
                    id="mask-shirt"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="78"
                    width="63"
                    height="96"
                  >
                    <rect
                      id="Rectangle 23"
                      x="1"
                      y="78"
                      width="63"
                      height="96"
                      rx="7"
                      fill="#5F1717"
                    />
                  </mask>
                  <g mask="url(#mask-shirt)">
                    <rect
                      id="Rectangle 18"
                      x="13"
                      y="78"
                      width="6"
                      height="96"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 25"
                      x="66.746"
                      y="117.002"
                      width="6"
                      height="96"
                      transform="rotate(90 66.746 117.002)"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 22"
                      x="1"
                      y="78"
                      width="6"
                      height="96"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 26"
                      x="66.5767"
                      y="105.003"
                      width="6"
                      height="96"
                      transform="rotate(90 66.5767 105.003)"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 31"
                      x="69"
                      y="93"
                      width="6"
                      height="96"
                      transform="rotate(90 69 93)"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 32"
                      x="69"
                      y="81"
                      width="6"
                      height="96"
                      transform="rotate(90 69 81)"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 20"
                      x="37"
                      y="78"
                      width="6"
                      height="96"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 27"
                      x="67.0847"
                      y="140.999"
                      width="6"
                      height="96"
                      transform="rotate(90 67.0847 140.999)"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 19"
                      x="25"
                      y="78"
                      width="6"
                      height="96"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 28"
                      x="66.9153"
                      y="129.001"
                      width="6"
                      height="96"
                      transform="rotate(90 66.9153 129.001)"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 21"
                      x="49"
                      y="78"
                      width="6"
                      height="96"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 29"
                      x="67.254"
                      y="152.998"
                      width="6"
                      height="96"
                      transform="rotate(90 67.254 152.998)"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 24"
                      x="61"
                      y="78"
                      width="6"
                      height="96"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 30"
                      x="67.4233"
                      y="164.997"
                      width="6"
                      height="96"
                      transform="rotate(90 67.4233 164.997)"
                      fill="black"
                      fillOpacity="0.5"
                    />
                  </g>
                </g>
              </g>
            </motion.g>
            <motion.g
              id="Guy2"
              animate={{ x: [-30, 10, -30] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
            >
              <motion.g
                animate={{ rotate: [25, -10, 25] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}
              >
                <circle id="Ellipse 7" cx="405" cy="53" r="31" fill="#80D1FF" />
                <g id="HardHat_2">
                  <path
                    id="Ellipse 4_2"
                    d="M436 38.5C436 30.9413 432.787 23.6922 427.067 18.3475C421.347 13.0027 413.589 10 405.5 10C397.411 10 389.653 13.0027 383.933 18.3475C378.213 23.6922 375 30.9413 375 38.5L405.5 38.5H436Z"
                    fill="#F2F543"
                  />
                  <rect
                    id="Rectangle 5_2"
                    x="373"
                    y="38"
                    width="65"
                    height="3"
                    rx="1.5"
                    fill="#EBE440"
                  />
                  <rect
                    id="Rectangle 6_2"
                    x="394"
                    y="9"
                    width="7"
                    height="14"
                    rx="1"
                    fill="#EBE440"
                  />
                  <rect
                    id="Rectangle 7_2"
                    x="402"
                    y="8"
                    width="7"
                    height="18"
                    rx="1"
                    fill="#EBE440"
                  />
                  <rect
                    id="Rectangle 8_2"
                    x="410"
                    y="9"
                    width="7"
                    height="14"
                    rx="1"
                    fill="#EBE440"
                  />
                </g>
                <circle id="Ellipse 8" cx="395" cy="49" r="3" fill="black" />
                <circle id="Ellipse 9" cx="415" cy="49" r="3" fill="black" />
                <path
                  id="Vector 39"
                  d="M415 74C411 78.5 402 79 398 74"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.g>

              <g id="Shirt_2">
                <rect
                  id="Rectangle 17_2"
                  x="374"
                  y="88"
                  width="63"
                  height="96"
                  rx="7"
                  fill="var(--acc-dark)"
                />
                <g id="Mask Group_2">
                  <mask
                    id="mask1"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="374"
                    y="88"
                    width="63"
                    height="96"
                  >
                    <rect
                      id="Rectangle 23_2"
                      x="374"
                      y="88"
                      width="63"
                      height="96"
                      rx="7"
                      fill="#5F1717"
                    />
                  </mask>
                  <g mask="url(#mask1)">
                    <rect
                      id="Rectangle 18_2"
                      x="386"
                      y="88"
                      width="6"
                      height="96"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 25_2"
                      x="439.746"
                      y="127.002"
                      width="6"
                      height="96"
                      transform="rotate(90 439.746 127.002)"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 22_2"
                      x="374"
                      y="88"
                      width="6"
                      height="96"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 26_2"
                      x="439.577"
                      y="115.003"
                      width="6"
                      height="96"
                      transform="rotate(90 439.577 115.003)"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 31_2"
                      x="442"
                      y="103"
                      width="6"
                      height="96"
                      transform="rotate(90 442 103)"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 32_2"
                      x="442"
                      y="91"
                      width="6"
                      height="96"
                      transform="rotate(90 442 91)"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 20_2"
                      x="410"
                      y="88"
                      width="6"
                      height="96"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 27_2"
                      x="440.085"
                      y="150.999"
                      width="6"
                      height="96"
                      transform="rotate(90 440.085 150.999)"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 19_2"
                      x="398"
                      y="88"
                      width="6"
                      height="96"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 28_2"
                      x="439.915"
                      y="139.001"
                      width="6"
                      height="96"
                      transform="rotate(90 439.915 139.001)"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 21_2"
                      x="422"
                      y="88"
                      width="6"
                      height="96"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 29_2"
                      x="440.254"
                      y="162.998"
                      width="6"
                      height="96"
                      transform="rotate(90 440.254 162.998)"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 24_2"
                      x="434"
                      y="88"
                      width="6"
                      height="96"
                      fill="black"
                      fillOpacity="0.5"
                    />
                    <rect
                      id="Rectangle 30_2"
                      x="440.423"
                      y="174.997"
                      width="6"
                      height="96"
                      transform="rotate(90 440.423 174.997)"
                      fill="black"
                      fillOpacity="0.5"
                    />
                  </g>
                </g>
              </g>
            </motion.g>
          </g>
        </svg>
        <p>I'm still under construction :)</p>
        <p>But you can start browsing some topics to come:</p>
        <div className={"home-holder"}>
          <div className={"a-home javascript"}>
            <Link to="blog/js">JavaScript</Link>
            <svg viewBox="0 0 128 128">
              <path
                fill="#F0DB4F"
                d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
              ></path>
            </svg>
          </div>
          <div className={"a-home"}>
            <Link to="blog/python">Python: Lists, Strings, Functions</Link>
          </div>
          <div className={"a-home"}>
            <Link to="blog/svg">Animating SVGs</Link>
          </div>
          <div className={"a-home"}>
            <Link to="blog/svg">C# / Interfaces / Dependency Injection</Link>
          </div>
          <div className={"a-home"}>
            <Link to="blog/svg">React Fundamentals</Link>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Blog;
