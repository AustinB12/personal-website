import React from "react";
import { motion } from "framer-motion";

import "./footer.css";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={"footer-wrapper"}>
      <div className={"backToTop"}>
        <span onClick={() => scrollTop()}>Click Me To Go Back To Top :)</span>
      </div>
      <div className={"socials"}>
        <span>I make coding tik toks!</span>
        <motion.a
          href="https://www.tiktok.com/@foraloop"
          whileHover={{
            y: "-6px",
            transition: { duration: 0.4 },
          }}
        >
          <svg
            id="Layer_1"
            x="0px"
            y="0px"
            width="884.95px"
            height="1000px"
            viewBox="0 0 884.95 1000"
            enableBackground="new 0 0 884.95 1000"
          >
            <g>
              <path
                fill="var(--accent)"
                d="M655.853,360.979c64.565,46.13,143.67,73.274,229.097,73.274V269.94
		c-16.168,0.007-32.294-1.68-48.111-5.033v129.339c-85.422,0-164.513-27.144-229.098-73.274v335.311
		c0,167.738-136.048,303.711-303.864,303.711c-62.614,0-120.814-18.923-169.163-51.368c55.18,56.39,132.13,91.374,217.262,91.374
		c167.828,0,303.883-135.969,303.883-303.718V360.979H655.853z M715.204,195.209c-32.997-36.029-54.659-82.595-59.351-134.076V40
		H610.26C621.735,105.428,660.879,161.327,715.204,195.209L715.204,195.209z M240.855,779.91
		c-18.434-24.158-28.398-53.716-28.353-84.104c0-76.72,62.23-138.92,139.002-138.92c14.306-0.012,28.528,2.187,42.165,6.508V395.41
		c-15.935-2.183-32.015-3.108-48.095-2.768v130.751c-13.644-4.324-27.871-6.519-42.183-6.511
		c-76.773,0-138.998,62.201-138.998,138.929C164.396,710.06,195.5,757.031,240.855,779.91z"
              />
              <path
                fill="var(--accentDark)"
                d="M607.741,320.973c64.585,46.13,143.676,73.274,229.098,73.274V264.908c-47.682-10.147-89.895-35.056-121.635-69.699
		C660.879,161.327,621.735,105.427,610.26,40H490.5v656.278c-0.271,76.509-62.394,138.455-139.001,138.455
		c-45.145,0-85.251-21.505-110.649-54.822c-45.358-22.879-76.46-69.851-76.46-124.102c0-76.725,62.224-138.926,138.997-138.926
		c14.708,0,28.885,2.291,42.183,6.508V392.642c-164.868,3.404-297.463,138.046-297.463,303.64
		c0,82.66,33.021,157.598,86.607,212.349C183.062,941.078,241.262,960,303.876,960c167.816,0,303.864-135.979,303.864-303.711
		V320.973L607.741,320.973z"
              />
              <path
                fill="var(--accent)"
                d="M836.838,264.908v-34.974c-43,0.065-85.151-11.97-121.635-34.73
		C747.498,230.542,790.021,254.911,836.838,264.908z M610.26,40c-1.096-6.252-1.938-12.546-2.52-18.867V0H442.384v656.283
		c-0.265,76.5-62.384,138.448-138.998,138.448c-22.496,0-43.728-5.334-62.537-14.821c25.398,33.317,65.504,54.822,110.649,54.822
		c76.602,0,138.731-61.946,139.001-138.455V40H610.26z M345.575,392.643V355.41c-13.817-1.889-27.747-2.833-41.692-2.826
		C136.047,352.583,0,488.56,0,656.283C0,761.44,53.469,854.111,134.72,908.626c-53.587-54.748-86.607-129.687-86.607-212.349
		C48.113,530.691,180.702,396.047,345.575,392.643z"
              />
            </g>
          </svg>
        </motion.a>
        <motion.a
          href="https://twitter.com/Austinbaird21"
          whileHover={{
            y: "-6px",
            transition: { duration: 0.4 },
          }}
        >
          <svg viewBox="0 0 128 128">
            <g id="surface1">
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "var(--accentDark)",
                  fillOpacity: 1,
                }}
                d="M 40.253906 127.636719 C 88.558594 127.636719 114.972656 78.679688 114.972656 36.234375 C 114.972656 34.84375 114.972656 33.457031 114.898438 32.078125 C 120.039062 27.53125 124.476562 21.898438 128 15.445312 C 123.210938 18.046875 118.128906 19.75 112.921875 20.507812 C 118.402344 16.488281 122.503906 10.171875 124.460938 2.734375 C 119.304688 6.476562 113.664062 9.113281 107.78125 10.535156 C 99.644531 -0.0507812 86.710938 -2.644531 76.234375 4.214844 C 65.761719 11.074219 60.351562 25.675781 63.035156 39.832031 C 41.921875 38.539062 22.246094 26.335938 8.914062 6.269531 C 1.933594 20.941406 5.488281 39.722656 17.023438 49.160156 C 12.875 48.988281 8.816406 47.605469 5.191406 45.128906 C 5.191406 45.265625 5.191406 45.402344 5.191406 45.539062 C 5.191406 60.8125 13.976562 73.976562 26.210938 77.03125 C 22.34375 78.320312 18.285156 78.503906 14.347656 77.574219 C 17.785156 90.667969 27.644531 99.644531 38.882812 99.902344 C 29.578125 108.820312 18.089844 113.652344 6.265625 113.621094 C 4.171875 113.621094 2.078125 113.472656 0 113.175781 C 12.007812 122.609375 25.980469 127.617188 40.253906 127.597656 "
              ></path>
            </g>
          </svg>
        </motion.a>
        <motion.a
          href="https://github.com/AustinB12"
          whileHover={{
            y: "-6px",
            transition: { duration: 0.4 },
          }}
        >
          <svg viewBox="0 0 128 128">
            <g fill="var(--accentDark)">
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
