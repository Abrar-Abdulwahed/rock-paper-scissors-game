import React from 'react'
import choiceAssets from '../choiceAssets'
import imageTriangle from '../images/bg-triangle.svg'
import Choice from './Choice'
import { useGameContext } from '../hooks/GameContext'

function Round () {
  const { setChoice } = useGameContext()
  return (
    <section className="round">
      <img src={imageTriangle} className="triangle" loading="lazy" alt="triangle image" />
      <Choice name="paper" imageURL={choiceAssets.paper} handleClick={() => { setChoice('paper') }} />
      <Choice name="rock" imageURL={choiceAssets.rock} handleClick={() => { setChoice('rock') }} />
      <Choice name="scissors" imageURL={choiceAssets.scissors} handleClick={() => { setChoice('scissors') }} />
    </section>
  )
}

export default Round
