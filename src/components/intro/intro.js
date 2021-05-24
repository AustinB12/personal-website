import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

import "./intro.css";

const Intro = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [introX, setIntroX] = useState(0);
  const [introY, setIntroY] = useState(0);
  const [svgX, setSvgX] = useState(0);
  const [svgY, setSvgY] = useState(0);
  const [transformX, setTransformX] = useState(0);
  const [transformY, setTransformY] = useState(0);

  const offsetX = introX - svgX;

  const introRef = useRef(null);
  useEffect(() => {
    setIntroX(introRef.current ? introRef.current.offsetWidth : 0);
    setIntroY(introRef.current ? introRef.current.offsetHeight : 0);
  }, []);
  const ref = useRef(null);
  useEffect(() => {
    setSvgX(ref.current ? ref.current.offsetWidth : 0);
    setSvgY(ref.current ? ref.current.offsetHeight : 0);
  }, []);

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  function handleMouse(event) {
    x.set(event.pageX);
    y.set(event.pageY);
    setCursorX(event.pageX);
    setCursorY(event.pageY);
    setTransformX(((cursorX - offsetX / 2) / (svgX / 2)).toFixed(8) - 1);
    setTransformY(((cursorY - (introY / 2 + 50)) / svgY).toFixed(8) - 0.5);
  }

  return (
    <div
      className={"introWrapper"}
      id="Me"
      ref={introRef}
      onMouseMove={handleMouse}
    >
      <div className="introContent">
        <article>
          <h3>Hi, I'm Austin Baird</h3>
          <p>and I'm a web developer.</p>
          <div ref={ref}>
            <svg
              id="meSvg"
              width="427"
              height="427"
              viewBox="0 0 427 427"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ItsMe-Circle">
                <g id="BG">
                  <mask
                    id="meMask001"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="427"
                    height="427"
                  >
                    <g id="Rectangle 2">
                      <rect
                        width="427"
                        height="427"
                        rx="213.5"
                        fill="#59E290"
                      />
                      <rect
                        width="427"
                        height="427"
                        rx="213.5"
                        fill="url(#paint0_linear)"
                      />
                    </g>
                  </mask>
                  <g mask="url(#meMask001)">
                    <g id="Rectangle 1">
                      <rect
                        width="427"
                        height="427"
                        rx="213.5"
                        fill="#59E290"
                      />
                      <rect
                        width="427"
                        height="427"
                        rx="213.5"
                        fill="url(#paint1_linear)"
                      />
                    </g>
                    <g id="Body">
                      <g id="Neck">
                        <path
                          id="Rectangle 4"
                          d="M179 273H248V362C221.054 374.612 205.946 374.222 179 362V273Z"
                          fill="#FFF3D2"
                        />
                        <path
                          id="Rectangle 5"
                          d="M179 256H248V315C221.281 329.3 206.185 330.008 179 315V256Z"
                          fill="#B87888"
                          fillOpacity="0.22"
                        />
                      </g>
                      <g id="Ears">
                        <ellipse
                          id="Ellipse 2"
                          cx="116.5"
                          cy="210"
                          rx="17.5"
                          ry="23"
                          fill="#FBEECD"
                        />
                        <ellipse
                          id="Ellipse 8"
                          rx="17.5"
                          ry="23"
                          transform="matrix(-1 0 0 1 313.5 210)"
                          fill="#FBEECD"
                        />
                        <path
                          id="Vector 2"
                          d="M119 220.5C119.5 213 107 210.5 107 210.5"
                          stroke="#403D3A"
                          strokeOpacity="0.61"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          id="Vector 6"
                          d="M310.015 218C309.515 210.5 322.015 208 322.015 208"
                          stroke="#403D3A"
                          strokeOpacity="0.61"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                      <path
                        id="Rectangle 2_2"
                        d="M122 124H306V209.5C306 264.5 262 307.5 232 307.5H196C172 307.5 122 256 122 209.5V124Z"
                        fill="#FFF3D2"
                      />
                      <g id="Eyebrows">
                        <path
                          id="Vector 4"
                          d="M161 165C170.783 160.117 181.964 159.768 190 163.605"
                          stroke="#655A4A"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                        <path
                          id="Vector 5"
                          d="M268 165C258.217 160.117 247.036 159.768 239 163.605"
                          stroke="#655A4A"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </g>
                      <g id="MouthAndNose">
                        <path
                          id="Vector 3"
                          d="M224.5 229C219.5 233 212.5 233 207 229"
                          stroke="#403D3A"
                          strokeOpacity="0.5"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <g id="Mouth">
                          <path
                            id="Ellipse 9"
                            d="M185 265.5C185 271.733 188.266 277.71 194.08 282.117C199.893 286.524 207.778 289 216 289C224.222 289 232.107 286.524 237.92 282.117C243.734 277.71 247 271.733 247 265.5L216 265.5H185Z"
                            fill="#9D543C"
                          />
                          <path
                            id="Intersect"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M234.096 284.51C228.88 281.605 222.573 280.013 216.052 280.013C209.531 280.013 203.223 281.605 198.008 284.51C203.223 287.415 209.531 289.007 216.052 289.007C222.573 289.007 228.88 287.415 234.096 284.51Z"
                            fill="#FF7AAA"
                          />
                          <path
                            id="Rectangle 12"
                            d="M185 261C185 260.448 185.448 260 186 260H246C246.552 260 247 260.448 247 261V265.5H185V261Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <g id="Eyes">
                        <rect
                          id="Rectangle 8"
                          x="160"
                          y="169"
                          width="32"
                          height="45"
                          rx="16"
                          fill="white"
                        />
                        <motion.rect
                          animate={{
                            x: transformX * 5,
                            y: transformY * 5,
                          }}
                          id="Rectangle 9"
                          x="169"
                          y="186"
                          width="15"
                          height="20"
                          rx="7.5"
                          fill="#3F2806"
                        />
                        <rect
                          id="Rectangle 10"
                          x="237"
                          y="169"
                          width="32"
                          height="45"
                          rx="16"
                          fill="white"
                        />
                        <motion.rect
                          animate={{
                            x: transformX * 5,
                            y: transformY * 5,
                          }}
                          id="Rectangle 11"
                          x="245"
                          y="186"
                          width="15"
                          height="20"
                          rx="7.5"
                          fill="#3F2806"
                        />
                      </g>
                      <g id="Hair">
                        <path
                          id="Rectangle 3"
                          d="M136.5 91.5C108 97.5 106.018 145.286 122.5 148.5C122.5 148.5 134.5 163.5 145 146C155.5 128.5 181.5 137 228.5 144.5C275.5 152 260.81 139.474 269.5 141.5C289.464 156.363 298.691 160.033 309 152C319.309 143.967 314.5 99.5 289 85C266.5 34.5 153.5 58 136.5 91.5Z"
                          fill="#785624"
                        />
                        <path
                          id="Vector 11"
                          d="M121 208C127.926 177.05 140.774 157.696 127 140.717C123.569 136.885 116.049 134.159 113.414 153.918C110.779 173.677 115.373 198.206 121 208Z"
                          fill="#785624"
                        />
                        <path
                          id="Vector 12"
                          d="M306.111 208C299.185 177.05 286.337 157.696 300.111 140.717C303.542 136.885 311.063 134.159 313.698 153.918C316.333 173.677 311.738 198.206 306.111 208Z"
                          fill="#785624"
                        />
                        <path
                          id="Vector 13"
                          d="M258 67.5C248.5 62.5 226.5 61.5 215 63"
                          stroke="#9E7434"
                          strokeOpacity="0.75"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                        <path
                          id="Vector 14"
                          d="M280.5 83.5C278 80 271.5 73.5 266 71.5"
                          stroke="#9E7434"
                          strokeOpacity="0.75"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                      </g>
                    </g>
                    <g id="Shirt">
                      <path
                        id="Rectangle 6"
                        d="M55 376.905C88.7065 351.475 114.18 334.315 179 333V367H248V333C314.754 334.813 369 374.81 371 376.905C373 379 375.5 381.5 375.5 387V427H50.5V385C50.5 381 51 379.922 55 376.905Z"
                        fill="#485E51"
                      />
                      <g id="Buttons">
                        <rect
                          id="Rectangle 13"
                          x="209"
                          y="366"
                          width="11"
                          height="61"
                          fill="#44534A"
                        />
                        <g id="Button">
                          <circle
                            id="Ellipse 10"
                            cx="214.5"
                            cy="420.5"
                            r="3.25"
                            fill="#303733"
                            stroke="#545454"
                            strokeWidth="0.5"
                          />
                          <circle
                            id="Ellipse 11"
                            cx="213.5"
                            cy="419.5"
                            r="0.5"
                            fill="#545454"
                          />
                          <circle
                            id="Ellipse 12"
                            cx="213.5"
                            cy="421.5"
                            r="0.5"
                            fill="#545454"
                          />
                          <circle
                            id="Ellipse 13"
                            cx="215.5"
                            cy="421.5"
                            r="0.5"
                            fill="#545454"
                          />
                          <circle
                            id="Ellipse 14"
                            cx="215.5"
                            cy="419.5"
                            r="0.5"
                            fill="#545454"
                          />
                        </g>
                        <g id="Button_2">
                          <circle
                            id="Ellipse 10_2"
                            cx="214.5"
                            cy="400.5"
                            r="3.25"
                            fill="#303733"
                            stroke="#545454"
                            strokeWidth="0.5"
                          />
                          <circle
                            id="Ellipse 11_2"
                            cx="213.5"
                            cy="399.5"
                            r="0.5"
                            fill="#545454"
                          />
                          <circle
                            id="Ellipse 12_2"
                            cx="213.5"
                            cy="401.5"
                            r="0.5"
                            fill="#545454"
                          />
                          <circle
                            id="Ellipse 13_2"
                            cx="215.5"
                            cy="401.5"
                            r="0.5"
                            fill="#545454"
                          />
                          <circle
                            id="Ellipse 14_2"
                            cx="215.5"
                            cy="399.5"
                            r="0.5"
                            fill="#545454"
                          />
                        </g>
                        <g id="Button_3">
                          <circle
                            id="Ellipse 10_3"
                            cx="214.5"
                            cy="380.5"
                            r="3.25"
                            fill="#303733"
                            stroke="#545454"
                            strokeWidth="0.5"
                          />
                          <circle
                            id="Ellipse 11_3"
                            cx="213.5"
                            cy="379.5"
                            r="0.5"
                            fill="#545454"
                          />
                          <circle
                            id="Ellipse 12_3"
                            cx="213.5"
                            cy="381.5"
                            r="0.5"
                            fill="#545454"
                          />
                          <circle
                            id="Ellipse 13_3"
                            cx="215.5"
                            cy="381.5"
                            r="0.5"
                            fill="#545454"
                          />
                          <circle
                            id="Ellipse 14_3"
                            cx="215.5"
                            cy="379.5"
                            r="0.5"
                            fill="#545454"
                          />
                        </g>
                      </g>
                      <g id="Collar">
                        <path
                          id="Vector 15"
                          d="M248 343.5C246 347.5 226.13 363.332 214.5 366L238 390.5C250 375.5 253.5 351 254 346.5C254.5 342 254.094 331.444 248 333C250.236 337.213 250 339.5 248 343.5Z"
                          fill="#61786A"
                        />
                        <path
                          id="Vector 16"
                          d="M179.154 343.655C181.154 347.655 203.024 363.487 214.654 366.155L191.154 390.655C179.154 375.655 173.654 351.155 173.154 346.655C172.654 342.155 173.06 331.599 179.154 333.155C176.918 337.368 177.154 339.655 179.154 343.655Z"
                          fill="#61786A"
                        />
                      </g>
                      <g id="Pocket">
                        <rect
                          id="Rectangle 16"
                          x="291"
                          y="408"
                          width="49"
                          height="7"
                          fill="#61786A"
                        />
                        <rect
                          id="Rectangle 17"
                          x="291"
                          y="415"
                          width="49"
                          height="12"
                          fill="#506859"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="213.5"
                  y1="0"
                  x2="213.5"
                  y2="427"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#30C9DE" />
                  <stop offset="1" stopColor="#39E4E4" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="213.5"
                  y1="0"
                  x2="213.5"
                  y2="427"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#30C9DE" />
                  <stop offset="1" stopColor="#39E4E4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Intro;
