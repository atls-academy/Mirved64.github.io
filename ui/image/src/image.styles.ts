import { styleFn } from 'styled-system'

export const baseStyles: styleFn = ({ width, height }) => ({
  display: 'block',
  boxSizing: 'border-box',
  objectFit: 'cover',
  width,
  height,
})
