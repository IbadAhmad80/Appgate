import React from "react";

import "./styles.scss";

export default function QuizCard({ id, statementText }) {
  return (
    <div className="quiz-card-container">
      <div className="hr" />
      <h4>Statement {id} of 4</h4>
      <h1>{statementText}</h1>
    </div>
  );
}
