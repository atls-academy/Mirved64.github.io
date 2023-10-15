import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Text }             from '@ui/text'

import { TextBlockProps }   from './text-block.interfaces'

export const DesktopTextBlock: FC<TextBlockProps> = ({ id }) => (
  <Text
    display='inline'
    color='text.white'
    fontSize='common'
    lineHeight='huge'
    wordWrap='break-word'
  >
    <FormattedMessage id={id} />
  </Text>
)

export const MobileTextBlock: FC<TextBlockProps> = ({ id }) => (
  <Box>
    <Text color='text.white' fontSize='small' lineHeight='huge'>
      <FormattedMessage id={id} />
    </Text>
  </Box>
)
