import React from 'react'
import Button from './Button'
import useToggle from '../hooks/useToggle'
import Modal from './Modal'

function Footer () {
  const [isOpen, toggleValue] = useToggle(false)
  return (
    <footer className='footer'>
        <Button name="Rules" classes='btn-outline' handleClick={toggleValue} />
        {isOpen && <Modal onClose={toggleValue} />}
    </footer>
  )
}

export default Footer
