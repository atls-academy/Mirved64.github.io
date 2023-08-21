import styled               from '@emotion/styled'

import { baseStyles }       from './styles'
import { contentStyles }    from './styles'
import { fillStyles }       from './styles'
import { appearanceStyles } from './styles'
import { shapeStyles }      from './styles'

export const ButtonElement = styled('button')<any>(
  baseStyles,
  contentStyles,
  appearanceStyles,
  shapeStyles,
  fillStyles
)
