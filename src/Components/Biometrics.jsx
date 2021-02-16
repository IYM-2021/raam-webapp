import React, { Component } from "react";
import "../css/Styles.css";

function round(num) {
  return Math.round(num * 100) / 100;
}

class Biometrics extends Component {
  render() {
    return (
      <div>
        <h2>Live Biometrics</h2>
        <div className="timeStamp" style={{textAlign: "center"}}>As of {this.props.ts}</div>
        <div className="row">
          <div className="col">
            <div className="Live-Data">
              <div className="Live-Data-Cell Item-1">
                {this.props.hr !== undefined
                  ? this.props.hr + " bpm"
                  : "No data"}
                <div className="Live-Data-Cell-Name"> {"- Heart Rate"}</div>
                <div className="Live-Data-Cell-Description">
                  {
                    "The rate of heartbeat measured by the number of contractions per minute."
                  }
                </div>
              </div>
              <div className="Live-Data-Cell Item-2">
                {this.props.speed !== undefined
                  ? round(this.props.speed * 3.6) + " km/hr"
                  : "No data"}
                <div className="Live-Data-Cell-Name"> {"- Speed"}</div>
                <div className="Live-Data-Cell-Description">
                  {
                    "The speed of a cyclist ranges wildly based on terrain. The average might be 22-26 km/hr over long distances."
                  }
                </div>
              </div>
              <div className="Live-Data-Cell Item-3">
                {this.props.cadence !== undefined
                  ? this.props.cadence + " rpm"
                  : "No data"}
                <div className="Live-Data-Cell-Name"> {"- Cadence"}</div>
                <div className="Live-Data-Cell-Description">
                  {"Leg speed is measured in revolutions per minute."}
                </div>
              </div>
              <div className="Live-Data-Cell Item-4">
                {this.props.power !== undefined
                  ? this.props.power + " W"
                  : "No data"}
                <div className="Live-Data-Cell-Name"> {"- Power Output"}</div>
                <div className="Live-Data-Cell-Description">
                  {
                    "A snapshot of work rate at any given moment measured by a pedal-based power meter."
                  }
                </div>
              </div>
              <div className="Live-Data-Cell Item-5">
                {this.props.altitude !== undefined
                  ? round(this.props.altitude) + " m"
                  : "No data"}
                <div className="Live-Data-Cell-Name"> {"- Altitude"}</div>
                <div className="Live-Data-Cell-Description">
                  {
                    "High values can be an impediment to oxygen content of blood fueling muscles and work."
                  }
                </div>
              </div>
              <div className="Live-Data-Cell Item-6">
                {this.props.temp !== undefined
                  ? round(this.props.temp) + "\u00B0 C"
                  : "No data"}
                <div className="Live-Data-Cell-Name">
                  {" "}
                  {"- Core Temperature"}
                </div>
                <div className="Live-Data-Cell-Description">
                  {
                    "CORE is the only wearable non-invasive, continuous, and accurate Core Body Temp monitor to help prevent serious heat stress injury."
                  }
                </div>
              </div>
              <div className="Live-Data-Cell Item-7">
                {this.props.mo2 !== undefined
                  ? this.props.mo2 + "%"
                  : "No data"}
                <div className="Live-Data-Cell-Name"> {"- Muscle Oxygen"}</div>
                <div className="Live-Data-Cell-Description">
                  {
                    "Moxy tech uses near-infrared wavelength spectrum to measure muscle oxygenation in muscle tissue."
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Biometrics;
