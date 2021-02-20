import { render, fireEvent } from '@testing-library/react'
import CalculatorApp from './App'

// test addition
test('check that 2 + 3 === 5', () => {
  const component = render(<CalculatorApp />)
  fireEvent.click(component.getByRole('button', { name: 'two' }))
  fireEvent.click(component.getByRole('button', { name: 'plus' }))
  fireEvent.click(component.getByRole('button', { name: 'three' }))
  fireEvent.click(component.getByRole('button', { name: 'equals' }))
  expect(component.getByTitle('answer').textContent).toBe('5')
})

// test bigger addition
test('check that 2 + 3 === 5', () => {
  const component = render(<CalculatorApp />)
  fireEvent.click(component.getByRole('button', { name: 'two' }))
  fireEvent.click(component.getByRole('button', { name: 'one' }))
  fireEvent.click(component.getByRole('button', { name: 'four' })) // 214
  fireEvent.click(component.getByRole('button', { name: 'plus' }))
  fireEvent.click(component.getByRole('button', { name: 'seven' }))
  fireEvent.click(component.getByRole('button', { name: 'zero' }))
  fireEvent.click(component.getByRole('button', { name: 'three' }))
  fireEvent.click(component.getByRole('button', { name: 'eight' })) // 7038
  fireEvent.click(component.getByRole('button', { name: 'equals' }))
  expect(component.getByTitle('answer').textContent).toBe('7252')
})

// test subtraction
test('check that 56 - 9 === 47', () => {
  const component = render(<CalculatorApp />)
  fireEvent.click(component.getByRole('button', { name: 'five' }))
  fireEvent.click(component.getByRole('button', { name: 'six' }))
  fireEvent.click(component.getByRole('button', { name: 'minus' }))
  fireEvent.click(component.getByRole('button', { name: 'nine' }))
  fireEvent.click(component.getByRole('button', { name: 'equals' }))
  expect(component.getByTitle('answer').textContent).toBe('47')
})

// test multiplication
test('check that 3 x 4 === 12', () => {
  const component = render(<CalculatorApp />)
  fireEvent.click(component.getByRole('button', { name: 'three' }))
  fireEvent.click(component.getByRole('button', { name: 'times' }))
  fireEvent.click(component.getByRole('button', { name: 'four' }))
  fireEvent.click(component.getByRole('button', { name: 'equals' }))
  expect(component.getByTitle('answer').textContent).toBe('12')
})

// test division
test('check that 10 / 2 === 5', () => {
  const component = render(<CalculatorApp />)
  fireEvent.click(component.getByRole('button', { name: 'one' }))
  fireEvent.click(component.getByRole('button', { name: 'zero' }))
  fireEvent.click(component.getByRole('button', { name: 'divide' }))
  fireEvent.click(component.getByRole('button', { name: 'two' }))
  fireEvent.click(component.getByRole('button', { name: 'equals' }))
  expect(component.getByTitle('answer').textContent).toBe('5')
})

// test clear
test('check that 10 / 2 === 5', () => {
  const component = render(<CalculatorApp />)
  fireEvent.click(component.getByRole('button', { name: 'three' }))
  fireEvent.click(component.getByRole('button', { name: 'three' }))
  expect(component.getByTitle('answer').textContent).toBe('33')
  fireEvent.click(component.getByRole('button', { name: 'clear' }))
  expect(component.getByTitle('answer').textContent).toBe('0')
})
