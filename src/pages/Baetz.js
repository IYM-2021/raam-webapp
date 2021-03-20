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
        <div className="Live-Event row">
        <div className="col Live-Event-Map-Box">
          <div className="Garmin-Map">
            <iframe
              title="FraissardGarminMap"
              src="https://share.garmin.com/IYM"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              width="100%"
              height="760"
            ></iframe>
          </div>
        </div>
      </div>
        {/* <BaetzSocial /> */}
        <Footer />
      </Parallax>
    );
  }
}
export default Baetz;
