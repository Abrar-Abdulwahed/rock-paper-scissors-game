import React, { useEffect, useState } from 'react'
import choiceAssets from '../choiceAssets'
import { WIN, LOSE, houseChoice, determineWinner } from '../gameLogic'
import type { ChoiceType } from '../hooks/GameContext'
import { useGameContext } from '../hooks/GameContext'
import Choice from './Choice'
import Button from './Button'

function Playground () {
  const { choice, setChoice, score, setScore } = useGameContext()

  const [house, setHouse] = useState<ChoiceType | null>(null)
  const [result, setResult] = useState<string>('')
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHouse(houseChoice())
    }, 2000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    if (choice && house) {
      const winner = determineWinner(choice, house)
      setResult(winner)

      if (winner === WIN) {
        setScore(score + 1)
      } else if (winner === LOSE) {
        setScore(score - 1)
      }
    }
  }, [choice, house])

  const choiceURL = choiceAssets[choice as keyof typeof choiceAssets]
  const houseURL = house ? choiceAssets[house] : null // Use an empty string for the placeholder image

  return (
    <section className="playground">
      <div className="player">
        <p className="player-name">you picked</p>
        <Choice name={choice} imageURL={choiceURL} animate={result === WIN} />
      </div>
      {result &&
        <div className="result" aria-live="polite">
            <p className="h1">{result}</p>
            <Button name='play again' classes='btn-filled' handleClick={() => { setChoice(null); setHouse(null) }} />
        </div>
       }
      <div className="player">
        <p className="player-name">the house picked</p>
        <Choice name={house} imageURL={houseURL} animate={result === LOSE} />
      </div>
    </section>
  )
}

export default Playground
