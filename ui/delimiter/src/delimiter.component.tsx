import { Box }        from '@atls-ui-parts/layout'

import React          from 'react'

import { Background } from '@ui/background'
import { Image }      from '@ui/image'

export const Delimiter = () => (
  <Background
    backgroundImage='ghostTransparentGradient'
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

export const DelimiterLarge = () => (
  <Background
    backgroundColor='ghostTransparentGradient'
    borderRadius='usual'
    display='inline-flex'
    verticalAlign='sub'
  >
    <Box
      width={114}
      height={78}
      alignItems='center'
      justifyContent='center'
      borderRadius='usual'
      border='thinnestGhost'
      backgroundColor='background.whiteTransparent'
    >
      <Image src='./image/Sphere.png' width={60} height={60} />
    </Box>
  </Background>
)
