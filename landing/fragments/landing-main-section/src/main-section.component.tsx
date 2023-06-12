import React   from 'react'

import { Box } from '@ui/layout'

export const MainSection = () => (
  <Box backgroundColor='#666666' width='1920px' flexDirection='column' margin='0 auto'>
    <Box
      backgroundColor='#666666'
      border='solid 2px purple'
      width='1650px'
      height='498px'
      margin='412px 40px 50px 230px'
      justifyContent='space-between'
      alignItems='end'
    >
      <Box border='solid 2px maroon' width='1460px' height='498px' flexDirection='column'>
        <Box border='solid 2px red' width='1166px' height='345px'>
          Text
        </Box>
        <Box
          border='solid 1px white'
          width='1460px'
          height='1px'
          marginTop='48px'
          marginBottom='48px'
        >
          Text
        </Box>
        <Box border='solid 2px yellow' width='640px' height='56px'>
          Text
        </Box>
      </Box>
      <Box border='solid 2px olive' width='56px' height='200px'>
        Text
      </Box>
    </Box>
    <Box border='solid 2px blue' width='1460px' height='350px' margin='160px 230px'>
      Text
    </Box>
  </Box>
)
