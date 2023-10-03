import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'
import { useWindowWidth }   from '@ui/utils'

import { SliderContainer }  from './slider'
import { TextBlockGhost }   from './text-block'
import { TextBlockWhite }   from './text-block'

export const Process = () => {
  const { isMobile } = useWindowWidth()

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
          <FormattedMessage id='slider.subtitle' />
        </Text>
      </Box>

      <Layout flexBasis={{ _: 16, standard: 24, wide: 33 }} flexShrink='0' />

      <Row flexWrap='wrap' justifyContent='center' maxWidth={{ _: 335, standard: 880, wide: 1160 }}>
        <TextBlockWhite id='slider.slogan.any-process-stops' />

        <Space count={isMobile ? 2 : 3} />

        <TextBlockGhost id='slider.slogan.be' />

        <Space count={isMobile ? 2 : 3} />

        <TextBlockWhite id='slider.slogan.difficult' />

        <Space count={isMobile ? 2 : 3} />

        <TextBlockWhite id='slider.slogan.when' />

        <Space count={isMobile ? 2 : 3} />

        <TextBlockGhost id='slider.slogan.you-know' />

        <Space count={isMobile ? 2 : 3} />

        <TextBlockWhite id='slider.slogan.how-it-happen' />
      </Row>

      <Layout flexBasis={{ _: 24, standard: 50, wide: 68 }} flexShrink='0' />

      <SliderContainer />

      <Layout flexBasis={{ _: 144, standard: 240, wide: 293 }} flexShrink='0' />
    </Column>
  )
}
