import React from 'react'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissors from '../images/icon-scissors.svg'
import imageTriangle from '../images/bg-triangle.svg'
import Choice from './Choice'

function Round () {
  return (
    <section className="round">
        <img src={imageTriangle} className="triangle" />
        <Choice name="paper" imageURL={paper} />
        <Choice name="rock" imageURL={rock} />
        <Choice name="scissors" imageURL={scissors} />
    </section>
  )
}

export default Round
