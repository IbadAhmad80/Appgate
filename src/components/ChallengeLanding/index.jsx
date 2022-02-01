import React, { useState } from "react";

import "./styles.scss";

import bullArt from "../../assets/icons/media/bull-art.png";
import topBorder from "../../assets/icons/media/top@3x.png";
import bottomBorder from "../../assets/icons/media/bottom@3x.png";

export default function LandingScreen({ quizOpen, isOuizOpen }) {
  return (
    <div className={`landing-screen-wrapper  ${quizOpen && "fade-out-screen"}`}>
      <div className="card-container">
        <img
          src={topBorder}
          alt="top border img"
          className="challenge-top-border"
        />
        <div className="card-body">
          <h2>Zero BS Challenge</h2>
          <p>
            A lot of BS flying around when it comes to talking about Zero Trust.
            Can you suss out the brass tarcks from the BS?
          </p>
          <button onClick={() => isOuizOpen(true)}>Start challenge</button>
        </div>

        <img
          src={bottomBorder}
          alt="bottom border img"
          className="challenge-bottom-border"
        />
      </div>
      <img src={bullArt} alt="bull img" className="bull-image" />
    </div>
  );
}
