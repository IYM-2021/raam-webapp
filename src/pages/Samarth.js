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
// import MapBox from "../Components/Map/MapBox";

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
        {/* <MapBox
            token="pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA"
            mapStyle="mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n"
            latitude={21}
            longitude={79}
            markLat={this.props.athleteLat !== undefined ? this.props.athleteLat : undefined}
            markLong={this.props.athleteLong !== undefined ? this.props.athleteLong : undefined}
            zoom={4.2}
          /> */}
        <SamarthSocial />
        <Footer />
      </Parallax>
    );
  }
}

export default Samarth;
