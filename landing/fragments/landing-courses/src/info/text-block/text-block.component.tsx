import React              from 'react'
import { FC }             from 'react'

import { Condition }      from '@ui/condition'
import { Text }           from '@ui/text'
import { Space }          from '@ui/text'
import { useWindowWidth } from '@ui/utils'

import { TextBlockProps } from './text-block.interfaces'

export const TextBlockPrimary: FC<TextBlockProps> = ({ text, space = true }) => {
  const { isMobile } = useWindowWidth()

  return (
    <>
      <Text
        color='text.primary'
        fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
        lineHeight='huge'
      >
        {text}
      </Text>

      <Condition match={space}>
        <Space count={isMobile ? 2 : 4} />
      </Condition>
    </>
  )
}

export const TextBlockAccent: FC<TextBlockProps> = ({ text, space = true }) => {
  const { isMobile } = useWindowWidth()

  return (
    <>
      <Text
        color='text.accent'
        fontSize={{ _: 'small', standard: 'ordinary', ultra: 'strong' }}
        lineHeight='huge'
      >
        {text}
      </Text>

      <Condition match={space}>
        <Space count={isMobile ? 1 : 4} />
      </Condition>
    </>
  )
}
