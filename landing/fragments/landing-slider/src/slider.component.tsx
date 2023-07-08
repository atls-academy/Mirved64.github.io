import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { ArrowLeftIcon }    from '@ui/icons'
import { ArrowRightIcon }   from '@ui/icons'
import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

export const Slider = () => (
  <Box backgroundColor='background.slider' width='100%' margin='0 auto' flexDirection='column'>
    <Layout flexBasis={[24, 160]} flexShrink='0' />

    <Column>
      <Column margin='0 auto' alignItems='center'>
        <Layout>
          <Text
            color='text.slider.primary'
            fontSize={['atom', 'tiny']}
            lineHeight={['atom', 'extraSmall']}
            textTransform='uppercase'
          >
            <FormattedMessage id='sliderSubtitle' />
          </Text>
        </Layout>

        <Layout flexBasis={[16, 24]} flexShrink='0' />

        <Layout justifyContent='center'>
          <Layout flexBasis={[335, 960]} flexShrink='1'>
            <Text
              color='text.slider.primary'
              fontSize={['medium', 'regular']}
              lineHeight={['normal', 'mean']}
              textAlign='center'
              letterSpacing='-1%'
            >
              <FormattedMessage id='sliderSlogan' />
            </Text>
          </Layout>
        </Layout>
      </Column>

      <Layout flexBasis={[24, 50]} flexShrink='0' />

      <Column margin='0 auto'>
        <Layout
          margin='0 auto'
          maxWidth={960}
          maxHeight={540}
          width={[138, 'auto']}
          height={[340, 'auto']}
          flexShrink='1'
        >
          <ImageBlock src='./image/mockup.png' />
        </Layout>

        <Layout flexBasis={[25, 32]} flexShrink='0' />

        <Layout justifyContent='center'>
          <Row justifyContent='space-between' alignItems='center' flexBasis={[335, 960]}>
            <Layout height={[60, 64]} width={[40, 48]} justifyContent='center' alignItems='center'>
              <Layout>
                <ArrowLeftIcon width={16} height={16} />
              </Layout>
            </Layout>

            <Layout
              height={[58, 60]}
              flexBasis={[175, 778]}
              alignItems='center'
              justifyContent='center'
            >
              <Text
                color='text.slider.primary'
                fontSize={['atom', 'little']}
                lineHeight={['tiny', 'medium']}
                textAlign='center'
              >
                <FormattedMessage id='sliderSign' />
              </Text>
            </Layout>

            <Layout height={[60, 64]} width={[40, 48]} justifyContent='center' alignItems='center'>
              <Layout>
                <ArrowRightIcon width={16} height={16} />
              </Layout>
            </Layout>
          </Row>
        </Layout>
      </Column>
    </Column>

    <Layout flexBasis={[70, 160]} flexShrink='0' />
  </Box>
)
