import React from "react";
import { ReactComponent as Me } from "../../assets/ItsMe-Circle.svg";

import "./intro.css";

const Intro = () => {
  return (
    <div className={"introWrapper"} id="Me">
      <div className="introContent">
        <article>
          <h3>Hi, I'm Austin Baird</h3>
          <p>and I'm a web developer.</p>
          <Me id="meSvg" />
        </article>
      </div>
    </div>
  );
};

export default Intro;
