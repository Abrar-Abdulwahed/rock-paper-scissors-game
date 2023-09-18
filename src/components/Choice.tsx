import React from 'react'

interface ChoiceProps {
  name: string | null
  imageURL: string
  handleClick?: () => void
}
function Choice ({ name, imageURL, handleClick }: ChoiceProps) {
  return (
    <button className={`choice ${name}`} onClick={() => { handleClick && handleClick() }}>
        <img src={imageURL} alt={`${name} choice`} />
    </button>
  )
}

export default Choice
