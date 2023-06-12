import React   from 'react'

import { Box } from '@ui/layout'

export const Navigation = () => (
  <Box
    backgroundColor='#666666'
    border='solid 2px black'
    width='1920px'
    height='120px'
    justifyContent='space-between'
    alignItems='center'
    margin='0 auto'
  >
    <Box border='solid 2px red' width='56px' height='56px' marginLeft='40px'>
      Text
    </Box>
    <Box border='solid 2px green' width='860px' height='18px'>
      Text
    </Box>
    <Box border='solid 2px blue' width='54px' height='18px' marginRight='40px'>
      Text
    </Box>
  </Box>
)
