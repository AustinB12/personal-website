import React, { useState } from "react";

import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Animations from "./components/animations/animations";
import Projects from "./components/projects/projects";
import Hobbies from "./components/hobbies/hobbies";
import "./variables.css";
import "./App.css";

const App = () => {
  const [isDark, setDark] = useState(false);

  return (
    <div className="App">
      <Header amDark={isDark} toggleDark={setDark} />
      <div className={"App-Body"}>
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
