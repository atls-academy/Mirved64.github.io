import React                   from 'react'
import { FormattedMessage }    from 'react-intl'

import { ArrowLeftWhiteIcon }  from '@ui/icons'
import { ArrowRightWhiteIcon } from '@ui/icons'
import { ImageBlock }          from '@ui/image'
import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Column }              from '@ui/layout'
import { Text }                from '@ui/text'

export const Slider = () => (
  <Box backgroundColor='background.slider' width='100%' margin='0 auto' flexDirection='column'>
    <Layout flexBasis={[24, 160]} flexShrink='0' />

    <Column>
      <Column margin='0 auto' alignItems='center'>
        <Box>
          <Text
            color='text.slider.primary'
            fontSize={['atom', 'tiny']}
            lineHeight={['subAtom', 'tiny']}
            textTransform='uppercase'
          >
            <FormattedMessage id='sliderSubtitle' />
          </Text>
        </Box>

        <Layout flexBasis={[16, 24]} flexShrink='0' />

        <Layout justifyContent='center'>
          <Box flexBasis={[335, 960]} flexShrink='1'>
            <Text
              color='text.slider.primary'
              fontSize={['medium', 'regular']}
              lineHeight={['normal', 'mean']}
              textAlign='center'
              letterSpacing='-1%'
            >
              <FormattedMessage id='sliderSlogan' />
            </Text>
          </Box>
        </Layout>
      </Column>

      <Layout flexBasis={[24, 50]} flexShrink='0' />

      <Column margin='0 auto'>
        <Box
          margin='0 auto'
          maxWidth={960}
          maxHeight={540}
          width={[138, 'auto']}
          height={[340, 'auto']}
          flexShrink='1'
        >
          <ImageBlock src='./image/mockup.png' />
        </Box>

        <Layout flexBasis={[25, 32]} flexShrink='0' />

        <Layout justifyContent='center'>
          <Row justifyContent='space-between' flexBasis={[335, 960]}>
            <Box height={[60, 64]} width={[40, 48]} justifyContent='center' alignItems='center'>
              <Layout>
                <ArrowLeftWhiteIcon width={16} height={16} />
              </Layout>
            </Box>

            <Box
              height={[58, 60]}
              flexBasis={[175, 778]}
              alignItems='center'
              justifyContent='center'
            >
              <Text
                color='text.slider.primary'
                fontSize={['atom', 'little']}
                lineHeight={['minor', 'medium']}
                textAlign='center'
              >
                <FormattedMessage id='sliderSign' />
              </Text>
            </Box>

            <Box height={[60, 64]} width={[40, 48]} justifyContent='center' alignItems='center'>
              <Layout>
                <ArrowRightWhiteIcon width={16} height={16} />
              </Layout>
            </Box>
          </Row>
        </Layout>
      </Column>
    </Column>

    <Layout flexBasis={[70, 160]} flexShrink='0' />
  </Box>
)
