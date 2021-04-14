import React, { useState, useEffect } from "react";
import { useViewportScroll } from "framer-motion";

export const ScrollIndicator = () => {
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useViewportScroll();

  useEffect(() =>
    scrollYProgress.onChange(() => setProgress(scrollYProgress.current))
  );

  return (
    <svg
      id={"scroll-indicator"}
      height="10"
      width="100%"
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
    >
      <rect
        height="10px"
        width={(progress * 100).toString() + "%"}
        fill="var(--txt)"
      ></rect>
    </svg>
  );
};
