import React               from 'react'

import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Column }          from '@ui/layout'
import { Text }            from '@ui/text'

import { SliderContainer } from './slider'
import { TextBlockGhost }  from './text-block'
import { TextBlockWhite }  from './text-block'
import { useProcess }      from './data'

export const Process = () => {
  const process = useProcess()

  const title: string = process?.data?.section.sections.title
  const slogan: string[] = process?.data?.section.content.split('\n')[1].split(' ')

  return (
    <Column flexGrow='1' alignItems='center'>
      <Layout flexBasis={{ _: 24, standard: 160, wide: 213 }} flexShrink='0' />

      <Box>
        <Text
          color='text.whiteSemiTransparent'
          fontSize={['atom', 'tiny']}
          lineHeight='small'
          textTransform='uppercase'
        >
          {title}
        </Text>
      </Box>

      <Layout flexBasis={{ _: 16, standard: 24, wide: 33 }} flexShrink='0' />

      <Row flexWrap='wrap' justifyContent='center' maxWidth={{ _: 335, standard: 880, wide: 1160 }}>
        {slogan?.slice(0, 3).map((word) => (
          <TextBlockWhite text={word} key={word} />
        ))}

        <TextBlockGhost text={slogan?.slice(3, 4)} />

        {slogan?.slice(4, 6).map((word) => (
          <TextBlockWhite text={word} key={word} />
        ))}

        <TextBlockGhost text={slogan?.slice(6, 7)} />

        {slogan?.slice(7, 10).map((word) => (
          <TextBlockWhite text={word} key={word} />
        ))}
      </Row>

      <Layout flexBasis={{ _: 24, standard: 50, wide: 68 }} flexShrink='0' />

      <SliderContainer />

      <Layout flexBasis={{ _: 144, standard: 240, wide: 293, ultra: 456 }} flexShrink='0' />
    </Column>
  )
}
