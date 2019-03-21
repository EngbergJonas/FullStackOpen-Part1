//Sovellus importaa heti ensimmäisellä rivillä useState funktion
import React, { useState } from "react";
import ReactDOM from "react-dom";

//DESTRUKTOINTI ESIMERKKI
/*
1.
const Display = props => {
  return <div>{props.counter}</div>;
};

2.
const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

3.
const Display = ({ counter }) => <div>{counter}</div>;
*/

const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Display = props => <div>{props.value}</div>;

const App = props => {
  const [value, setValue] = useState(10);

  const setToValue = newValue => {
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="zero" />
      <Button handleClick={() => setToValue(value + 1)} text="grow" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
