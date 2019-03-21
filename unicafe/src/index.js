import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Options = (props) => {
    return(
        <div>
        <Button handleClick={() => props.setGood(props.good + 1)} text={"Good"} />
        <Button handleClick={() => props.setNeutral(props.neutral + 1)} text={"Neutral"} />
        <Button handleClick={() => props.setBad(props.bad + 1)} text={"Bad"} />
        </div>
    )
}

const Statistic = (props) => {
        return (
                <tr>
                    <td>{props.text}: {props.value}</td>
                </tr>
        )
        
}

const Statistics = (props) => {
    if(props.total === 0){
        return(
            <table>
            <tbody>
                <tr>
                <th>Statistiikka</th>
                </tr>
                <Statistic text="Hyvä" value={props.good}/>
                <Statistic text="Neutraali" value={props.neutral} />
                <Statistic text="Huono" value={props.bad} />
                <tr>
                <th>Ei tuloksia</th>
                </tr>
            </tbody>
            </table>
        )
    }
    return(
        <table>
            <tbody>
                <tr>
                <th>Statistiikka</th>
                </tr>
                <Statistic text="Hyvä" value={props.good}/>
                <Statistic text="Neutraali" value={props.neutral} />
                <Statistic text="Huono" value={props.bad} />
                <Statistic text="Yhteensä" value={props.total} />
                <Statistic text="Keskiarvo" value={props.average} />
                <Statistic text="Positiivisa" value={props.positive} />
            </tbody>
        </table>
    )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + bad + neutral;
  const average = (good - bad) / (total);
  const positive = good / total * 100 + "%";

  const setToGood = newValue => {
    setGood(newValue);
  };
  const setToNeutral = newValue => {
    setNeutral(newValue);
  };
  const setToBad = newValue => {
    setBad(newValue);
  };

  return (
    <div>
      <h1>Anna palautetta</h1>
      <Options good={good} setGood={setToGood} neutral={neutral} 
      setNeutral={setToNeutral} bad={bad} setBad={setToBad}/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} 
      average={average} positive={positive}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
