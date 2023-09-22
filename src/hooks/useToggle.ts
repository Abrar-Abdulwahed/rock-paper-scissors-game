import { useState } from 'react'

type ToggleValue = boolean
type ToggleFunction = (value?: ToggleValue) => void
type ToggleHook = [ToggleValue, ToggleFunction]

function useToggle (defaultValue: ToggleValue): ToggleHook {
  const [value, setValue] = useState<ToggleValue>(defaultValue)

  function toggleValue (value?: ToggleValue): void {
    setValue(currentValue => typeof value === 'boolean' ? value : !currentValue)
  }

  return [value, toggleValue]
}

export default useToggle
