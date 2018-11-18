import React, { Component } from "react";
import Navbar from "../Navbar";
import MainPage from "../MainPage";
import MyWork from "../MyWork";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainPage />
        <MyWork />
      </div>
    )
  }
}

export default App;
