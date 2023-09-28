import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Text }             from '@ui/text'

export const TextBlockWhite = ({ id }) => (
  <Text
    color='text.white'
    fontSize={{ _: 'medium', standard: 'regular', wide: 'great' }}
    lineHeight='usual'
  >
    <FormattedMessage id={id} />
  </Text>
)

export const TextBlockGhost = ({ id }) => (
  <Text
    color='text.whiteSemiTransparent'
    fontSize={{ _: 'medium', standard: 'regular', wide: 'great' }}
    lineHeight='usual'
  >
    <FormattedMessage id={id} />
  </Text>
)
