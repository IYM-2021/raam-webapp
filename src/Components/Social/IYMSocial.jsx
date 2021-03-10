import React, { Component } from "react";
import "../../css/Styles.css";

class IYMSocial extends Component {
  render() {
    return (
      <div className="row Social-Button-Box">
        <div className="col-sm-12">
          <h2 className="Social-Button-Header">
            Follow IYM2021 on these platforms
          </h2>
        </div>
        <div className="col-sm-12">
          <a
            className="fab fa-twitter-square Social-Button"
            href="https://twitter.com/itsyourmove2021"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            className="fab fa-instagram-square Social-Button"
            href="https://www.instagram.com/itsyourmove2021/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            className="fab fa-facebook-square Social-Button"
            href="https://www.facebook.com/itsyourmove2021/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
        </div>
      </div>
    );
  }
}

export default IYMSocial;
