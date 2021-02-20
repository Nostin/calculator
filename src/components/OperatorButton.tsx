export enum OperatorEnum {
  Multiply = 'multiply',
  Divide = 'divide',
  Add = 'add',
  Subtract = 'subtract',
}

interface ButtonProps {
  operator: OperatorEnum
  clickButton: (operator: OperatorEnum) => void
}

export const OperatorButton: React.FC<ButtonProps> = (props) => {
  const { clickButton, operator } = props

  const updateValue = () => {
    clickButton(operator)
  }

  return (
    <button
      className="bg-yellow-500 text-white h-12 w-1/4 border-b border-gray-100"
      type="button"
      onClick={updateValue}
    >
      {operator === OperatorEnum.Multiply && 'x'}
      {operator === OperatorEnum.Divide && '÷'}
      {operator === OperatorEnum.Add && '+'}
      {operator === OperatorEnum.Subtract && '-'}
    </button>
  )
}
