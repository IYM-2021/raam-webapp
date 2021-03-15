import React, { Component } from "react";
import "../../css/Styles.css";

class BaetzSocial extends Component {
  render() {
    return (
      <div className="row Social-Button-Box">
        <div className="col-sm-12">
          <h2 className="Social-Button-Header">Follow James on __________</h2>
        </div>
        <div className="col-sm-12">
          {/* <a
            className="fab fa-instagram-square Social-Button"
            href="https://www.instagram.com/crisscrossracing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a> */}
        </div>
      </div>
    );
  }
}

export default BaetzSocial;
