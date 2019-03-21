import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = props => (
    <button onClick={props.handleClick}>{props.text}</button>
  );

const DisplayMostVoted = ({anecdotes, copy}) => {
    return(
        <div>
            <p><b>Most voted anecdote:</b></p>
            <p>
            {anecdotes[copy.indexOf(Math.max(...copy))]}
            </p>
        </div>
    )
}

const DisplayAnecdote = ({selected, copy, anecdotes}) => {
    return (
        <div>
            <p>{selected}</p>
            <p>{copy[anecdotes.indexOf(selected)]}</p>
        </div>
    )
}

const App = () => {

  const [selected, setSelected] = useState('Anecdotes')

  const [copy, setCopy] = useState(Array(anecdotes.length +1).join(0).split('').map(parseFloat))

  const votes = new Array(anecdotes.length + 1).join(0).split('').map(parseFloat)

  const setToSelected = newValue => {
      setSelected(newValue)
  }

  const randomIndex = arr => (Math.floor(Math.random() * arr.length))

  const setVotes = () => {
      votes[anecdotes.indexOf(selected)] += 1;
      setCopy(copy.map((value, i) => value + votes[i]))
  }

  return (
    <div>
        <DisplayAnecdote selected={selected} anecdotes={anecdotes} copy={copy} />
        <Button handleClick={() => setToSelected(anecdotes[randomIndex(anecdotes)])} text="Next anecdote"/>
        <Button handleClick={() => setVotes()} text="Vote"/>
        <DisplayMostVoted anecdotes={anecdotes} copy={copy} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
