import React from "react";

import "./loading.css";

export const Loading = () => {
  return (
    <main id="loading-container">
      <svg class="spinner" width="255px" height="255px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <circle class="path" fill="none" stroke-width="12" stroke-linecap="round" cx="128" cy="128" r="118"></circle>
      </svg>
    </main>
  );
};
export default Loading;
