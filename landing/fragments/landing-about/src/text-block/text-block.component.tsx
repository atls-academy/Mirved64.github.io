import React              from 'react'
import { FC }             from 'react'

import { Delimiter }      from '@ui/delimiter/src'
import { Box }            from '@ui/layout'
import { Text }           from '@ui/text'
import { Space }          from '@ui/text/src'

import { TextBlockProps } from './text-block.interfaces'

export const DesktopTextBlock: FC<TextBlockProps> = ({ children }) => (
  <Box display='inline'>
    <Text
      display='inline'
      color='text.white'
      fontSize='common'
      lineHeight='huge'
      wordWrap='break-word'
    >
      {children}
    </Text>

    <Space count='6' />

    <Delimiter />

    <Space count='6' />
  </Box>
)
