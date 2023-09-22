import React from 'react'

interface ButtonProps {
  name: string
  classes?: string
  handleClick?: () => void
}
function Button ({ name, classes, handleClick }: ButtonProps) {
  return (
    <button className={`btn ${classes}`} onClick={() => { handleClick && handleClick() }}>
        {name}
    </button>
  )
}

export default Button
