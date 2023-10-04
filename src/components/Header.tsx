import React from 'react'
import { useGameContext } from '../hooks/GameContext'
function Header () {
  const { score } = useGameContext()
  return (
    <header className="header">
        <div className="game-name" aria-label="Game Name">
            <span>rock</span><br/>
            <span>paper</span><br/>
            <span>scissors</span><br/>
        </div>
        <div className="score" aria-label="Score">
            <small>score</small>
            <span>{score}</span>
        </div>
    </header>
  )
}

export default Header
