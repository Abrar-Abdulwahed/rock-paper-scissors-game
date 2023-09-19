import React from 'react'

interface ButtonProps {
  name: string
  handleClick?: () => void
}
function Button ({ name, handleClick }: ButtonProps) {
  return (
    <button className="btn" onClick={() => { handleClick && handleClick() }}>
        {name}
    </button>
  )
}

export default Button
