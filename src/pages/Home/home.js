import React from "react";

import Header from "../../components/header/header";
import Intro from "../../components/intro/intro";
import Skills from "../../components/skills/skills";
import Projects from "../../components/projects/projects";

import "./home.css";

const Home = () => {
  return (
    <div className="Home-Container">
      <Header />
      <div className={"Home-Content"}>
        <Intro />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
