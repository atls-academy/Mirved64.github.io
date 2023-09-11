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
    @font-face {
      font-family: "HelveticaRegular";
      src: url("/font/helvetica-regular.woff")
    }
    @font-face {
      font-family: "HelveticaLight";
      src: url("/font/helvetica-light.woff")
    }
      html,
      body,
      #__next {
        margin: 0;
        height: 100%;
      }
    `}
  />
)

export { GlobalStyles }
