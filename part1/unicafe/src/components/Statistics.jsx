import React from "react";
import StatisticsText from "./StatisticsText";
import StatisticsValue from "./StatisticsValue";

const Statistics = ({ good, neutral, bad, all, average, percentageGood }) => {
  return (
    <div>
      <table>
      <tr> <td><StatisticsText text="good" /></td><td><StatisticsValue value={good} /></td> </tr>
      <tr><td><StatisticsText text="neutral" /></td><td><StatisticsValue value={neutral} /></td></tr> 
       <tr><td><StatisticsText text="bad" /></td><td><StatisticsValue value={bad} /></td></tr>
       <tr><td><StatisticsText text="all" /></td><td><StatisticsValue value={all} /></td></tr>
       <tr><td><StatisticsText text="average" /></td><td><StatisticsValue value={average} /></td></tr>
       <tr><td><StatisticsText text="positive" /></td><td><StatisticsValue value={percentageGood + "%"} /></td></tr>
       
      </table>
    </div>
  );
};

export default Statistics;
