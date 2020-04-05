import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "~/contexts/home";

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
