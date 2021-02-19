interface ButtonProps {
  digit: number
  clickButton: (digit: number) => void
  currentValue: number
}

export const NumberButton: React.FC<ButtonProps> = (props) => {
  const { digit, clickButton, currentValue } = props

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

  const widthClass = digit === 0 ? 'w-20' : 'w-12'
  return (
    <button className={`bg-gray-400 text-white h-12 ${widthClass}`} type="button" onClick={updateValue}>
      {digit}
    </button>
  )
}
