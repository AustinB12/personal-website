import React, { useState, Suspense } from "react";
import { Route, BrowserRouter as BR, Switch } from "react-router-dom";

import Home from "./pages/Home/home";
import Blog from "./pages/Blog/blog";
import Me from "./pages/Contact/me";
import JsHome from "./pages/Blog/js/jsHome";
import PythonHome from "./pages/Blog/python/pythonHome";

import { ScrollIndicator } from "./components/scrollIndicator/indicator";
import { Loading } from "./components/loading/loading";

import "./App.css";

const App = () => {
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

  return (
    <Suspense fallback={Loading}>
      <BR>
        <div id={"App"} className={isTheme}>
          <ScrollIndicator />
          <Switch>
            <Route exact path="/" component={homeWithProps}></Route>
            <Route exact path="/me" component={meWithProps}></Route>
            <Route exact path="/blog" component={blogWithProps}></Route>
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
        </div>
      </BR>
    </Suspense>
  );
};

export default App;
