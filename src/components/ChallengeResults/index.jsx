import React from "react";

import "./styles.scss";

import topBorder from "../../assets/icons/media/done1.png";
import bottomBorder from "../../assets/icons/media/done2.png";
import check from "../../assets/icons/media/check.png";
import close from "../../assets/icons/media/close-remove.png";

export default function ChallengeResults({ challengeQuestion, userAnswers }) {
  return (
    <div className="results-screen-wrapper">
      <div className="card-container">
        <img
          src={topBorder}
          alt="top border img"
          className="results-top-border"
        />
        <div className="results-header">
          <h2>You're Done!</h2>
          <p>
            Thanks for taking Zero-Bs Challenge! Pretty easy, right? Flag one of
            our people in Appgate t-shirts, and they'll show you how to claim
            your swag!
          </p>
        </div>
        <img
          src={bottomBorder}
          alt="bottom border img"
          className="results-bottom-border"
        />
      </div>
      <div className="result-card-wrapper">
        {challengeQuestion.map(
          ({ id, question, justification, answer }, index) => {
            return (
              <ResultCard
                key={index}
                statement={question}
                answer={answer}
                justification={justification}
                userAnswer={userAnswers[index]}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

function ResultCard({ answer, statement, justification, userAnswer }) {
  return (
    <div className="result-card">
      <p>{answer ? "Zero BS" : "BS"}</p>
      <img
        src={answer === userAnswer ? check : close}
        alt="choice img"
        className="score-img"
      />
      <h4 className="question">"{statement}"</h4>
      <h4 className="answer">{justification.slice(0, 300)}</h4>
    </div>
  );
}
