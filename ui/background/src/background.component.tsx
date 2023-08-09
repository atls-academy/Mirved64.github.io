import styled         from '@emotion/styled'

import { background } from 'styled-system'
import { layout }     from 'styled-system'
import { position }   from 'styled-system'
import { border }     from 'styled-system'

export const Background = styled.div(
  ({ theme, backgroundColor }) => ({
    background: backgroundColor ? theme.backgrounds[backgroundColor] : 'none',
  }),
  background,
  layout,
  position,
  border
)
