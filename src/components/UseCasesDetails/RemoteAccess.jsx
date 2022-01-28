import React from "react";
import "./details.scss";
import "./info.scss";

import topBorder from "../../assets/icons/media/Vector2.png";
import bottomBorder from "../../assets/icons/media/Vector3.png";
import document from "../../assets/icons/media/document.png";
import vector1 from "../../assets/icons/media/Vector1.png";
import leftChevron from "../../assets/icons/media/left-chevron.png";

const SecureRemoteAccess = ({ setUseCaseID }) => {
  return (
    <>
      <div className="details-section-wrapper">
        <div className="details-container">
          <img src={vector1} className="border_image" alt="left border img" />
          <div className="detailsTextContainer">
            <h3 className="case-type">
              Secure Remote <br />
              Access
            </h3>
            <p className="primary-text-1">
              Work-from-anywhere (WFA) is here to stay. Appgate customers said
              remote working jumped from 14% pre-COVID to nearly 80% at its
              peak. They expect about 56% of people to continue to WFA in the
              future.
            </p>
            <p className="primary-text-2">
              However, as WFA expands, so too does the attack surface.
              <strong> Human error causes up to 88% of breaches. </strong>{" "}
              Legacy systems and old remote access solutions, like VPNs, are
              complicated to administer and don’t adequately verify
              people—potentially leading to wide-open networks. Internet-exposed
              VPN ports increase your scannable attack surface, plus VPN
              switching, latency and unreliability are a major hassle for users.
            </p>
            <h6>Change the dynamic with Appgate SDP</h6>
            <p className="primary-text-2">
              Customers rated Appgate SDP 8.8 on a scale of 10 as technology
              most strategic to hybrid workplaces. It provides consistent,
              leastprivilege access to resources, regardless of
              location—including on-premise, cloud and hybrid. Legacy security
              tech can’t.
            </p>
            <p className="hr-1" />
            <p className="secondary-text-1">
              Continuously authenticates users based on contextual risk <br />
              and device posture
            </p>
            <p className="hr-2" />
            <p className="secondary-text-2">
              Cloaks open ports to stop attackers from moving laterally.
            </p>
            <p className="hr-3" />
            <p className="secondary-text-3">
              Reduces time to provision and manage users
            </p>
            <p className="hr-4" />
            <p className="secondary-text-4">
              Scales as needed, without bandwidth constraints
            </p>
            <p className="hr-5" />
            <p className="secondary-text-5">
              Integrates with existing security tools
            </p>
          </div>
        </div>
        <MoreInformation />
      </div>
      <div className="back-cta" onClick={() => setUseCaseID(null)}>
        <img
          src={leftChevron}
          alt="left chevron img"
          className="left-chevron-image"
        />
        <p>USE CASES</p>
      </div>
    </>
  );
};

export default SecureRemoteAccess;

const MoreInformation = () => {
  return (
    <div className="info-wrapper">
      <img src={topBorder} alt="top border img" className="top-border" />
      <div className="text-container">
        <h4>Want More Info</h4>
        <p>
          We will send more detailed <br /> info about Appgate SDP , <br />
          including :
        </p>

        <div className="bullet-1">
          <img src={document} alt="document img" />
          <p>VPN to ZTNA Migration Guide </p>
        </div>
        <div className="bullet-2">
          <img src={document} alt="document img" />
          <p>Nemertes Real Economic Value Report </p>
        </div>
        <div className="bullet-3">
          <img src={document} alt="document img" />
          <p>Forrester 2021 Zero Trust Network Access New Wave</p>
        </div>
      </div>
      <button className="email-button">Get it Emailed To You</button>
      <img src={bottomBorder} alt="bottom border" className="bottom-border" />
    </div>
  );
};
