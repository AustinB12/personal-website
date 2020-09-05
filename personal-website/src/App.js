import React from "react";

import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Animations from "./components/animations/animations";
import Projects from "./components/projects/projects";
import Hobbies from "./components/hobbies/hobbies";
import "./variables.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <div className={"App-Body"}>
        <div
          style={{ height: "10vw", minHeight: "50px", maxHeight: "100px" }}
        ></div>
        <Intro />
        <Skills />
        <Animations />
        <Projects />
        <Hobbies />
      </div>
    </div>
  );
};

export default App;
