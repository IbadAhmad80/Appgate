import React, { useState } from "react";
import "./details.scss";
import "./info.scss";

import topBorder from "../../assets/icons/media/Vector2.png";
import bottomBorder from "../../assets/icons/media/Vector3.png";
import document from "../../assets/icons/media/document.png";
import vector1 from "../../assets/icons/media/Vector1.png";
import leftChevron from "../../assets/icons/media/left-chevron.png";
import Modal from "../Modal/index";

const HybridCloud = ({ setUseCaseID, useCaseID }) => {
  const [closeModal, isCloseModal] = useState(true);
  return (
    <>
      <div
        className={`details-section-wrapper ${
          !useCaseID && "fade-out-details-section"
        }`}
      >
        <div className="details-container">
          <img src={vector1} className="border_image" alt="left border img" />
          <div className="details-text-container">
            <h3 className="case-type">Hybrid Cloud</h3>
            <div className="text-body-container">
              <p className="primary-text-1">
                Cloud adoption will very soon be the norm. IDC predicts
                <strong>
                  90% of new enterprise applications will be cloud-native by
                  2022.
                </strong>
                However, the cloud's inherent dynamism makes policy management
                more difficult. The complexity of managing network and
                connectivity tools across hybrid and multi-cloud environments
                can introduce unexpected vulnerabilities—like the likelihood of
                human error. Older, legacy tools or inexperienced developers can
                amplify this effect.
              </p>
              <p className="primary-text-2">
                In order to simplify operations, administrators often have to
                sacrifice security for convenience and expediency—leaving your
                cloud resources easily discoverable by those with malign intent.
              </p>
              <h6>Make the Cloud work for you with Appgate SDP</h6>
              <p className="primary-text-2">
                Customers rated Appgate SDP 8.8 on a scale of 10 as technology
                most strategic to hybrid workplaces. It provides consistent,
                least-privileged access to resources, regardless of
                location—including on-premise, cloud and hybrid. Legacy security
                tech can’t.
              </p>
              <p className="hr-1" />
              <p className="secondary-text-1">
                Unifies secure access for all users, devices and disparate
                resources spanning multi-cloud, hybrid cloud and microservices
              </p>
              <p className="hr-2" />
              <p className="secondary-text-2">
                Makes cloud resources invisible by cloaking open ports
              </p>
              <p className="hr-3" />
              <p className="secondary-text-3">
                Continuously authenticates users based on contextual risk and
                device posture
              </p>
              <p className="hr-4" />
              <p className="secondary-text-4">
                Secures access between interconnected resources, containers and
                microservices
              </p>
              <p className="hr-5" />
              <p className="secondary-text-5">
                Delivers fast, secure and concurrent connections from any user
                to multiple resources simultaneously
              </p>

              <p className="hr-6" />
              <p className="secondary-text-6">
                Enables API-driven automation within your CI/CD workflows
              </p>

              <p className="hr-7" />
              <p className="secondary-text-7">
                Removes the burden and complexity of securely interconnecting
                heterogeneous, geographically dispersed cloud environments
              </p>
            </div>
          </div>
        </div>
        <MoreInformation useCaseID={useCaseID} isCloseModal={isCloseModal} />
      </div>
      <div className="back-cta" onClick={() => setUseCaseID(null)}>
        <img
          src={leftChevron}
          alt="left chevron img"
          className="left-chevron-image"
        />
        <p>USE CASES</p>
      </div>
      <Modal isCloseModal={() => isCloseModal(true)} closeModal={closeModal} />
    </>
  );
};

export default HybridCloud;

const MoreInformation = ({ useCaseID, isCloseModal }) => {
  return (
    <div className={`info-wrapper ${!useCaseID && "fade-out-info-wrapper"}`}>
      <img src={topBorder} alt="top border img" className="top-border" />
      <div className="text-container">
        <h4>Want More Info</h4>
        <p>
          We will send more detailed <br /> info about Appgate SDP , <br />
          including :
        </p>

        <div className="bullet-1">
          <img src={document} alt="document img" />
          <a
            href="https://www.google.com/url?q=https://www.scmagazine.com/cybercast/unleash-and-secure-the-cloud-with-zero-trust-access&sa=D&source=docs&ust=1643371985181629&usg=AOvVaw0XpbG4rTcfUmFh_o__YXCq"
            target="_blank"
            rel="noreferrer"
          >
            ESG Webinar Replay – Unleash and Secure the Cloud with Zero Trust
            Access{" "}
          </a>
        </div>
        <div className="bullet-2">
          <img src={document} alt="document img" />
          <p>Zero Trust Access for Cloud Solution Brief (coming soon)</p>
        </div>
        <div className="bullet-3">
          <img src={document} alt="document img" />
          <p>Blog- ZT for Cloud- GFCA (posted)</p>
        </div>

        <div className="bullet-4">
          <img src={document} alt="document img" />
          <p>
            Blog- Kurt- How (Zero Trust Network Access) ZTNA will revolutionize
            DevSecOps (drafted)
          </p>
        </div>

        <div className="bullet-5">
          <img src={document} alt="document img" />
          <p>Podcast- 1/10- ZT for Cloud- Colby</p>
        </div>

        <div className="bullet-6">
          <img src={document} alt="document img" />
          <p>Podcast- 1/27- Cloud- crawl, walk, run- JimA/Friedrich</p>
        </div>
      </div>
      <button className="email-button" onClick={() => isCloseModal(false)}>
        Get it Emailed To You
      </button>
      <img src={bottomBorder} alt="bottom border" className="bottom-border" />
    </div>
  );
};
