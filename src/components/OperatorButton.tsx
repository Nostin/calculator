export enum OperatorEnum {
  Multiply = 'multiply',
  Divide = 'divide',
  Add = 'add',
  Subtract = 'subtract',
}

interface ButtonProps {
  operator: OperatorEnum
  clickButton: (operator: OperatorEnum) => void
  label?: string
}

export const OperatorButton: React.FC<ButtonProps> = (props) => {
  const { clickButton, operator, label } = props

  const updateValue = () => {
    clickButton(operator)
  }

  return (
    <button
      className="bg-yellow-500 text-white h-12 w-1/4 border-b border-gray-100"
      type="button"
      onClick={updateValue}
      aria-label={label}
    >
      {operator === OperatorEnum.Multiply && 'x'}
      {operator === OperatorEnum.Divide && '÷'}
      {operator === OperatorEnum.Add && '+'}
      {operator === OperatorEnum.Subtract && '-'}
    </button>
  )
}
