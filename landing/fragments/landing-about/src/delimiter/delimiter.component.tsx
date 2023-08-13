import React     from 'react'

import { Image } from '@ui/image'
import { Box }   from '@ui/layout'

export const Delimiter = () => (
  <Box
    display='inline-flex'
    backgroundColor='background.whiteTransparent'
    width={76}
    height={52}
    alignItems='center'
    justifyContent='center'
    borderRadius='little'
  >
    <Image src='./image/Default.png' width={40} height={40} />
  </Box>
)
