import React, { Suspense } from "react";

import Header from "../../components/header/header";
import Intro from "../../components/intro/intro";
import Skills from "../../components/skills/skills";
import Projects from "../../components/projects/projects";
import Footer from "../../components/footer/footer";

import "./home.css";

const Home = (props) => {
  return (
    <div className="Home-Container">
      <Suspense fallback="Loading...">
        <Header
          lang={props.lang}
          setLang={props.setLang}
          currentTheme={props.currentTheme}
          changeTheme={props.changeTheme}
        />
        <div className={"Home-Content"}>
          <Intro />
          <Skills />
          <Projects />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
