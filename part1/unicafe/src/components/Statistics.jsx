import React from "react";

const Statistics = ({ good, neutral, bad, all, average, percentageGood }) => {
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {percentageGood}%</p>
    </div>
  );
};

export default Statistics;
