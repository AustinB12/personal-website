import React from "react";

import "./intro.css";

const Intro = () => {
  return (
    <div className="introWrapper" id="Me">
      <div className="introContent">
        <h3>Hello World!</h3>
        <p>My name is Austin Baird, and I'm a web developer.</p>
        <p>
          I graduated from the University of North Carolina at Wilmington in
          2019 with a mojor in Computer Science and a minor in Mathematics. My
          work experience includes doing software development for Corning
          Incorporated, EMS Linq, and Ally Financial where I work currently.
        </p>
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@codingtuts/video/6904007360944098565"
          data-video-id="6904007360944098565"
          style={{ maxWidth: 605, minWidth: 325 }}
        >
          <section>
            <a
              rel="noopener noreferrer"
              target="_blank"
              title="@codingtuts"
              href="https://www.tiktok.com/@codingtuts"
            >
              @codingtuts
            </a>
            <p>For loops in Python!</p>{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              title="♬ original sound - Austin Baird"
              href="https://www.tiktok.com/music/original-sound-6904007495858064133"
            >
              ♬ original sound - Austin Baird
            </a>
          </section>
        </blockquote>
      </div>
    </div>
  );
};

export default Intro;
