import React from "react";
import { Route, BrowserRouter as BR, Switch } from "react-router-dom";

import Home from "./pages/Home/home";
import Blog from "./pages/Blog/blog";
import Me from "./pages/Contact/me";

import "./App.css";
import "./variables.css";

const App = () => {
  return (
    <BR>
      <div className={"App"}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/me" component={Me}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/blog/python" component={Blog}></Route>
          <Route exact path="/blog/python/lists" component={Blog}></Route>
          <Route exact path="/blog/python/strings" component={Blog}></Route>
          <Route exact path="/blog/csharp" component={Blog}></Route>
          <Route exact path="/blog/go" component={Blog}></Route>
          <Route exact path="/blog/js" component={Blog}></Route>
          <Route exact path="/blog/sql" component={Blog}></Route>
          <Route exact path="/blog/html" component={Blog}></Route>
          <Route exact path="/blog/css" component={Blog}></Route>
          <Route exact path="/blog/svg" component={Blog}></Route>
        </Switch>
      </div>
    </BR>
  );
};

export default App;
