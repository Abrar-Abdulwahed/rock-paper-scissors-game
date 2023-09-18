import React, { useEffect, useState } from 'react'
import choiceAssets from '../choiceAssets'
import type { ChoiceType } from '../context/GameContext'
import { useGameContext } from '../context/GameContext'
import Choice from './Choice'

function windowChoice (): ChoiceType {
  const choices: ChoiceType[] = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

function Playground () {
  const { choice } = useGameContext()

  // Determine the URL based on the user choice/window value
  const [window, setWindow] = useState<ChoiceType | null>(null) // Initial value is null for placeholder image

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setWindow(windowChoice())
    }, 2000) // Set the desired timeout duration in milliseconds

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const choiceURL = choiceAssets[choice as keyof typeof choiceAssets]
  const windowURL = window ? choiceAssets[window] : null // Use an empty string for the placeholder image

  return (
    <section className="playground">
      <div className="player">
        <p className="player-name">you picked</p>
        <Choice name={choice} imageURL={choiceURL} />
      </div>
      <div className="player">
        <p className="player-name">the house picked</p>
        <Choice name={window} imageURL={windowURL} />
      </div>
    </section>
  )
}

export default Playground
