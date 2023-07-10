import styled         from '@emotion/styled'

import { ImageProps } from './image.interfaces'
import { baseStyles } from './image.styles'

const Image = styled.img<ImageProps>(baseStyles)

export { Image }
