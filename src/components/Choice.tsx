import React from 'react'

interface ChoiceProps {
  name: string
  imageURL: string
  handleClick?: () => void
}
function Choice ({ name, imageURL, handleClick }: ChoiceProps) {
  return (
    <button className={`choice ${name}`} onClick={handleClick}>
        <img src={imageURL} alt={`${name} choice`}/>
    </button>
  )
}

export default Choice
