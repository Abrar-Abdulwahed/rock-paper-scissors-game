import React from 'react'
import Button from './Button'

interface ModalProps {
  onClose: () => void
}

const Modal = ({ onClose }: ModalProps) => {
  return (
      <div className="modal-overlay show" tabIndex={-1} role="dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Modal Title</h2>
            <Button name="x" handleClick={() => { onClose() }} />
          </div>
          <div className="modal-body">
            <p>Modal body content goes here...</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary">Close</button>
            <button className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
  )
}

export default Modal
