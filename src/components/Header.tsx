import React from 'react'
function Header () {
  return (
    <header className="header">
        <div className="game-name">
            <span>rock</span><br/>
            <span>paper</span><br/>
            <span>scissors</span><br/>
        </div>
        <div className="score">
            <small>score</small>
            <h1>13</h1>
        </div>
    </header>
  )
}

export default Header
