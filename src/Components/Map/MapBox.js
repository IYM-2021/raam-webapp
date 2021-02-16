import React, { Component } from "react";
import { Container } from "reactstrap";
import markerPNG from "../../images/marker.png";
// import React from 'react'

import ReactMapGL, {
  Marker,
  // Popup,
  NavigationControl,
  // LinearInterpolator,
  FlyToInterpolator,
} from "react-map-gl";
import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
// import ReactMapGL from 'react-map-gl';
// import { Component } from 'react';
// import Pin from './Pin'
// 3rd-party easing functions
// import d3 from 'd3-ease';//Mapbox token
// const TOKEN =
//   "pk.eyJ1IjoibWlzbGFtNSIsImEiOiJjanVpdG5vZWoxZThsNGZwamJ4Nmxya2o0In0.19pBli659L76GrJaX0JWoA";
// const STYLE = "mapbox://styles/mislam5/cjuiyejbm6qn11gnv0e44i7qm";
// const INDIA_TOKEN =
//   "pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA";
// const INDIA_STYLE = "mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n";
//Mapbox Navigation Style
class Fanexperience extends Component {
  state = {
    viewport: {
      width: "100%",
      height: 500,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      zoom: this.props.zoom,
      bearing: 0,
      pitch: 0,
    },
  };
  _onViewportChange = (viewport) => {
    this.setState({ viewport });
  };
  _goToCyclist = () => {
    const viewport = {
      ...this.state.viewport,
      longitude: -74.1, //This is be the coordinate of the cyclist
      latitude: 40.7,
      zoom: 14,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      // transitionEasing: d3.easeCubic
    };
    this.setState({ viewport });
  };
  // mapStyle = "mapbox://styles/mislam5/cjuiyejbm6qn11gnv0e44i7qm"
  // For Dashboard access for now we will have to add /dashboardRAAMforVIPaccess to our http
  //Fanexperience will be root dir
  render() {
    return (
      <div id="mainWrapper">
        <Container className="Map d-flex flex-wrap align-items-center align-content-center">
          <ReactMapGL
            mapboxApiAccessToken={this.props.token}
            mapStyle={this.props.mapStyle}
            {...this.state.viewport}
            onViewportChange={this._onViewportChange}
          >
            {this.props.markLat !== undefined ? 
            <Marker
              latitude={this.props.markLat !== undefined ? this.props.markLat : 43}
              longitude={this.props.markLong !== undefined ? this.props.markLong : -89}
            >
              <img
                src={markerPNG}
                alt=""
              />
            </Marker>
            : <div></div>}

            <div className="nav">
              <NavigationControl
                onViewportChange={(viewport) => this.setState({ viewport })}
              />
            </div>
          </ReactMapGL>
        </Container>
      </div>
    );
  }
}
export default Fanexperience;
