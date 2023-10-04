import React from 'react'

interface ChoiceProps {
  name: string | null
  imageURL: string | null
  handleClick?: () => void
  animate?: boolean
}
function Choice ({ name, imageURL, handleClick, animate }: ChoiceProps) {
  return (
    <button className={`choice ${name} ${animate ? 'winner' : ''}`} onClick={() => { handleClick && handleClick() }} aria-label={`${name} choice`}>
        {imageURL && <img src={imageURL} alt={`${name} choice`} loading='lazy' />}
    </button>
  )
}

export default Choice
