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
          desc={
            "My portfolio site! (The one you're looking at now) You can go see how I made this beautiful thing!"
          }
          link={"https://github.com/AustinB12/personal-website"}
        ></Repo>
        <Repo
          title={"twitter-bot"}
          desc={"A python twitter bot that tweets out the nation debt."}
          link={"https://github.com/AustinB12/twitter-bot"}
        ></Repo>
        <Repo
          title={"Blue Karma website"}
          desc={"A promotional React App website for an up-and-coming band."}
          link={"https://github.com/jacobadams111/BlueKarmaOfficialWebsite"}
        ></Repo>
      </div>
    </div>
  );
};

export default Projects;
