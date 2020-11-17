import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./componets/Nav"
import Jumbotron from "./componets/Jumbotron"

function App() {
  return (
    <div className="App">
      <Nav/>
        <Jumbotron/>
    </div>
  );
}


export default App;
