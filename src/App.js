import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import Header from "./Components/Header/Header";
import "./reset.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Header"
    };
  }

  render() {
    return (
      <div className="App">
        <Header message={this.state.message} />
        <Routes />
      </div>
    );
  }
}
