import React, { useState } from 'react'
import Header from './components/Header'
import Playground from './components/Playground'
import Round from './components/Round'
import { GameContext } from './hooks/GameContext'
import type { GameContextType, ChoiceType } from './hooks/GameContext'
import Footer from './components/Footer'

const App = () => {
  const [choice, setChoice] = useState<ChoiceType | null>(null)
  const [score, setScore] = useState<number>(0)

  const contextValue: GameContextType = {
    choice,
    setChoice,
    score,
    setScore
  }

  return (
    <GameContext.Provider value={contextValue}>
        <div className="container">
          <Header />
          {!choice
            ? <Round />
            : <Playground />
          }
          <Footer />
        </div>
    </GameContext.Provider>
  )
}

export default App
