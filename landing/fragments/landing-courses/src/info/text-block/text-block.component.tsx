import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Text }             from '@ui/text'

import { TextBlockProps }   from './text-block.interfaces'

export const TextBlockPrimary: FC<TextBlockProps> = ({ id }) => (
  <Text
    color='text.primary'
    fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
    lineHeight='huge'
  >
    <FormattedMessage id={id} />
  </Text>
)

export const TextBlockAccent: FC<TextBlockProps> = ({ id }) => (
  <Text
    color='text.accent'
    fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
    lineHeight='huge'
  >
    <FormattedMessage id={id} />
  </Text>
)
