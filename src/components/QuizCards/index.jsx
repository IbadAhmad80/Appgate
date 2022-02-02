import React from "react";

import "./styles.scss";

import bs from "../../assets/icons/media/bs.png";
import noBS from "../../assets/icons/media/0-bs.png";

export default function QuizCard({ id, statementText }) {
  const getProgerss = () => {
    if (id === 1) return "0%";
    else if (id === 2) return "25%";
    else if (id === 3) return "50%";
    else return "75%";
  };

  return (
    <div className="quiz-card-container">
      <div className="choice-images">
        <img src={noBS} alt="no bs img" className="no-bs-image" />
        <img src={bs} alt="bs img" className="bs-image" />
      </div>
      <div className="container">
        <div className="progress" style={{ width: getProgerss() }}></div>
      </div>
      <h4>Statement {id} of 4</h4>
      <h1>{statementText}</h1>
    </div>
  );
}
