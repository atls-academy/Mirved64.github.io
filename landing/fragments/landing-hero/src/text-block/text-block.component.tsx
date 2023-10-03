import React              from 'react'

import { Delimiter }      from '@ui/delimiter'
import { DelimiterLarge } from '@ui/delimiter'
import { Box }            from '@ui/layout'
import { Space }          from '@ui/text'
import { Text }           from '@ui/text'

export const TextBlock = ({ children }) => (
  <Box display='inline'>
    <Text
      display='inline'
      color='text.white'
      fontSize={{ wide: 'common', ultra: 'heavy' }}
      lineHeight='huge'
      wordWrap='break-word'
    >
      {children}
    </Text>

    <Space count='6' />

    <Box display={{ _: 'none', wide: 'inline', ultra: 'none' }}>
      <Delimiter />
    </Box>

    <Box display={{ _: 'none', ultra: 'inline' }}>
      <DelimiterLarge />
    </Box>

    <Space count='6' />
  </Box>
)
