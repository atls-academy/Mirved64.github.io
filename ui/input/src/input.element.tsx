import styled               from '@emotion/styled'

import { appearanceStyles } from './styles'
import { baseStyles }       from './styles'
import { shapeStyles }      from './styles'

export const InputElement = styled('div')<any>(baseStyles, shapeStyles, appearanceStyles)
