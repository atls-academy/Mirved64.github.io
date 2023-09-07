import React          from 'react'

import { Background } from '@ui/background'
import { Image }      from '@ui/image'
import { Box }        from '@ui/layout'

export const Delimiter = () => (
  <Background
    backgroundColor='ghostTransparentGradient'
    borderRadius='little'
    display='inline-flex'
    verticalAlign='sub'
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
