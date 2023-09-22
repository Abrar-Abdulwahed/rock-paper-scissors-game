import React, { useState } from 'react'
import Button from './Button'

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
                <h2>Rules</h2>
                <Button name="x" handleClick={toggleModal} />
            </div>
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
