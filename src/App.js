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

  //? Will change the css properties if needed
  setTheme(isDark);

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

const setTheme = (isDark) => {
  let IAmRoot = document.documentElement;

  if (isDark) {
    IAmRoot.style.setProperty("--background", "#0d1117");
    IAmRoot.style.setProperty("--textColor", "#eff8ff");
    IAmRoot.style.setProperty("--accentLight", "#616872");
    IAmRoot.style.setProperty("--accentMedium", "#424a55");
    IAmRoot.style.setProperty("--accentDark", "#161b22");
  } else {
    IAmRoot.style.setProperty("--background", "#fcf8ec");
    IAmRoot.style.setProperty("--textColor", "#0f0f0f");
    IAmRoot.style.setProperty("--accentLight", "#e0eaee");
    IAmRoot.style.setProperty("--accentMedium", "#ededed");
    IAmRoot.style.setProperty("--accentDark", "#456268");
  }
};

export default App;
