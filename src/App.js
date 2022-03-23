import { Card } from "./Card";
import { List } from "./List";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/:id" exact component={Card} />
      </Switch>
    </Router>
  );
}

export default App;
