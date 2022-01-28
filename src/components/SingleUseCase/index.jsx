import React, { useState } from "react";

import "./styles.scss";

import right from "../../assets/icons/media/right2.png";
import topBorder from "../../assets/icons/media/border-right.png";
import bottomBorder from "../../assets/icons/media/left-border.png";

const UseCases = ({ setUseCaseID, useCaseID }) => {
  return (
    <div className="use-cases-container">
      <div className={`use-case slide-left-1 ${useCaseID && "slide-right-1"}`}>
        <SingleUseCase
          heading={"Secured Remote Access"}
          text={
            "Work-form-Anywhere is here to stay. Find out how you can enable fast, highly secure remote access for your remote workforce."
          }
          id={1}
          setUseCaseID={setUseCaseID}
        />
      </div>
      <div className={`use-case slide-left-2 ${useCaseID && "slide-right-2"}`}>
        <SingleUseCase
          heading={"Hybrid Enterprise"}
          text={
            "Discuss how you can apply Zero Trust to provide users and device with simple secure, anytime-anywhere access to cloud recources."
          }
          id={2}
          setUseCaseID={setUseCaseID}
        />
      </div>
      <div className={`use-case slide-left-3 ${useCaseID && "slide-right-3"}`}>
        <SingleUseCase
          heading={"Hybrid Cloud"}
          text={
            "Explore how Zero Trust principles, combined with right security architechture, can facilitate your hybrid cloud strategies."
          }
          id={3}
          setUseCaseID={setUseCaseID}
        />
      </div>
    </div>
  );
};

export default UseCases;

const SingleUseCase = ({ heading, text, id, setUseCaseID }) => {
  const [animateOut, setAnimateOut] = useState(false);

  return (
    <div className={`${!animateOut && "fade-out"}`}>
      <img src={topBorder} alt="top border img" className="top-border-image" />
      <h4>{heading}</h4>
      <p>{text}</p>
      <div
        className="button-container"
        onClick={() => {
          setAnimateOut(true);
          setUseCaseID(id);
        }}
      >
        <p>Learn More</p>
        <img src={right} alt="right arrow imag" />
      </div>
      <img
        src={bottomBorder}
        alt="bottom border img"
        className="bottom-border-image"
      />
    </div>
  );
};
