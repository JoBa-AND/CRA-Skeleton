import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders header', () => {
  render(<App />)
  const linkElement = screen.getByText(/header/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders body', () => {
  render(<App />)
  const linkElement = screen.getByText(/body/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders footer', () => {
  render(<App />)
  const linkElement = screen.getByText(/footer/i)
  expect(linkElement).toBeInTheDocument()
})
