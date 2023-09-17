import React from 'react'
import imagePaper from '../images/icon-paper.svg'
import imageRock from '../images/icon-rock.svg'
import imageScissors from '../images/icon-scissors.svg'
import imageTriangle from '../images/bg-triangle.svg'

function Round () {
  return (
    <section className="round">
        <img src={imageTriangle} className="triangle" />
        <button className="choice paper">
          <img src={imagePaper} />
        </button>
        <button className="choice rock">
          <img src={imageRock} />
        </button>
        <button className="choice scissors">
          <img src={imageScissors} />
        </button>
    </section>
  )
}

export default Round
