import React from "react";

const Button = ({good, setGood, bad, setBad, neutral, setNeutral}) => {
  return (
    <div>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
    </div>
  );
};

export default Button;
