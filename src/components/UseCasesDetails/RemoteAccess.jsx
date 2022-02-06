import React, { useState } from "react";

import "./details.scss";
import "./info.scss";

import topBorder from "../../assets/icons/media/Vector2.png";
import bottomBorder from "../../assets/icons/media/Vector3.png";
import document from "../../assets/icons/media/document.png";
import vector1 from "../../assets/icons/media/Vector1.png";
import leftChevron from "../../assets/icons/media/left-chevron.png";
import Modal from "../Modal";
import { casesContent } from "./Text";

const RemoteAccess = ({ setUseCaseID, useCaseID }) => {
  const [closeModal, isCloseModal] = useState(true);

  return (
    <>
      <div className="details-section-wrapper">
        <div className="details-container">
          <img src={vector1} className="border_image" alt="left border img" />
          <div className="details-text-container">
            <h3 className="case-type">
              {casesContent[useCaseID - 1].caseType}
            </h3>
            <div className="text-body-container">
              {casesContent[useCaseID - 1]?.primaryTexts
                ?.slice(0, 2)
                .map((text, index) => {
                  return <p className={`primary-text-${index + 1}`}>{text}</p>;
                })}

              <h6>{casesContent[useCaseID - 1]?.catchLine}</h6>
              <p className="primary-text-2">
                {casesContent[useCaseID - 1].primaryTexts[2]}
              </p>

              {casesContent[useCaseID - 1]?.secondaryTexts.map(
                (text, index) => {
                  return (
                    <>
                      <p className={`hr-${index + 1}`}></p>{" "}
                      <p className={`secondary-text-${index + 1}`}>{text}</p>{" "}
                    </>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <MoreInformation isCloseModal={isCloseModal} />
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

export default RemoteAccess;

const MoreInformation = ({ isCloseModal }) => {
  return (
    <div className="info-wrapper">
      <img src={topBorder} alt="top border img" className="top-border" />
      <div className="text-container">
        <h4>Want More Info</h4>
        <p className="info-sub-text">
          We will send more detailed info about Appgate SDP , including :
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
      <button className="email-button" onClick={() => isCloseModal(false)}>
        Get it Emailed To You
      </button>
      <img src={bottomBorder} alt="bottom border" className="bottom-border" />
    </div>
  );
};
