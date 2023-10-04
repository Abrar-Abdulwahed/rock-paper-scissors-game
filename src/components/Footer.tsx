import React, { useEffect } from 'react'
import Button from './Button'
import useToggle from '../hooks/useToggle'
import Modal from './Modal'

function Footer () {
  const [isOpen, toggleValue] = useToggle(false)

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown as any)
      return () => {
        document.removeEventListener('keydown', handleKeyDown as any)
      }
    }
  }, [isOpen])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      toggleValue(false)
    }
  }

  return (
    <>
      <footer className="footer">
        <Button name="Rules" classes="btn-outline" handleClick={toggleValue} />
      </footer>
      {isOpen && <Modal onClose={toggleValue} />}
    </>
  )
}

export default Footer
