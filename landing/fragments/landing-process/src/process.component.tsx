import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Condition }        from '@ui/condition'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'
import { useWindowWidth }   from '@ui/utils'

import { SliderContainer }  from './slider'

export const Process = () => {
  const { isMobile, isDesktop, isWideDesktop, isTV } = useWindowWidth()

  return (
    <Column flexGrow='1' alignItems='center' justifyContent={{ wide: 'center' }}>
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

      <Condition match={isDesktop}>
        <Column maxWidth={960}>
          <Row>
            <Text color='text.white' fontSize='regular' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.any-process-stops' />
            </Text>

            <Space count={3} />

            <Text color='text.whiteSemiTransparent' fontSize='regular' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.be' />
            </Text>

            <Space count={3} />

            <Text color='text.white' fontSize='regular' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.difficult' />
            </Text>
          </Row>

          <Row justifyContent='center'>
            <Text color='text.white' fontSize='regular' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.when' />
            </Text>

            <Space count={3} />

            <Text color='text.whiteSemiTransparent' fontSize='regular' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.you-know' />
            </Text>

            <Space count={3} />

            <Text color='text.white' fontSize='regular' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.how-it-happen' />
            </Text>
          </Row>
        </Column>
      </Condition>

      <Condition match={isMobile}>
        <Column maxWidth={335}>
          <Row justifyContent='center'>
            <Text color='text.white' fontSize='medium' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.any-process-stops' />
            </Text>
          </Row>

          <Row>
            <Text color='text.whiteSemiTransparent' fontSize='medium' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.be' />
            </Text>

            <Space count={2} />

            <Text color='text.white' fontSize='medium' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.difficult' />
            </Text>

            <Space count={2} />

            <Text color='text.white' fontSize='medium' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.when' />
            </Text>

            <Space count={2} />

            <Text color='text.whiteSemiTransparent' fontSize='medium' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.you-know' />
            </Text>
          </Row>

          <Row justifyContent='center'>
            <Text color='text.white' fontSize='medium' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.how-it-happen' />
            </Text>
          </Row>
        </Column>
      </Condition>

      <Condition match={isWideDesktop || isTV}>
        <Column maxWidth={1300}>
          <Row>
            <Text color='text.white' fontSize='great' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.any-process-stops' />
            </Text>

            <Space count={3} />

            <Text color='text.whiteSemiTransparent' fontSize='great' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.be' />
            </Text>

            <Space count={3} />

            <Text color='text.white' fontSize='great' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.difficult' />
            </Text>
          </Row>

          <Row justifyContent='center'>
            <Text color='text.white' fontSize='great' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.when' />
            </Text>

            <Space count={3} />

            <Text color='text.whiteSemiTransparent' fontSize='great' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.you-know' />
            </Text>

            <Space count={3} />

            <Text color='text.white' fontSize='great' lineHeight='usual'>
              <FormattedMessage id='slider.slogan.how-it-happen' />
            </Text>
          </Row>
        </Column>
      </Condition>

      <Layout flexBasis={{ _: 24, standard: 50, wide: 68 }} flexShrink='0' />

      <SliderContainer />

      <Layout flexBasis={{ _: 128, standard: 240, wide: 293 }} flexShrink='0' />
    </Column>
  )
}
