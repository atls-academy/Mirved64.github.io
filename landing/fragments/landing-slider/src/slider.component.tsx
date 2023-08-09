import React                   from 'react'
import { FormattedMessage }    from 'react-intl'

import { Button }              from '@ui/button'
import { Condition }           from '@ui/condition'
import { ArrowLeftWhiteIcon }  from '@ui/icons'
import { ArrowRightWhiteIcon } from '@ui/icons'
import { ImageBlock }          from '@ui/image'
import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Column }              from '@ui/layout'
import { Space }               from '@ui/text'
import { Text }                from '@ui/text'
import { useWindowWidth }      from '@ui/utils'

export const Slider = () => {
  const { isMobile, isDesktop } = useWindowWidth()

  return (
    <Box justifyContent='center'>
      <Column flexGrow='1'>
        <Layout flexBasis={[24, 160]} flexShrink='0' />

        <Column>
          <Column justifyContent='center' alignItems='center'>
            <Box>
              <Text
                color='text.whiteSemiTransparent'
                fontSize={['atom', 'tiny']}
                lineHeight={['subAtom', 'tiny']}
                textTransform='uppercase'
              >
                <FormattedMessage id='slider.subtitle' />
              </Text>
            </Box>

            <Layout flexBasis={[16, 24]} flexShrink='0' />

            <Condition match={isDesktop}>
              <Column maxWidth={960} alignItems='center'>
                <Row justifyContent='center'>
                  <Text
                    color='text.white'
                    fontSize={['medium', 'regular']}
                    lineHeight={['normal', 'mean']}
                  >
                    <FormattedMessage id='slider.slogan.any-process-stops' />
                  </Text>

                  <Space count={3} />

                  <Text
                    color='text.whiteSemiTransparent'
                    fontSize={['medium', 'regular']}
                    lineHeight={['normal', 'mean']}
                  >
                    <FormattedMessage id='slider.slogan.be' />
                  </Text>

                  <Space count={3} />

                  <Text
                    color='text.white'
                    fontSize={['medium', 'regular']}
                    lineHeight={['normal', 'mean']}
                  >
                    <FormattedMessage id='slider.slogan.difficult' />
                  </Text>
                </Row>

                <Row justifyContent='center'>
                  <Text
                    color='text.white'
                    fontSize={['medium', 'regular']}
                    lineHeight={['normal', 'mean']}
                  >
                    <FormattedMessage id='slider.slogan.when' />
                  </Text>

                  <Space count={3} />

                  <Text
                    color='text.whiteSemiTransparent'
                    fontSize={['medium', 'regular']}
                    lineHeight={['normal', 'mean']}
                  >
                    <FormattedMessage id='slider.slogan.you-know' />
                  </Text>

                  <Space count={3} />

                  <Text
                    color='text.white'
                    fontSize={['medium', 'regular']}
                    lineHeight={['normal', 'mean']}
                  >
                    <FormattedMessage id='slider.slogan.how-it-happen' />
                  </Text>
                </Row>
              </Column>
            </Condition>

            <Condition match={isMobile}>
              <Column maxWidth={335} alignItems='center'>
                <Row justifyContent='center'>
                  <Text
                    color='text.white'
                    fontSize={['medium', 'regular']}
                    lineHeight={['normal', 'mean']}
                  >
                    <FormattedMessage id='slider.slogan.any-process-stops' />
                  </Text>
                </Row>

                <Row justifyContent='center'>
                  <Text
                    color='text.whiteSemiTransparent'
                    fontSize={['medium', 'regular']}
                    lineHeight={['normal', 'mean']}
                  >
                    <FormattedMessage id='slider.slogan.be' />
                  </Text>

                  <Space count={2} />

                  <Text
                    color='text.white'
                    fontSize={['medium', 'regular']}
                    lineHeight={['normal', 'mean']}
                  >
                    <FormattedMessage id='slider.slogan.difficult' />
                  </Text>

                  <Space count={2} />

                  <Text
                    color='text.white'
                    fontSize={['medium', 'regular']}
                    lineHeight={['normal', 'mean']}
                  >
                    <FormattedMessage id='slider.slogan.when' />
                  </Text>

                  <Space count={2} />

                  <Text
                    color='text.whiteSemiTransparent'
                    fontSize={['medium', 'regular']}
                    lineHeight={['normal', 'mean']}
                  >
                    <FormattedMessage id='slider.slogan.you-know' />
                  </Text>
                </Row>

                <Row justifyContent='center'>
                  <Text
                    color='text.white'
                    fontSize={['medium', 'regular']}
                    lineHeight={['normal', 'mean']}
                  >
                    <FormattedMessage id='slider.slogan.how-it-happen' />
                  </Text>
                </Row>
              </Column>
            </Condition>
          </Column>

          <Layout flexBasis={[24, 50]} flexShrink='0' />

          <Column alignItems='center'>
            <Box width={[155, 960]} border={['thinWhite', 'boldWhite']} justifyContent='center'>
              <Box
                alignItems='center'
                maxWidth={960}
                maxHeight={540}
                width={[138, 'auto']}
                height={[340, 'auto']}
                flexShrink='1'
              >
                <ImageBlock src='./image/mockup.png' />
              </Box>
            </Box>

            <Layout flexBasis={[24, 32]} flexShrink='0' />

            <Row justifyContent='space-between' maxWidth={[335, 960]}>
              <Box>
                <Button
                  variant='transparentBackgroundWhiteText'
                  icon={<ArrowLeftWhiteIcon width={16} height={16} />}
                  widthIcon={[40, 48]}
                  heightIcon={[60, 64]}
                />
              </Box>

              <Box
                height={[58, 60]}
                flexBasis={[175, 778]}
                alignItems='center'
                justifyContent='center'
              >
                <Text
                  color='text.white'
                  fontSize={['atom', 'little']}
                  lineHeight={['minor', 'medium']}
                  textAlign='center'
                >
                  <FormattedMessage id='slider.sign' />
                </Text>
              </Box>

              <Box>
                <Button
                  variant='transparentBackgroundWhiteText'
                  icon={<ArrowRightWhiteIcon width={16} height={16} />}
                  widthIcon={[40, 48]}
                  heightIcon={[60, 64]}
                />
              </Box>
            </Row>
          </Column>
        </Column>

        <Layout flexBasis={[64, 160]} flexShrink='0' />
      </Column>
    </Box>
  )
}
