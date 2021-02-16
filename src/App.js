import React, { useState } from "react";
import { Route, BrowserRouter as BR, Switch } from "react-router-dom";

import Home from "./pages/Home/home";
import Blog from "./pages/Blog/blog";
import Me from "./pages/Contact/me";

import "./App.css";
import "./variables.css";

const App = () => {
  const [isTheme, setTheme] = useState("dark-theme");

  const changeTheme = (newTheme) => {
    if (newTheme && newTheme.length > 0) {
      setTheme(newTheme);
    }
  };

  const homeWithProps = () => {
    return <Home currentTheme={isTheme} changeTheme={changeTheme}></Home>;
  };
  const blogWithProps = () => {
    return <Blog currentTheme={isTheme} changeTheme={changeTheme}></Blog>;
  };
  const meWithProps = () => {
    return <Me currentTheme={isTheme} changeTheme={changeTheme}></Me>;
  };

  return (
    <BR>
      <div id={"App"} className={isTheme}>
        <Switch>
          <Route exact path="/" component={homeWithProps}></Route>
          <Route exact path="/me" component={meWithProps}></Route>
          <Route exact path="/blog" component={blogWithProps}></Route>
          <Route exact path="/blog/python" component={blogWithProps}></Route>
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
          <Route exact path="/blog/js" component={blogWithProps}></Route>
          <Route exact path="/blog/sql" component={blogWithProps}></Route>
          <Route exact path="/blog/html" component={blogWithProps}></Route>
          <Route exact path="/blog/css" component={blogWithProps}></Route>
          <Route exact path="/blog/svg" component={blogWithProps}></Route>
        </Switch>
      </div>
    </BR>
  );
};

export default App;
