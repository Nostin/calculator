interface ButtonProps {
  clickButton: (digit: number) => void
}

export const ClearButton: React.FC<ButtonProps> = (props) => {
  const { clickButton } = props

  const updateValue = () => {
    clickButton(0)
  }

  return (
    <button
      className="bg-gray-600 text-white h-12 w-1/4 border-b border-r border-gray-100"
      type="button"
      onClick={updateValue}
      aria-label="clear"
    >
      C
    </button>
  )
}
