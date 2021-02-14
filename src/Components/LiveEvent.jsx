import React, { Component } from "react";

import "../css/Styles.css";

import MapBox from "./Map/MapBox";
import CuratorFeed from "./CuratorFeed";

class LiveEvent extends Component {
  render() {
    return (
      <div className="Live-Event row">
        <div className="col Live-Event-Map-Box">
          {/* USE MAPBOX FOR ALL EVENTS AFTER RWANDA */}
          <MapBox
            token="pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA"
            mapStyle="mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n"
            latitude={21}
            longitude={79}
            markLat={this.props.athleteLat !== undefined ? this.props.athleteLat : undefined}
            markLong={this.props.athleteLong !== undefined ? this.props.athleteLong : undefined}
            zoom={4.2}
          />

          {/* v REMOVE GARMIN MAP WHEN RWANDA IS FINISHED v */}
          {/* <div className="Garmin-Map">
            <iframe
              src="https://share.garmin.com/share/lespoulettesfrites"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              width="100%"
              height="760"
            ></iframe>
          </div> */}
          {/* ^ REMOVE GARMIN MAP WHEN RWANDA IS FINISHED ^ */}
        </div>
        <div className="col Live-Event-Feed-Box">
          <CuratorFeed feedID={this.props.feedID} feedName={this.props.feedName} />
        </div>
      </div>
    );
  }
}

export default LiveEvent;
