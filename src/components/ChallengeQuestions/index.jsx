import React, { useState, useEffect } from "react";

import tickk from "../../assets/icons/media/tick.png";
import cross from "../../assets/icons/media/cross.png";

import "./styles.scss";

import QuizCard from "../QuizCards";
import { questions } from "./Text";
import ChallengeResults from "../ChallengeResults/index";

export default function ChallengeQuestions() {
  const [challengeQuestion, setChallengeQuestions] = useState([]);
  const [cardsCounter, setCardsCounter] = useState(0);
  const [showResults, isShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    var randomQuestions = [];
    while (randomQuestions.length < 4) {
      var r = Math.floor(Math.random() * 14) + 1;
      if (randomQuestions.indexOf(r) === -1) randomQuestions.push(questions[r]);
    }
    setChallengeQuestions(randomQuestions);
  }, []);

  useEffect(() => {
    if (cardsCounter === 4) {
      setTimeout(() => {
        isShowResults(true);
      }, 1000);
    }
  }, [cardsCounter]);

  const handleUserChoice = (type) => {
    const [el] = document.getElementsByClassName(`card-${cardsCounter + 1}`);
    removeScaling(el);
    if (type === "cross") {
      el?.classList.add("hide-wrong-choice");
      setUserAnswers((prevAnswers) => [...prevAnswers, false]);
      document
        .querySelector(
          `.card-${
            cardsCounter + 1
          } .quiz-card-container .choice-images .bs-image`
        )
        ?.classList.add("fade-in");
    } else {
      el?.classList.add("hide-correct-choice");
      setUserAnswers((prevAnswers) => [...prevAnswers, true]);
      document
        .querySelector(
          `.card-${
            cardsCounter + 1
          } .quiz-card-container .choice-images .no-bs-image`
        )
        ?.classList.add("fade-in");
    }

    setCardsCounter(cardsCounter + 1);
    scaleUpCards(cardsCounter + 1);
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
      card4?.classList.remove("scale-to-90");
      card4?.classList.add("scale-to-100");
    }
  };

  const removeScaling = (el) => {
    el?.classList.remove("scale-to-100");
    el?.classList.remove("scale-to-90");
    el?.classList.remove("scale-to-80");
  };

  if (showResults)
    return (
      <ChallengeResults
        challengeQuestion={challengeQuestion}
        userAnswers={userAnswers}
      />
    );

  return (
    <>
      <div className="quiz-questions-wrapper">
        <div className="quiz-cards-wrapper">
          {challengeQuestion?.map(({ id, question }, index) => {
            return (
              <div className={`card-${index + 1}`} key={index}>
                <QuizCard id={index + 1} statementText={question} />
              </div>
            );
          })}
        </div>
        <div className="control-container">
          <p>
            Does this sound true , or do you smell BS? Click below or swipe L
            for BS/ R if it's true.
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
      </div>
    </>
  );
}
