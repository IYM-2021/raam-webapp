import React, { Component } from "react";
import "../css/Styles.css";
import Biometrics from "./Biometrics";
import LiveEvent from "./LiveEvent";
import MapBoxSection from "./Map/MapBoxSection";

const DEFAULT_FEED =
  "https://cdn.curator.io/published/9f9e3fe1-73a0-40c2-a822-81500b89790d.js";

class AthleteLiveData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      index: 0,
      items: [],
    };
  }

  componentDidMount() {
    this.getData();
    this.intervalID = setInterval(this.getData.bind(this), 10000);
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  getData = () => {
    console.log("Fetch data");
    fetch("https://c0hjtg8xa3.execute-api.us-west-2.amazonaws.com/dev/")
      .then((res) => res.json())
      .then(
        (result) => {
          for (var i = 0; i < result.features.length; i++) {
            if (result.features[i].properties.id === this.props.id) {
              this.setState({
                isLoaded: true,
                index: i,
                items: result.features,
              });
            }
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  render() {
    const { error, isLoaded, index, items } = this.state;
    if (error) {
      return <div className="errorMsg">ERROR</div>;
    } else if (!isLoaded) {
      return <div className="loadingMsg">Loading...</div>;
    } else if (this.props.isHome) {
      return (
        <LiveEvent
          athleteLat={items[index].geometry.coordinates[1] !== null ? items[index].geometry.coordinates[1] : undefined}
          athleteLong={items[index].geometry.coordinates[0] !== null ? items[index].geometry.coordinates[0] : undefined}
          feedID={this.props.feedID || DEFAULT_FEED}
          feedName={this.props.feedName || "default-feed"}        
        />
      );
    } else {
      return (
        <div>
          <LiveEvent
          athleteLat={items[index].geometry.coordinates[1] !== null ? items[index].geometry.coordinates[1] : undefined}
          athleteLong={items[index].geometry.coordinates[0] !== null ? items[index].geometry.coordinates[0] : undefined}
          feedID={this.props.feedID || DEFAULT_FEED}
          feedName={this.props.feedName || "default-feed"}
        />
          {items[index].properties.device.testing && !this.props.isHome ? (
            <div className="testingMsg" style={{ textAlign: "center" }}>
              This athlete's data is in the testing stage
            </div>
          ) : (
            <Biometrics
              hr={
                items[index].properties.sensors.hr !== undefined
                  ? items[index].properties.sensors.hr
                  : undefined
              }
              speed={
                items[index].properties.speed !== undefined
                  ? items[index].properties.speed
                  : undefined
              }
              cadence={
                items[index].properties.sensors.cadence !== undefined
                  ? items[index].properties.sensors.cadence
                  : undefined
              }
              power={
                items[index].properties.sensors.power !== undefined
                  ? items[index].properties.sensors.power
                  : undefined
              }
              altitude={
                items[index].properties.altitude !== undefined
                  ? items[index].properties.altitude
                  : undefined
              }
              temp={
                items[index].properties.sensors.temp !== undefined
                  ? items[index].properties.sensors.temp
                  : undefined
              }
              mo2={
                items[index].properties.sensors.mo2 !== undefined
                  ? items[index].properties.sensors.mo2.mo2Saturation
                  : undefined
              }
            />
          )}
        </div>
      );
    }
  }
}

export default AthleteLiveData;
