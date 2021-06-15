import React, { useState, Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home/home";
import Blog from "./pages/Blog/blog";
import Me from "./pages/Contact/me";
import SVGs from "./pages/svgs/svgs";
import JsHome from "./pages/Blog/js/jsHome";
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

  const homeWithProps = () => {
    return (
      <Home
        lang={lang}
        setLang={setLang}
        currentTheme={isTheme}
        changeTheme={changeTheme}
      ></Home>
    );
  };
  const blogWithProps = () => {
    return (
      <Blog
        lang={lang}
        setLang={setLang}
        currentTheme={isTheme}
        changeTheme={changeTheme}
      ></Blog>
    );
  };
  const meWithProps = () => {
    return (
      <Me
        lang={lang}
        setLang={setLang}
        currentTheme={isTheme}
        changeTheme={changeTheme}
      ></Me>
    );
  };

  const svgsWithProps = () => {
    return (
      <SVGs
        lang={lang}
        setLang={setLang}
        currentTheme={isTheme}
        changeTheme={changeTheme}
      ></SVGs>
    );
  };

  return (
    <Suspense fallback={Loading}>
      <div id={"App"} className={isTheme}>
        <AnimatePresence>
          <ScrollIndicator />
          <Switch location={location} key={location.key}>
            <Route exact path="/" component={homeWithProps}></Route>
            <Route exact path="/me" component={meWithProps}></Route>
            <Route exact path="/blog" component={blogWithProps}></Route>
            <Route exact path="/svg" component={svgsWithProps}></Route>
            <Route
              exact
              path="/blog/python/lists"
              component={blogWithProps}
            ></Route>
            <Route
              exact
              path="/blog/python/strings"
              component={blogWithProps}
            ></Route>
            <Route exact path="/blog/csharp" component={blogWithProps}></Route>
            <Route exact path="/blog/go" component={blogWithProps}></Route>
            <Route exact path="/blog/js" component={JsHome}></Route>
            <Route exact path="/blog/python" component={PythonHome}></Route>
            <Route exact path="/blog/sql" component={blogWithProps}></Route>
            <Route exact path="/blog/html" component={blogWithProps}></Route>
            <Route exact path="/blog/css" component={blogWithProps}></Route>
            <Route exact path="/blog/svg" component={blogWithProps}></Route>
          </Switch>
        </AnimatePresence>
      </div>
    </Suspense>
  );
};

export default App;
