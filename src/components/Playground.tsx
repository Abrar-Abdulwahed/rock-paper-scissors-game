import React, { useEffect, useState } from 'react'
import choiceAssets from '../choiceAssets'
import type { ChoiceType } from '../hooks/GameContext'
import { useGameContext } from '../hooks/GameContext'
import Choice from './Choice'
import Button from './Button'

function houseChoice (): ChoiceType {
  const choices: ChoiceType[] = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

function Playground () {
  const { choice, setChoice, score, setScore } = useGameContext()

  // Determine the URL based on the user choice/house value
  const [house, setHouse] = useState<ChoiceType | null>(null) // Initial value is null for placeholder image
  const [result, setResult] = useState<string>('')
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHouse(houseChoice())
    }, 2000) // Set the desired timeout duration in milliseconds

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    if (choice && house) {
      determineWinner()
    }
  }, [choice, house])

  const choiceURL = choiceAssets[choice as keyof typeof choiceAssets]
  const houseURL = house ? choiceAssets[house] : null // Use an empty string for the placeholder image
  const determineWinner = () => {
    if (choice === house) {
      setResult('It\'s a draw')
    } else if ((choice === 'rock' && house === 'scissors') ||
               (choice === 'scissors' && house === 'paper') ||
               (choice === 'paper' && house === 'rock')) {
      setScore(score + 1)
      setResult('You win')
    } else {
      setScore(score - 1)
      setResult('You lose')
    }
  }
  return (
    <section className="playground">
      <div className="player">
        <p className="player-name">you picked</p>
        <Choice name={choice} imageURL={choiceURL} />
      </div>
      {result &&
        <div>
          <p className="h1">{result}</p>
          <Button name='play again' classes='btn-filled' handleClick={() => { setChoice(null); setHouse(null) }} />
        </div>
      }
      <div className="player">
        <p className="player-name">the house picked</p>
        <Choice name={house} imageURL={houseURL} />
      </div>
    </section>
  )
}

export default Playground
