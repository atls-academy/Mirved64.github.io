import { Box }        from '@atls-ui-parts/layout'

import React          from 'react'

import { Background } from '@ui/background'
import { Image }      from '@ui/image'

export const Delimiter = () => (
  <Background
    backgroundColor='ghostTransparentGradient'
    borderRadius='little'
    display='inline-flex'
  >
    <Box
      width={76}
      height={52}
      alignItems='center'
      justifyContent='center'
      borderRadius='little'
      border='thinnestGhost'
      backgroundColor='background.whiteTransparent'
    >
      <Image src='./image/Sphere.png' width={40} height={40} />
    </Box>
  </Background>
)