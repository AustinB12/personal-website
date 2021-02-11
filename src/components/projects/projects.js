import React from "react";

import "./projects.css";
import Repo from "../githubrepo/repo";

const Projects = () => {
  return (
    <div className={"projectsWrapper"} id="Projects">
      <div className="projectsContent">
        <h3>Projects</h3>
        <Repo
          title={"personal-website"}
          desc={"My portfolio site!"}
          link={"https://github.com/AustinB12/personal-website"}
        ></Repo>
        <Repo
          title={"twitter-bot"}
          desc={"A python twitter bot that tweets out the nation debt."}
          link={"https://github.com/AustinB12/twitter-bot"}
        ></Repo>
      </div>
    </div>
  );
};

export default Projects;
