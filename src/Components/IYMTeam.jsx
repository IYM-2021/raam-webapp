import React, { Component } from "react";
import "../css/Styles.css";
import DB from "../images/Team Pics/DougBarton.jpg";
import BL from "../images/Team Pics/Benjamin L.jpg";
import DR from "../images/Team Pics/Douglas R.jpg";
import JM from "../images/Team Pics/Jessica Miyake.png";
import MW from "../images/Team Pics/Matt Wildman.jpg";
import RN from "../images/Team Pics/Reed Nelson.jpg";
import SW from "../images/Team Pics/Steve Wangen.jpg";
import TM from "../images/Team Pics/Ted M.jpg";
import TH from "../images/Team Pics/Trisha Hernandez.jpg";
import RW from "../images/Team Pics/RyanW.jpg";
import PL from "../images/Team Pics/placeholder.png";
import CL from "../images/Team Pics/ChrisLewis.jpg";
import AC from "../images/Team Pics/AdamC.jpg";
import CD from "../images/Team Pics/CarsonD.jpg";
import IH from "../images/Team Pics/IvanHu.jpg";

class IYMTeam extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="Team-Header">
          <h2>The Team</h2>
        </div>
        <div className="Team">
          <div className="row">
            <div className="col-sm-4">
              <img className="Team-Picture" src={DB} alt="DB" />
              <div className="Team-Content">
                <p className="Team-Name">Doug Barton</p>
                <p className="Team-Description">
                  Director of E-Business Consortium at UW-Madison
                </p>
                <a
                  className="LinkedIn-Link"
                  href="https://www.linkedin.com/in/bartondoug/"
                >
                  Linkedin
                </a>
                <br></br>
              </div>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={DR} alt="DR" />
              <div className="Team-Content">
                <p className="Team-Name">Douglas Robertson</p>
                <p className="Team-Description">Aeronautical Data Analyst</p>
                <a
                  className="LinkedIn-Link"
                  href="https://www.linkedin.com/in/dbrobert/"
                >
                  Linkedin
                </a>
                <br></br>
              </div>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={MW} alt="MW" />
              <div className="Team-Content">
                <p className="Team-Name">Matt Wildman</p>
                <p className="Team-Description">
                  Computer Science at UW-Madison | Undergraduate Project Lab
                  Coordinator
                </p>
                <a
                  className="LinkedIn-Link"
                  href="https://www.linkedin.com/in/matt-wildman/"
                >
                  Linkedin
                </a>
                <br></br>
              </div>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={TM} alt="TM" />
              <div className="Team-Content">
                <p className="Team-Name">Ted Morris</p>
                <p className="Team-Description">
                  CDO and Co-Founder at Klarrio US
                </p>
                <a
                  className="LinkedIn-Link"
                  href="https://www.linkedin.com/in/tedmorris3/"
                >
                  Linkedin
                </a>
                <br></br>
              </div>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={RW} alt="RW" />
              <div className="Team-Content">
                <p className="Team-Name">Ryan West</p>
                <p className="Team-Description">
                  Co-Founder, Head of Applied Science at Idio Analytics
                </p>
                <a
                  className="LinkedIn-Link"
                  href="https://www.linkedin.com/in/ryan-west-88187821/"
                >
                  Linkedin
                </a>
                <br></br>
              </div>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={CL} alt="CL" />
              <div className="Team-Content">
                <p className="Team-Name">Chris Lewis</p>
                <p className="Team-Description">
                  Senior Product Manager at Dell
                </p>
                <a
                  className="LinkedIn-Link"
                  href="https://www.linkedin.com/in/chris-lewis-1007248/"
                >
                  Linkedin
                </a>
                <br></br>
              </div>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={AC} alt="AC" />
              <div className="Team-Content">
                <p className="Team-Name">Adam Converse</p>
                <p className="Team-Description">
                  Senior Software Engineer at Zendesk
                </p>
                <a
                  className="LinkedIn-Link"
                  href="https://www.linkedin.com/in/adam-converse-498667a4/"
                >
                  Linkedin
                </a>
                <br></br>
              </div>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={RN} alt="RN" />
              <div className="Team-Content">
                <p className="Team-Name">Reed Nelson</p>
                <p className="Team-Description">
                  Computer Science at UW-Madison | Undergraduate Project Lab
                  Coordinator
                </p>
                <a
                  className="LinkedIn-Link"
                  href="https://www.linkedin.com/in/reed-nelson-a24ba2196?trk=public_profile_browsemap_profile-result-card_result-card_full-click"
                >
                  Linkedin
                </a>
                <br></br>
              </div>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={JM} alt="JM" />
              <div className="Team-Content">
                <p className="Team-Name">Jessica Miyake</p>
                <p className="Team-Description">
                  UW-Madison Computer Science and Digital Studies Alumni
                </p>
                <a
                  className="LinkedIn-Link"
                  href="https://www.linkedin.com/in/jessicamiyake/"
                >
                  {" "}
                  Linkedin{" "}
                </a>
                <br></br>
              </div>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={CD} alt="CD" />
              <div className="Team-Content">
                <p className="Team-Name">Carson Drury</p>
                <p className="Team-Description">
                  Computer Science at UW-Madison | Undergraduate Project Lab
                  Coordinator
                </p>
                <a
                  className="LinkedIn-Link"
                  href="https://www.linkedin.com/in/carson-drury/"
                >
                  Linkedin
                </a>
                <br></br>
              </div>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={IH} alt="IH" />
              <div className="Team-Content">
                <p className="Team-Name">Ivan Hu</p>
                <p className="Team-Description">
                  Computer Science Student at UW-Madison
                </p>
                <a
                  className="LinkedIn-Link"
                  href="https://www.linkedin.com/in/ivan-hu-3a8688205/"
                >
                  Linkedin
                </a>
                <br></br>
              </div>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={SW} alt="SW" />
              <div className="Team-Content">
                <p className="Team-Name">Steve Wangen</p>
                <p className="Team-Description">
                  Data Scientist at American Family Insurance Data Science
                  Institute
                </p>
                <a
                  className="LinkedIn-Link"
                  href="https://www.linkedin.com/in/steven-wangen/"
                >
                  Linkedin
                </a>
                <br></br>
              </div>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={BL} alt="BL" />
              <div className="Team-Content">
                <p className="Team-Name">Benjamin Lewis</p>
                <p className="Team-Description">
                  Computer Science Student at UW-Madison
                </p>
                <a
                  className="LinkedIn-Link"
                  href="https://www.linkedin.com/in/bslewis/"
                >
                  Linkedin
                </a>
                <br></br>
              </div>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={TH} alt="TH" />
              <div className="Team-Content">
                <p className="Team-Name">Trisha Hernandez</p>
                <p className="Team-Description">
                  Communication Program Coordinator at Johns Hopkins University
                </p>
                <a
                  className="LinkedIn-Link"
                  href="https://www.linkedin.com/in/patricia-hernandez-phd-b421128/"
                >
                  Linkedin
                </a>
                <br></br>
              </div>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={PL} alt="PL" />
              <div className="Team-Content">
                <p className="Team-Name">Anush Ram Reddy K.</p>
                <p className="Team-Description">
                  Computer Science Student at UW-Madison
                </p>
                <a className="LinkedIn-Link" href="insert Linkedin">
                  Linkedin
                </a>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IYMTeam;
