import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Routes">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/wizard" component={Wizard} />
        </Switch>
      </div>
    );
  }
}
