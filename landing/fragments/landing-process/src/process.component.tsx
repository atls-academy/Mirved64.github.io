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
  const { isMobile, isDesktop } = useWindowWidth()

  return (
    <Column flexGrow='1' alignItems='center'>
      <Layout flexBasis={[24, 160]} flexShrink='0' />

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

      <Layout flexBasis={[16, 24]} flexShrink='0' />

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

      <Layout flexBasis={[24, 50]} flexShrink='0' />

      <SliderContainer />

      <Layout flexBasis={[128, 240]} flexShrink='0' />
    </Column>
  )
}
