import React from "react";

import { ReactComponent as Duo } from "../../assets/DuolingoBird.svg";

import "./intro.css";

const Intro = () => {
  return (
    <div className={"introWrapper"} id="Me">
      <div className="introContent">
        <article>
          <h3>Hello World!</h3>
          <p>My name is Austin Baird, and I'm a web developer!</p>
          <p>My skills lie primarily in .NET, JS and React.</p>
          <p>Oh, and I like designing & animating SVGs like this -></p>
        </article>
        <aside>
          <Duo />
        </aside>
      </div>
    </div>
  );
};

export default Intro;
