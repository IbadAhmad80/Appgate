import React, { useState } from "react";

import "./styles.scss";

import right from "../../assets/icons/media/right2.png";
import topBorder from "../../assets/icons/media/border-right.png";
import bottomBorder from "../../assets/icons/media/left-border.png";

import { casesText } from "./Text";

const UseCases = ({ setUseCaseID, useCaseID }) => {
  return (
    <div className="use-cases-container">
      {casesText.map(({ heading, text, id }) => {
        return (
          <div
            key={text}
            className={`use-case slide-left-${id} ${
              useCaseID && `slide-right-${id}`
            }`}
          >
            <SingleUseCase
              heading={heading}
              text={text}
              id={id}
              setUseCaseID={setUseCaseID}
            />
          </div>
        );
      })}
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
