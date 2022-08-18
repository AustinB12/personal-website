import React, { useState, Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home/home";
import Blog from "./pages/Blog/blog";
import Me from "./pages/Contact/me";
import SVGs from "./pages/svgs/svgs";
import Tutor from "./pages/Tutoring/tutor";
import JsHome from "./pages/Blog/js/jsHome";
import JsPostStrings from "./pages/Blog/js/jsPosts/strings/strings";
import SvgHome from "./pages/Blog/svg/svgHome";
import PythonHome from "./pages/Blog/python/pythonHome";

import { ScrollIndicator } from "./components/scrollIndicator/indicator";
import { Loading } from "./components/loading/loading";

import "./App.css";

const App = () => {
  const location = useLocation();
  const [isTheme, setTheme] = useState("dark-theme");
  const [lang, setLang] = useState("en");

  const changeTheme = (newTheme) => {
    if (newTheme && newTheme.length > 0) {
      setTheme(newTheme);
    }
  };

  return (
    <Suspense fallback={Loading}>
      <div id={"App"} className={isTheme}>
        <AnimatePresence>
          <ScrollIndicator key="scroll-indicator" />
          <Switch location={location} key={location.key}>
            <Route
              exact
              path="/"
              component={() => (
                <Home
                  lang={lang}
                  setLang={setLang}
                  currentTheme={isTheme}
                  changeTheme={changeTheme}
                ></Home>
              )}
            ></Route>
            <Route
              exact
              path="/me"
              component={() => (
                <Me
                  lang={lang}
                  setLang={setLang}
                  currentTheme={isTheme}
                  changeTheme={changeTheme}
                ></Me>
              )}
            ></Route>
            <Route
              exact
              path="/tutor"
              component={() => (
                <Tutor
                  lang={lang}
                  setLang={setLang}
                  currentTheme={isTheme}
                  changeTheme={changeTheme}
                ></Tutor>
              )}
            ></Route>
            <Route
              exact
              path="/blog"
              component={() => (
                <Blog
                  lang={lang}
                  setLang={setLang}
                  currentTheme={isTheme}
                  changeTheme={changeTheme}
                ></Blog>
              )}
            ></Route>
            <Route
              exact
              path="/svg"
              component={() => (
                <SVGs
                  lang={lang}
                  setLang={setLang}
                  currentTheme={isTheme}
                  changeTheme={changeTheme}
                ></SVGs>
              )}
            ></Route>
            <Route
              exact
              path="/blog/python/lists"
              component={() => (
                <Blog
                  lang={lang}
                  setLang={setLang}
                  currentTheme={isTheme}
                  changeTheme={changeTheme}
                ></Blog>
              )}
            ></Route>
            <Route
              exact
              path="/blog/python/strings"
              component={() => (
                <Blog
                  lang={lang}
                  setLang={setLang}
                  currentTheme={isTheme}
                  changeTheme={changeTheme}
                ></Blog>
              )}
            ></Route>
            <Route
              exact
              path="/blog/csharp"
              component={() => (
                <Blog
                  lang={lang}
                  setLang={setLang}
                  currentTheme={isTheme}
                  changeTheme={changeTheme}
                ></Blog>
              )}
            ></Route>
            <Route
              exact
              path="/blog/go"
              component={() => (
                <Blog
                  lang={lang}
                  setLang={setLang}
                  currentTheme={isTheme}
                  changeTheme={changeTheme}
                ></Blog>
              )}
            ></Route>
            <Route
              exact
              path="/blog/js"
              component={() => (
                <JsHome
                  lang={lang}
                  setLang={setLang}
                  currentTheme={isTheme}
                  changeTheme={changeTheme}
                />
              )}
            ></Route>
            <Route
              exact
              path="/blog/js/strings"
              component={() => (
                <JsPostStrings
                  lang={lang}
                  setLang={setLang}
                  currentTheme={isTheme}
                  changeTheme={changeTheme}
                />
              )}
            ></Route>
            <Route
              exact
              path="/blog/python"
              component={() => (
                <PythonHome
                  lang={lang}
                  setLang={setLang}
                  currentTheme={isTheme}
                  changeTheme={changeTheme}
                />
              )}
            ></Route>
            <Route
              exact
              path="/blog/sql"
              component={() => (
                <Blog
                  lang={lang}
                  setLang={setLang}
                  currentTheme={isTheme}
                  changeTheme={changeTheme}
                ></Blog>
              )}
            ></Route>
            <Route
              exact
              path="/blog/html"
              component={() => (
                <Blog
                  lang={lang}
                  setLang={setLang}
                  currentTheme={isTheme}
                  changeTheme={changeTheme}
                ></Blog>
              )}
            ></Route>
            <Route
              exact
              path="/blog/css"
              component={() => (
                <Blog
                  lang={lang}
                  setLang={setLang}
                  currentTheme={isTheme}
                  changeTheme={changeTheme}
                ></Blog>
              )}
            ></Route>
            <Route
              exact
              path="/blog/svg"
              component={() => (
                <SvgHome
                  lang={lang}
                  setLang={setLang}
                  currentTheme={isTheme}
                  changeTheme={changeTheme}
                ></SvgHome>
              )}
            ></Route>
          </Switch>
        </AnimatePresence>
      </div>
    </Suspense>
  );
};

export default App;
