import React from "react";

function Progress({ isAnswered, totalQuestions }) {
  const precentage = ((isAnswered / totalQuestions) * 100).toFixed(2);
  return (
    <div className="progress">
      <h2>Progress</h2>
      <p>
        {isAnswered} / {totalQuestions} questions answered.
      </p>
      <p>{precentage} %</p>
    </div>
  );
}

export default Progress;
