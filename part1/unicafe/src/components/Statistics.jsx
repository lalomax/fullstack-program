import React from "react";
import StatisticsLine from "./StatisticsLine";

const Statistics = ({ good, neutral, bad, all, average, percentageGood }) => {
  return (
    <div>
      <StatisticsLine text="good" value={good}/>
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad}/>
      <StatisticsLine text="all" value={all}/>
      <StatisticsLine text="average" value={average}/>
      <StatisticsLine text="positive" value={percentageGood + "%"}/>
    </div>
  );
};

export default Statistics;
