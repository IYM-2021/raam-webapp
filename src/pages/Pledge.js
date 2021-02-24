import React, { Component } from "react";

import "../css/Styles.css";

import NavBar from "../Components/NavBar/NavBar";
import PledgeVideo from "../Components/Pledge/PledgeVideo";
import PledgeInfo from "../Components/Pledge/PledgeInfo";
import PledgeTracker from "../Components/Pledge/PledgeTracker";
import LearnMore from "../Components/Pledge/LearnMore";
import Footer from "../Components/Footer";

import background from "../images/background.png";
import { Parallax } from "react-parallax";

class Pledge extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PledgeVideo />
        <PledgeInfo />
        {/* <PledgeTracker /> */}
        <LearnMore />
        <Footer />
      </Parallax>
    );
  }
}

export default Pledge;
