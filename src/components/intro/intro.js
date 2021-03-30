import React from "react";

import "./intro.css";

const Intro = () => {
  return (
    <div className={"introWrapper"} id="Me">
      <div className="introContent">
        <article>
          <h3>Hello World!</h3>
          <p>My name is Austin Baird, and I'm a web developer!</p>
          <p>My skills lie primarily in .NET, JS and React.</p>
          <p>Oh, and I like designing & animating SVGs</p>
        </article>
      </div>
    </div>
  );
};

export default Intro;
