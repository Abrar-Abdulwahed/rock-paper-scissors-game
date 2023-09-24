import { useState } from 'react'

type ToggleValue = boolean
type ToggleFunction = (isOpen?: ToggleValue) => void
type ToggleHook = [ToggleValue, ToggleFunction]

function useToggle (defaultValue: ToggleValue): ToggleHook {
  const [isOpen, setIsOpen] = useState<ToggleValue>(defaultValue)

  function toggleValue (isOpen?: ToggleValue): void {
    setIsOpen(currentValue => typeof isOpen === 'boolean' ? isOpen : !currentValue)
  }

  return [isOpen, toggleValue]
}

export default useToggle
