import React from 'react'
import choiceAssets from '../choiceAssets'
import { useGameContext } from '../context/GameContext'
import Choice from './Choice'

function Playground () {
  const { choice } = useGameContext()
  // Determine the imageURL based on the choice value
  let imageURL
  if (choice === 'paper') {
    imageURL = choiceAssets.paper
  } else if (choice === 'rock') {
    imageURL = choiceAssets.rock
  } else if (choice === 'scissors') {
    imageURL = choiceAssets.scissors
  }
  return (
    <section className="playground">
      <div className="player">
        <p className="player-name">you picked</p>
        <Choice name={choice} imageURL={imageURL} />
      </div>
      <div className="player">
        <p className="player-name">the house picked</p>
        <Choice name={choice} imageURL={imageURL} />
      </div>
    </section>
  )
}

export default Playground
