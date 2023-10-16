import React              from 'react'
import { FC }             from 'react'

import { Delimiter }      from '@ui/delimiter'
import { Box }            from '@ui/layout'
import { Text }           from '@ui/text'
import { Space }          from '@ui/text'

import { TextBlockProps } from './text-block.interfaces'

export const DesktopTextBlock: FC<TextBlockProps> = ({ text }) => (
  <Box display='inline'>
    <Text
      display='inline'
      color='text.white'
      fontSize='common'
      lineHeight='huge'
      wordWrap='break-word'
    >
      {text}
    </Text>

    <Space count='6' />

    <Delimiter />

    <Space count='6' />
  </Box>
)
