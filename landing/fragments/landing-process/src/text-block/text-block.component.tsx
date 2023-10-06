import React              from 'react'
import { FC }             from 'react'

import { Space }          from '@ui/text'
import { Text }           from '@ui/text'
import { useWindowWidth } from '@ui/utils'

import { TextBlockProps } from './text-block.interfaces'

export const TextBlockWhite: FC<TextBlockProps> = ({ text }) => {
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

export const TextBlockGhost: FC<TextBlockProps> = ({ text }) => {
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
