import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <div
      className={"introWrapper"}
      id="Me"
      ref={introRef}
      onMouseMove={handleMouse}
    >
      <div className="introContent">
        <article>
          <h3>
            {t("title")}, {t("I-am")} Austin Baird
          </h3>
          <p>
            {t("and")} {t("im-web-dev")}.
          </p>
          <div ref={ref}>
            <svg
              width="427"
              height="427"
              viewBox="0 0 427 427"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="meSvg"
            >
              <g id="MaFace">
                <g id="Mask Group">
                  <mask
                    id="mask0_101_63"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="427"
                    height="427"
                  >
                    <g id="Rectangle 61">
                      <rect
                        width="427"
                        height="427"
                        rx="213.5"
                        fill="var(--acc-dark)"
                      />
                      <rect
                        width="427"
                        height="427"
                        rx="213.5"
                        fill="url(#paint0_linear_101_63)"
                        fillOpacity="0.66"
                      />
                    </g>
                  </mask>
                  <g mask="url(#mask0_101_63)">
                    <g id="Rectangle 46">
                      <rect width="427" height="427" fill="var(--acc-dark)" />
                      <rect
                        width="427"
                        height="427"
                        fill="url(#paint1_linear_101_63)"
                        fillOpacity="0.66"
                      />
                    </g>
                    <g id="Head">
                      <g id="Neck">
                        <rect
                          x="178"
                          y="357.555"
                          width="71"
                          height="111"
                          fill="#FFC5B7"
                        />
                        <rect
                          x="178"
                          y="357.555"
                          width="71"
                          height="111"
                          fill="url(#paint2_linear_101_63)"
                          fillOpacity="0.2"
                        />
                      </g>
                      <path
                        id="Rectangle 11"
                        d="M88 162.555C88 123.895 119.34 92.5552 158 92.5552H269C307.66 92.5552 339 123.895 339 162.555V246.555C339 256.496 330.941 264.555 321 264.555H106C96.0589 264.555 88 256.496 88 246.555V162.555Z"
                        fill="#745100"
                      />
                      <path
                        id="Rectangle 1"
                        d="M98 198.555C98 143.327 142.772 98.5552 198 98.5552H228C283.228 98.5552 328 143.327 328 198.555V262.555C328 326.068 276.513 377.555 213 377.555V377.555C149.487 377.555 98 326.068 98 262.555V198.555Z"
                        fill="#FFC5B7"
                      />
                      <g id="Mask Group_2">
                        <mask
                          id="mask1_101_63"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="98"
                          y="98"
                          width="230"
                          height="300"
                        >
                          <path
                            id="Rectangle 9"
                            d="M98 158.555C98 125.418 124.863 98.5552 158 98.5552H268C301.137 98.5552 328 125.418 328 158.555V282.555C328 346.068 276.513 397.555 213 397.555V397.555C149.487 397.555 98 346.068 98 282.555V158.555Z"
                            fill="#FFC5B7"
                          />
                        </mask>
                        <g mask="url(#mask1_101_63)">
                          <rect
                            id="Rectangle 7"
                            x="-17"
                            y="84.5552"
                            width="154"
                            height="124"
                            rx="46"
                            fill="#745100"
                          />
                          <rect
                            id="Rectangle 8"
                            x="281"
                            y="84.5552"
                            width="154"
                            height="124"
                            rx="46"
                            fill="#745100"
                          />
                          <path
                            id="Rectangle 10"
                            d="M123 63.5552C123 38.1501 143.595 17.5552 169 17.5552H250C275.405 17.5552 296 38.1501 296 63.5552V110.215C296 129.195 284.448 146.621 266.237 151.968C226.371 163.674 195.137 163.258 153.857 151.662C135.138 146.403 123 128.72 123 109.276V63.5552Z"
                            fill="#745100"
                          />
                        </g>
                      </g>
                      <g id="Eyes">
                        <motion.rect
                          animate={{
                            x: transformX * 2,
                            y: transformY * 2,
                          }}
                          id="Rectangle 4"
                          x="161"
                          y="169.555"
                          width="40"
                          height="70"
                          rx="20"
                          fill="#FFFFFD"
                        />
                        <motion.rect
                          animate={{
                            x: transformX * 2,
                            y: transformY * 2,
                          }}
                          id="Rectangle 5"
                          x="226"
                          y="169.555"
                          width="40"
                          height="70"
                          rx="20"
                          fill="#FFFFFD"
                        />
                        <motion.path
                          animate={{
                            x: transformX * 5,
                            y: transformY * 5,
                          }}
                          id="Subtract"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M169 201.545C175.119 201.283 180 196.239 180 190.055C180 189.564 179.969 189.079 179.909 188.604C180.269 188.572 180.632 188.555 181 188.555C187.627 188.555 193 193.928 193 200.555V218.555C193 225.183 187.627 230.555 181 230.555C174.373 230.555 169 225.183 169 218.555V201.545Z"
                          fill="#3D3D3D"
                        />
                        <motion.path
                          animate={{
                            x: transformX * 5,
                            y: transformY * 5,
                          }}
                          id="Subtract_2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M234 201.545C240.119 201.283 245 196.239 245 190.055C245 189.564 244.969 189.079 244.909 188.604C245.269 188.572 245.632 188.555 246 188.555C252.627 188.555 258 193.928 258 200.555V218.555C258 225.183 252.627 230.555 246 230.555C239.373 230.555 234 225.183 234 218.555V201.545Z"
                          fill="#3D3D3D"
                        />
                      </g>
                      <path
                        id="Ellipse 2"
                        d="M225 253.055C225 259.406 219.851 264.555 213.5 264.555C207.149 264.555 202 259.406 202 253.055C202 246.704 207 233.555 213.5 229.555C220 233.555 225 246.704 225 253.055Z"
                        fill="#F1A672"
                      />
                      <path
                        id="Union"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M168 264.555C175.732 264.555 182 270.823 182 278.555C182 287.555 187 289.555 199 289.555C206.732 289.555 213 295.823 213 303.555C213 311.287 206.732 317.555 199 317.555C177.5 317.555 154 297.555 154 278.555C154 270.823 160.268 264.555 168 264.555Z"
                        fill="white"
                      />
                      <motion.path
                        animate={{
                          x: transformX * 2,
                          y: transformY * 2,
                        }}
                        id="Vector 3"
                        d="M148 241.555V231.055C151.294 225.256 171.361 232.856 199 241.555H148Z"
                        fill="#FFC5B7"
                      />
                      <circle
                        id="Ellipse 5"
                        cx="88"
                        cy="211.555"
                        r="19"
                        fill="#FFC5B7"
                      />
                      <circle
                        id="Ellipse 6"
                        cx="339"
                        cy="211.555"
                        r="19"
                        fill="#FFC5B7"
                      />
                      <path
                        id="Vector 4"
                        d="M143.128 102.007C143.128 102.007 127.279 44.5556 182.088 61.0416C191.702 63.9334 198.37 67.0096 202.829 70.1166C210.681 55.6447 227.356 42.0611 262.651 45.5548C333.308 52.5488 296.328 110 296.328 110L143.128 102.007Z"
                        fill="#745100"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_101_63"
                  x1="329.728"
                  y1="73.1085"
                  x2="-45.8755"
                  y2="368.708"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--acc-light)" />
                  <stop
                    offset="1"
                    stopColor="var(--acc-dark)"
                    stopOpacity="0"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_101_63"
                  x1="329.728"
                  y1="73.1085"
                  x2="-45.8755"
                  y2="368.708"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--acc-light)" />
                  <stop
                    offset="1"
                    stopColor="var(--acc-dark)"
                    stopOpacity="0"
                  />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_101_63"
                  x1="213.5"
                  y1="357.555"
                  x2="213.5"
                  y2="468.555"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--bg)" />
                  <stop offset="1" stopOpacity="0" />
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
