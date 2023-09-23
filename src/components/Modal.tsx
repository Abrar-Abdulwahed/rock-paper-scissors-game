import React from 'react'
import Button from './Button'

const Modal = () => {
  return (
    <>
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
                <h2>Rules</h2>
                <Button name="x" handleClick={toggleValue} />
            </div>
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
          </div>
        </div>
    </>
  )
}

export default Modal
