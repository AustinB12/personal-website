import Header from "../../components/header/header";
import { ReactComponent as Noodle } from "../../assets/Noodle.svg";

import "./me.css";

import React from "react";
const Me = (props) => {
  return (
    <div className={"me-wrapper"}>
      <Header
        currentTheme={props.currentTheme}
        changeTheme={props.changeTheme}
      />
      <h1>Contact Me!</h1>
      <article>
        <p>Email: austinzbaird@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/%F0%9F%92%BB-austin-baird-2a1490171/">
            My Profile
          </a>
        </p>
        <div className={"svgHolder"}>
          <figure>
            <Noodle />
            <figcaption>
              SVG I made of "Noodle" from the band Gorillaz
            </figcaption>
          </figure>
        </div>
      </article>
    </div>
  );
};
export default Me;
