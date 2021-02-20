import { useState } from 'react'
import { ClearButton } from './ClearButton'
import { NumberButton } from './NumberButton'
import { OperatorButton, OperatorEnum } from './OperatorButton'
import { EqualsButton } from './EqualsButton'

export const CalculatorContainer: React.FC = () => {
  const [value, setValue] = useState<number>(0)
  const [previousValue, setPreviousValue] = useState<number>(0)
  const [currentOperator, setCurrentOperator] = useState<OperatorEnum | false>(false)

  const numberPressed = (newValue: number) => {
    setValue(newValue)
  }

  const operatorPressed = (operator: OperatorEnum) => {
    setPreviousValue(value)
    setValue(0)
    setCurrentOperator(operator)
  }

  const equalsPressed = () => {
    if (currentOperator === OperatorEnum.Add) {
      setValue(previousValue + value)
    }
    if (currentOperator === OperatorEnum.Subtract) {
      setValue(previousValue - value)
    }
    if (currentOperator === OperatorEnum.Multiply) {
      setValue(previousValue * value)
    }
    if (currentOperator === OperatorEnum.Divide) {
      setValue(previousValue / value)
    }
  }

  const clearPressed = () => {
    setValue(0)
    setPreviousValue(0)
    setCurrentOperator(false)
  }

  return (
    <div className="w-52 border border-gray-300 rounded-lg color-border-gray overflow-hidden">
      <p className="text-red bg-gray-700 text-white p-4 text-xl text-right">{value}</p>
      <div className="flex justify-between">
        <ClearButton clickButton={clearPressed} />
        <OperatorButton operator={OperatorEnum.Divide} clickButton={operatorPressed} />
      </div>
      <NumberButton digit={7} clickButton={numberPressed} currentValue={value} />
      <NumberButton digit={8} clickButton={numberPressed} currentValue={value} />
      <NumberButton digit={9} clickButton={numberPressed} currentValue={value} />
      <OperatorButton operator={OperatorEnum.Multiply} clickButton={operatorPressed} />

      <NumberButton digit={4} clickButton={numberPressed} currentValue={value} />
      <NumberButton digit={5} clickButton={numberPressed} currentValue={value} />
      <NumberButton digit={6} clickButton={numberPressed} currentValue={value} />
      <OperatorButton operator={OperatorEnum.Subtract} clickButton={operatorPressed} />

      <NumberButton digit={1} clickButton={numberPressed} currentValue={value} />
      <NumberButton digit={2} clickButton={numberPressed} currentValue={value} />
      <NumberButton digit={3} clickButton={numberPressed} currentValue={value} />
      <OperatorButton operator={OperatorEnum.Add} clickButton={operatorPressed} />

      <div className="flex justify-between">
        <NumberButton digit={0} clickButton={numberPressed} currentValue={value} />
        <EqualsButton clickButton={equalsPressed} />
      </div>
    </div>
  )
}
