import React, { Component } from "react";
import "./style.css";

class MyWork extends Component {
  render() {
    return (
      <div className="main-work-container">
        <div id="press">
          <a id="my-work">
            <h2 className="my-work-title">MY WORK</h2>
          </a>
          <div className="press-container hover11">
            <div className="shaka-div">
              <a
                href="https://www.villagevoice.com/2016/09/28/a-bold-take-on-taiwanese-street-food-in-east-williamsburg/"
                target="_blank"
              >
                <img src="https://i.imgur.com/bkN5v6m.jpg" alt="" className="shaka-site" height="300px" />
              </a>
            </div>
            <div className="winson-div">
              <a
                href="http://www.grubstreet.com/2016/05/win-son-modern-taiwanese-brooklyn-opening.html"
                target="_blank"
              >
                <img src="https://i.imgur.com/Zw3EHBL.jpg" alt="" height="320px" className="winson-site"/>
              </a>
            </div>
            <div className="fooder-div">
              <a
                href="https://www.villagevoice.com/2017/06/27/boys-meet-grill-when-the-guys-behind-win-son-got-together-it-was-love-at-first-bite/"
                target="_blank"
              >
                <img src="https://i.imgur.com/Y8HWoHe.jpg" alt="" height="420px" className="fooder-site"/>
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
