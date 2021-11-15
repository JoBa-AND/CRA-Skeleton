import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders header', () => {
  render(<App />)
  const linkElement = screen.getByText(/Header/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders body', () => {
  render(<App />)
  const linkElement = screen.getByText(/Body/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders footer', () => {
  render(<App />)
  const linkElement = screen.getByText(/Footer/i)
  expect(linkElement).toBeInTheDocument()
})
