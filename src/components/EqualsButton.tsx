interface ButtonProps {
  clickButton: () => void
}

export const EqualsButton: React.FC<ButtonProps> = (props) => {
  const { clickButton } = props

  const equals = () => {
    clickButton()
  }

  return (
    <button className="bg-yellow-500 text-white h-12 w-1/4" type="button" onClick={equals} aria-label="equals">
      =
    </button>
  )
}
