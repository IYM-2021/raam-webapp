import React, { Component } from "react";
import NavBar from "../Components/NavBar/NavBar";
import PageHeader from "../Components/Header";

import "../css/Styles.css";
import Footer from "../Components/Footer";
import AthleteInfo from "../Components/AthleteInfo";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

import baetz from "../images/AtheletePages/baetz.jpg";
import BaetzBio from "../Components/Bio/BaetzBio";
// import BaetzSocial from "../Components/Social/BaetzSocial";


class Baetz extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="James Baetz" />
        <AthleteInfo name="James Baetz" img={baetz} bio={BaetzBio} />

        {/* <BaetzSocial /> */}
        <Footer />
      </Parallax>
    );
  }
}
export default Baetz;
