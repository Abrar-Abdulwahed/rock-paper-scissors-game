import React from 'react'
import Button from './Button'

function Footer ({ toggleModal }: any) {
//   const [value, toggleValue] = useToggle(false)
  return (
    <footer className='footer'>
        <Button name="Rules" classes='btn-outline' handleClick={toggleModal} />
    </footer>
  )
}

export default Footer
