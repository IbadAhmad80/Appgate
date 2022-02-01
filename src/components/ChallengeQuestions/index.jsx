import React, { useState } from "react";

import tickk from "../../assets/icons/media/tick.png";
import cross from "../../assets/icons/media/cross.png";

import "./styles.scss";
import QuizCard from "../QuizCards";
import { questionText } from "./Text";

export default function ChallengeQuestions() {
  const [cardsCounter, setCardsCounter] = useState(0);

  const handleUserChoice = (type) => {
    const [el] = document.getElementsByClassName(`card-${cardsCounter + 1}`);
    if (type === "cross") el?.classList.add("hide-wrong-choice");
    else el?.classList.add("hide-correct-choice");
    // scaleUpCards(cardsCounter + 1);
    setCardsCounter(cardsCounter + 1);
  };

  const scaleUpCards = (counter) => {
    const [card2] = document.getElementsByClassName(`card-2`);
    const [card3] = document.getElementsByClassName(`card-3`);
    const [card4] = document.getElementsByClassName(`card-4`);

    if (counter === 1) {
      card2?.classList.add("scale-to-100");
      card3?.classList.add("scale-to-90");
      card4?.classList.add("scale-to-80");
    } else if (counter === 2) {
      card3?.classList.remove("scale-to-90");
      card3?.classList.add("scale-to-100");
      card4?.classList.remove("scale-to-80");
      card4?.classList.add("scale-to-90");
    } else if (counter === 3) {
      card3?.classList.remove("scale-to-90");
      card4?.classList.add("scale-to-100");
    }
  };

  return (
    <div className="quiz-questions-wrapper">
      <div className="quiz-cards-wrapper">
        {questionText.map(({ id, text }, index) => {
          return (
            <div className={`card-${id}`} key={index + 1}>
              <QuizCard id={id} statementText={text} />
            </div>
          );
        })}
      </div>
      <p>
        Does this sound true , or do you smell BS? Click below or swipe L for
        BS/ R if it's true.{" "}
      </p>
      <div className="control-images">
        <img
          src={cross}
          alt="cross img"
          onClick={() => handleUserChoice("cross")}
        />
        <img
          src={tickk}
          alt="tick img"
          onClick={() => handleUserChoice("tick")}
        />
      </div>
    </div>
  );
}
