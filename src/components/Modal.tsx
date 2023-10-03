import React from 'react'
import Button from './Button'
import Rules from '../images/image-rules.svg'
import CloseButton from '../images/icon-close.svg'

interface ModalProps {
  onClose: () => void
}

const Modal = ({ onClose }: ModalProps) => {
  return (
      <div className="modal-overlay show" tabIndex={-1} role="dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Rules</h2>
            <Button name={<img src={CloseButton} alt="Button Icon" width="15" />} handleClick={() => { onClose() }} classes="p-0" />
          </div>
          <div className="modal-body">
            <img src={Rules} width="220" loading='lazy' alt="Rules Explanation" />
          </div>
        </div>
      </div>
  )
}

export default Modal
