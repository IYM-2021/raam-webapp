import React, { Component } from "react";
import "../../css/Styles.css";

class BaetzSocial extends Component {
  render() {
    return (
      <div className="row Social-Button-Box">
        <div className="col-sm-12">
          <h2 className="Social-Button-Header">
            Find James on these platforms
          </h2>
        </div>
        <div className="col-sm-12">
          <a
            className="fab fa-twitter-square Social-Button"
            href="https://twitter.com/crazyrunningdad/"
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

export default BaetzSocial;
