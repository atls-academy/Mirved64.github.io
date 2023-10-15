import styled         from '@emotion/styled'

import { background } from 'styled-system'
import { layout }     from 'styled-system'
import { position }   from 'styled-system'
import { border }     from 'styled-system'

export const Background = styled.div(
  ({ theme, backgroundImage, backgroundColor, backgroundSize }) => ({
    backgroundColor: backgroundColor ? theme.backgrounds.backgroundColor[backgroundColor] : 'none',
    backgroundImage: backgroundImage ? theme.backgrounds.backgroundImage[backgroundImage] : 'none',
    backgroundSize: backgroundSize ? theme.backgrounds.backgroundSize[backgroundSize] : 'none',
    boxSizing: 'border-box',
  }),
  background,
  layout,
  position,
  border
)
