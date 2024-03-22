import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

function App() {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const percentageGood = (100 * good) / all;

  return (
    <>
      <Button
        setBad={setBad}
        bad={bad}
        setGood={setGood}
        good={good}
        setNeutral={setNeutral}
        neutral={neutral}
      />
      <h2>Statistics</h2>
      {all == 0 ? (
        <p>No feeback given</p>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          percentageGood={percentageGood}
        />
      )}
    </>
  );
}

export default App;
