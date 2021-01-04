import React from "react";
import { Route, BrowserRouter as BR, Switch } from "react-router-dom";

import Home from "./pages/Home/home";
import Blog from "./pages/Blog/blog";

import "./App.css";
import "./variables.css";

const App = () => {
  return (
    <BR>
      <div className={"App"}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/blog" component={Blog}></Route>
        </Switch>
      </div>
    </BR>
  );
};

export default App;
