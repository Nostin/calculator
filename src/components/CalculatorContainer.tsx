import { useState } from 'react'
import { ClearButton } from './ClearButton'
import { NumberButton } from './NumberButton'

export const CalculatorContainer: React.FC = () => {
  const [value, setValue] = useState<number>(0)

  const numberPressed = (newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className="w-80 border border-gray-300 rounded-sm color-border-gray">
      <p className="text-red">{value}</p>
      <ClearButton clickButton={numberPressed} />
      <NumberButton digit={1} clickButton={numberPressed} currentValue={value} />
      <NumberButton digit={2} clickButton={numberPressed} currentValue={value} />
      <NumberButton digit={3} clickButton={numberPressed} currentValue={value} />
      <NumberButton digit={0} clickButton={numberPressed} currentValue={value} />
    </div>
  )
}
