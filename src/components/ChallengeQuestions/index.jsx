import React from "react";

import tick from "../../assets/icons/media/tick.png";
import cross from "../../assets/icons/media/cross.png";

import "./styles.scss";

export default function ChallengeQuestions() {
  return (
    <div className="quiz-questions-wrapper">
      <p>
        Does this sound true , or do you smell BS? Click below or swipe L for
        BS/ R if it's true.{" "}
      </p>
      <div className="control-images">
        <img src={tick} alt="tick img" />
        <img src={cross} alt="cross img" />
      </div>
    </div>
  );
}
