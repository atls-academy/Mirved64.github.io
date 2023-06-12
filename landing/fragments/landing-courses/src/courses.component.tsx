import React   from 'react'

import { Box } from '@ui/layout'

export const Courses = () => (
  <Box backgroundColor='#ffffff' width='1920px' margin='0 auto'>
    <Box
      border='solid 2px black'
      width='1610px'
      height='1225px'
      flexDirection='column'
      margin='160px 80px 240px 230px'
    >
      <Box
        border='solid 2px blue'
        width='100%'
        height='115px'
        justifyContent='space-between'
        alignItems='center'
      >
        <Box border='solid 2px navy' width='868px' height='100%'>
          TextText
        </Box>
        <Box border='solid 2px red' width='146px' height='22px'>
          TextText
        </Box>
      </Box>
      <Box
        border='solid 1px black'
        width='1460px'
        height='1px'
        marginTop='48px'
        marginBottom='48px'
      >
        TextText
      </Box>
      <Box
        border='solid 2px fuchsia'
        width='100%'
        height='135px'
        justifyContent='space-between'
        marginBottom='80px'
      >
        <Box border='solid 2px gray' width='710px' height='100%'>
          TextText
        </Box>
        <Box border='solid 2px gray' width='559px' height='100%'>
          TextText
        </Box>
      </Box>
      <Box border='solid 2px Maroon' width='100%' height='734px' justifyContent='space-between'>
        <Box border='solid 2px black' width='1160px' height='688px' flexDirection='column'>
          <Box
            border='solid 2px green'
            width='694px'
            height='146px'
            marginTop='40px'
            marginLeft='20px'
            marginBottom='120px'
          >
            TextText
          </Box>
          <Box
            border='solid 2px green'
            width='694px'
            height='146px'
            marginTop='40px'
            marginLeft='20px'
            marginBottom='112px'
          >
            TextText
          </Box>
          <Box border='solid 2px green' width='100%' height='156px' justifyContent='space-between'>
            <Box border='solid 2px grey' width='496px' height='92px' margin='32px'>
              TextText
            </Box>
            <Box border='solid 2px grey' width='496px' height='92px' margin='32px'>
              TextText
            </Box>
          </Box>
        </Box>
        <Box border='solid 2px black' width='410px' height='100%' flexDirection='column'>
          <Box border='solid 2px red' width='346px' height='104px' margin='32px auto 74px'>
            TextText
          </Box>
          <Box border='solid 2px red' width='240px' height='240px' margin='0 auto 62px'>
            Image
          </Box>
          <Box
            border='solid 2px red'
            width='188px'
            height='116px'
            marginLeft='32px'
            marginBottom='68px'
          >
            TextText
          </Box>
          <Box border='solid 2px red' width='205px' height='22px' marginLeft='32px'>
            TextText
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
)
