import Header from "../../components/header/header";

import "./me.css";

import React from "react";
const Me = () => {
  return (
    <div className={"me-wrapper"}>
      <Header></Header>
      <h1>Contact Me!</h1>
      <article>
        <p>Email: austinzbaird@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/%F0%9F%92%BB-austin-baird-2a1490171/">
            My Profile
          </a>
        </p>
      </article>
    </div>
  );
};
export default Me;
