import React, { useState } from 'react'
import Header from './components/Header'
import Playground from './components/Playground'
import Button from './components/Button'
import Round from './components/Round'

interface gameState {
  choice: 'rock' | 'paper' | 'scissors' | null
  score: number
}
function App () {
  const [gameState] = useState<gameState>({
    choice: null,
    score: 0
  })
  return (
    <div className="container">
      {gameState.choice
        ? null
        : (
          <>
            <Round />
            <Header />
            <Playground />
            <Button name='result'/>
          </>
          )
      }
    </div>
  )
}
export default App
