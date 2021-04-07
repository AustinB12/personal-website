import React from "react";
import { motion, useViewportScroll } from "framer-motion";

export const CircleIndicator = () => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      id="scroll-indicator"
    >
      <motion.path
        d="M39.7279 39.7279C46.7574 32.6985 46.7574 21.3015 39.7279 14.2721C32.6985 7.24264 21.3015 7.24264 14.2721 14.2721C7.24264 21.3015 7.24264 32.6985 14.2721 39.7279C21.3015 46.7574 32.6985 46.7574 39.7279 39.7279Z"
        style={{ pathLength: scrollYProgress }}
      />
    </svg>
  );
};
