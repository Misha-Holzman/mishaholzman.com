import React, { Component } from "react";
import "./style.css";

class MyWork extends Component {
  render() {
    return (
      <div className="main-work-container" id="work-page">
        <div id="press">
          <a id="my-work">
            <h2 className="my-work-title">MY WORK</h2>
          </a>
          <div className="press-container hover11">
            <div className="shaka-div">
              <a
                href="https://shaka-app.herokuapp.com/"
                target="_blank"
              >
                <img src="https://i.imgur.com/bkN5v6m.jpg" alt="" className="shaka-site" height="250px" />
              </a>
            </div>
            <div className="winson-div">
              <a
                href="https://win-son-app.herokuapp.com/"
                target="_blank"
              >
                <img src="https://i.imgur.com/Zw3EHBL.jpg" alt="" height="270px" className="winson-site"/>
              </a>
            </div>
            <div className="fooder-div">
              <a
                href="https://fooderapp.herokuapp.com/"
                target="_blank"
              >
                <img src="https://i.imgur.com/Y8HWoHe.jpg" alt="" height="370px" className="fooder-site"/>
              </a>
            </div>
            <div className="keeper-div">
              <a
                href="https://ny.eater.com/2018/2/27/17053136/win-son-nyc-review-two-stars-taiwanese-american"
                target="_blank"
              >
                <img src="https://i.imgur.com/hcaxG8m.jpg" alt="" className="keeper-site"/>
              </a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default MyWork;
