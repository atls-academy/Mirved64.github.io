import React          from 'react'

import { Background } from '@ui/background'
import { Image }      from '@ui/image'
import { Box }        from '@ui/layout'

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
    >
      <Image src='./image/Default.png' width={40} height={40} />
    </Box>
  </Background>
)
