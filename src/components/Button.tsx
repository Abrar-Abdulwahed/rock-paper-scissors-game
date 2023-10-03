import React from 'react'
// import type { ReactNode } from 'react'

interface ButtonProps {
  name: string | JSX.Element // Update the type of 'name' prop
  classes?: string
  handleClick?: () => void
}

function Button ({ name, classes, handleClick }: ButtonProps) {
  return (
    <button className={`btn ${classes}`} onClick={handleClick}>
      { name }
    </button>
  )
}

export default Button
