import React from 'react'

interface ChoiceProps {
  name: string | null
  imageURL: string | null
  handleClick?: () => void
}
function Choice ({ name, imageURL, handleClick }: ChoiceProps) {
  return (
    <button className={`choice ${name}`} onClick={() => { handleClick && handleClick() }}>
        {imageURL && <img src={imageURL} alt={`${name} choice`} />}
    </button>
  )
}

export default Choice
