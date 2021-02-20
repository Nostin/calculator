interface ButtonProps {
  digit: number
  clickButton: (digit: number) => void
  currentValue: number
  label?: string
}

export const NumberButton: React.FC<ButtonProps> = (props) => {
  const { digit, clickButton, currentValue, label } = props

  const updateValue = () => {
    if (currentValue === 0) {
      if (digit === 0) {
        clickButton(0)
      } else {
        clickButton(digit)
      }
    } else {
      const strValue = currentValue.toString() + digit.toString()
      clickButton(parseFloat(strValue))
    }
  }

  const widthClass = digit === 0 ? 'w-2/4' : 'w-1/4'
  const borderBottom = digit === 0 ? '' : 'border-b'
  return (
    <button
      className={`bg-gray-400 text-white h-12 ${widthClass} ${borderBottom} border-r border-gray-100`}
      type="button"
      onClick={updateValue}
      aria-label={label}
    >
      {digit}
    </button>
  )
}
