interface ButtonProps {
  clickButton: (digit: number) => void
}

export const ClearButton: React.FC<ButtonProps> = (props) => {
  const { clickButton } = props

  const updateValue = () => {
    clickButton(0)
  }

  return (
    <button className="bg-gray-600 text-white h-12 w-12" type="button" onClick={updateValue}>
      C
    </button>
  )
}
