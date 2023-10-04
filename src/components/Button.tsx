import React from 'react'

interface ButtonProps {
  name: string | JSX.Element // Update the type of 'name' prop
  classes?: string
  handleClick?: () => void
  ariaLabel?: string | 'button'
}

function Button ({ name, classes, handleClick, ariaLabel }: ButtonProps) {
  return (
    <button className={`btn ${classes}`} onClick={handleClick} aria-label={ariaLabel}>
      { name }
    </button>
  )
}

export default Button
