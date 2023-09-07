import { styleFn }    from 'styled-system'

import { ImageProps } from './image.interfaces'

export const baseStyles: styleFn = ({ width, height, hover }: ImageProps) => ({
  display: 'block',
  boxSizing: 'border-box',
  objectFit: 'cover',
  width,
  height,
  hover,
})
