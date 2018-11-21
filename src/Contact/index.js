import React, { Component } from "react";
import "./style.css";

class ContactPage extends Component {
  render() {
    return (
      <div className="conact-page-container" id="contact-page">
        <img
          src="https://www.freeiconspng.com/uploads/line-png-32.png"
          width="40%"
          alt="Free Download Line Png Images"
          className="line"
        />
        <h2 className="contact-title">contact me</h2>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/misha-holzman/"
            className="social-icon"
            target="_blank"
          >
            <img
              src="https://i.imgur.com/M427KnU.png"
              className="social-images"
              alt="linkedin"
            />
          </a>
          <a
            href="https://git.generalassemb.ly/mholzman"
            className="social-icon"
            target="_blank"
          >
            <img
              src="https://i.imgur.com/0pzhAxs.png"
              alt="github"
              className="social-images"
              height="50px"
            />
          </a>
          <a
            href="https://www.instagram.com/notions_of_real/?hl=en"
            className="social-icon"
            target="_blank"
          >
            <img
              src="https://i.imgur.com/l9qpIO3.png"
              className="social-images"
              alt="instagram"
            />
          </a>
        </div>
        <div className="contact-content-container">
          <div className="">
            <p className="phone">
              <img
                src="https://i.imgur.com/YBe6mxx.png"
                alt="github"
                height="30px"
                className=""
              />{" "}
              347 • 603 • 6396
            </p>
            <p className="email">
              <img
                src="https://i.imgur.com/AGftEKD.png"
                alt="github"
                height="30px"
                className=""
              />{" "}
              mcholzman1@gmail.com
            </p>
            <p className="address">
              <img
                src="https://i.imgur.com/C3FkxHo.png"
                alt="github"
                height="30px"
                className=""
              />
              121 Wooster St. New York, NY 10012
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
