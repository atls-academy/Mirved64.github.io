import React              from 'react'

import { Space }          from '@ui/text'
import { Text }           from '@ui/text'
import { useWindowWidth } from '@ui/utils/src'

export const TextBlockWhite = ({ text }) => {
  const { isMobile } = useWindowWidth()
  return (
    <>
      <Text
        color='text.white'
        fontSize={{ _: 'medium', standard: 'regular', wide: 'great' }}
        lineHeight='usual'
      >
        {text}
      </Text>

      <Space count={isMobile ? 2 : 3} />
    </>
  )
}

export const TextBlockGhost = ({ text }) => {
  const { isMobile } = useWindowWidth()
  return (
    <>
      <Text
        color='text.whiteSemiTransparent'
        fontSize={{ _: 'medium', standard: 'regular', wide: 'great' }}
        lineHeight='usual'
      >
        {text}
      </Text>

      <Space count={isMobile ? 2 : 3} />
    </>
  )
}
