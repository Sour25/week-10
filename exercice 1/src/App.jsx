import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    // Compute width based on score (0 to 10 → 0% to 100%)
    const scoreWidth = `${(score / 10) * 100}%`;

    // Compute color based on score
    let scoreColor;
    if (score < 4) scoreColor = "red";
    else if (score < 7) scoreColor = "orange";
    else scoreColor = "green";

    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <div className="score-panel">
      <h1>My Score in React</h1>

      <small>Enter a score (0 to 10): </small>
      <input
        type="number"
        min="0"
        max="10"
        value={score}
        onChange={(e) => setScore(Math.min(10, Math.max(0, Number(e.target.value))))}
      />

      <div className="score-bar">
        <div className="score-bar-value" style={getScoreBarStyle()}></div>
      </div>
    </div>
  );
}
