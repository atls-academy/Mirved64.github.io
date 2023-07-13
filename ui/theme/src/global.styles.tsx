import { Global } from '@emotion/react'
import { css }    from '@emotion/react'

import React      from 'react'

const GlobalStyles = () => (
  <Global
    styles={css`
    @font-face {
      font-family: "GellaDisplay";
      src: url("/font/gella-display.otf")
    }
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
