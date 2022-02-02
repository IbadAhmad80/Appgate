import React from "react";

import "./styles.scss";

import topBorder from "../../assets/icons/media/top@3x.png";
import bottomBorder from "../../assets/icons/media/bottom@3x.png";

import { resultCardSummary } from "./Text";

export default function ChallengeResults() {
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
        {resultCardSummary.map(({ id, question, answer }) => {
          return <ResultCard key={id} statement={question} answer={answer} />;
        })}
      </div>
    </div>
  );
}

function ResultCard({ type, answer, statement }) {
  return (
    <div className="result-card">
      <p>Zero BS</p>
      <h4 className="question">"{statement}"</h4>
      <h4 className="answer">{answer}</h4>
    </div>
  );
}
