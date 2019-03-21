import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = props => {
  return (
    <div>
      {props.parts.map((value, i) => (
        <p key={i}>
          <b>{value.name}</b>: {value.exercises}
        </p>
      ))}
    </div>
  );
};

const Total = props => {
  return (
    <div>
      <p>
        <b>Pisteet yhteensä: </b>
        {props.parts.map(value => value.exercises).reduce((a, b) => a + b)}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack -sovelluskehitys",
    parts: [
      {
        name: "Reactin perusteet",
        exercises: 10
      },
      {
        name: "Tiedonvälitys propseilla",
        exercises: 7
      },
      {
        name: "Komponenttien tila",
        exercises: 14
      }
    ]
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
