import React, { Component } from "react";
import "./style.css";
import { StickyContainer, Sticky } from 'react-sticky';




class Navbar extends Component {
  render() {
    return (
      <div className="nav-container" id="navbar">
        <div className="title">
          <a href="#changeMe" id="my-name">
            <strong>Misha</strong> Holzman
          </a>
        </div>
        <ul className="nav-bullets">
          <li className="links">
            <div class="section">
              <div class="section__item">
                <a
                  href="#0"
                  class="sm-link sm-link_padding-all sm-link1 nav-text-links"
                >
                  <span class="sm-link__label">About Me</span>
                </a>
              </div>
            </div>
          </li>
          <li className="links">
          <div class="section">
              <div class="section__item">
                <a
                  href="#0"
                  class="sm-link sm-link_padding-all sm-link1 nav-text-links"
                >
                  <span class="sm-link__label">My Work</span>
                </a>
              </div>
            </div>
          </li>
          <li className="links">
          <div class="section">
              <div class="section__item">
                <a
                  href="#0"
                  class="sm-link sm-link_padding-all sm-link1 nav-text-links"
                >
                  <span class="sm-link__label">Contact</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
