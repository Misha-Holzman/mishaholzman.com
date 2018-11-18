import React, { Component } from "react";
import "./style.css";

class MainPage extends Component {
  render() {
    return (
      <div className="main-page-container">
        <div className="background-globe">
          <h2 className="globe-text">Full Stack Web Developer</h2>
        </div>
        <img src="https://i.imgur.com/wT3za4V.png" height="50px" className="shadow"/>
        <img src="https://i.imgur.com/T5f8v9i.png"  height="50px" className="arrow" />
      </div>
    );
  }
}

export default MainPage;
