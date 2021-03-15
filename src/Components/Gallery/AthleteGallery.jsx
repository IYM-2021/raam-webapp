import React, { Component } from "react";
import GalleryCard from "./GalleryCard";
import "../../css/Styles.css";

import samarth from "../../images/athletes/samarth.jpeg";
import haase from "../../images/athletes/haase.png";
import macdonald from "../../images/athletes/macdonald.PNG";
import cross from "../../images/athletes/cross.jpg";
import fraissard from "../../images/athletes/fraissard.PNG";
import hering from "../../images/athletes/hering.jpg";
import baetz from "../../images/athletes/baetz.jpg";

class AthleteGallery extends Component {
  render() {
    return (
      <div className="Event-Gallery">
        <h2>Athletes</h2>
        <div className="row">
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="Sandrine Fraissard"
              event="Journey Around Rwanda"
              img={fraissard}
              link="/Fraissard"
            ></GalleryCard>
          </div>
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="Dr. Amit Samarth"
              event="Ride Across India"
              img={samarth}
              link="/Samarth"
            ></GalleryCard>
          </div>
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="Dave Haase"
              event="Ultracycling"
              img={haase}
              link="/Haase"
            ></GalleryCard>
          </div>
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="James MacDonald"
              event="Ultracycling"
              img={macdonald}
              link="/MacDonald"
            ></GalleryCard>
          </div>
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="Julia Cross"
              event="Dogsledding"
              img={cross}
              link="/Cross"
            ></GalleryCard>
          </div>
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="Jackie Hering"
              event="Snowshoe Running"
              img={hering}
              link="/Hering"
            ></GalleryCard>
          </div>
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="James Baetz"
              event="Backyard Ultra Marathon"
              img={baetz}
              link="/Baetz"
            ></GalleryCard>
          </div>
        </div>
      </div>
    );
  }
}

export default AthleteGallery;
