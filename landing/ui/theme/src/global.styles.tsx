import { Global } from '@emotion/react'
import { css }    from '@emotion/react'

import React      from 'react'

const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body,
      #__next {
        margin: 0;
        height: 100%;
        font: Helvetica;
      }
    `}
  />
)

export { GlobalStyles }
