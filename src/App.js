import React from "react";
import "./App.css";
import Routes from "./Routes";
import Header from "./Components/Header/Header";
import "./reset.css";

export default function App(props) {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}
