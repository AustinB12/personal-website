import React from "react";

import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import "./App.css";
import "./variables.css";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <body className={"App-Body"}>
        <Intro />
        <Intro />
        <Intro />
        <Intro />
        <Intro />
        <Intro />
      </body>
    </div>
  );
};

export default App;
