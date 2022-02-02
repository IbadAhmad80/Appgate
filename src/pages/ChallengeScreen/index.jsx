import React, { useState } from "react";

import LandingScreen from "../../components/ChallengeLanding";

import "./styles.scss";
import SideDrawer from "../../components/Sidebar/index";

import ani_background from "../../assets/ani_background.mp4";
import ChallengeQuestions from "../../components/ChallengeQuestions";

export default function BSChallenge() {
  const [quizOpen, isOuizOpen] = useState(false);

  return (
    <div className="challenge-screen-wrapper">
      <div className="layout-flex">
        <div className="sidebar-flex">
          <SideDrawer />
        </div>
        <div className="content-flex">
          <video muted autoPlay loop className="use-cases-video">
            <source src={ani_background} type="video/mp4" />
          </video>
          <LandingScreen quizOpen={quizOpen} isOuizOpen={isOuizOpen} />
          {quizOpen && <ChallengeQuestions />}
        </div>
      </div>
    </div>
  );
}
