import React, { Component } from "react";
import NavBar from "../Components/NavBar/NavBar";
import PageHeader from "../Components/Header";

import "../css/Styles.css";
import SamarthSocial from "../Components/Social/SamarthSocial";
import Footer from "../Components/Footer";
import AthleteInfo from "../Components/AthleteInfo";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

import samarth from "../images/AtheletePages/samarth.png";
import SamarthBio from "../Components/Bio/SamarthBio";
import AthleteLiveData from "../Components/AthleteLiveData";

const SAMARTH_FEED =
  "https://cdn.curator.io/published/909eb93e-5ca5-4143-b4dc-32073e604857.js";

class Samarth extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="Dr. Amit Samarth" />
        <AthleteInfo name="Dr. Amit Samarth" img={samarth} bio={SamarthBio} />
        <AthleteLiveData id="00001" isHome={false} feedID={SAMARTH_FEED} feedName="amit"/>
        <SamarthSocial />
        <Footer />
      </Parallax>
    );
  }
}

export default Samarth;
