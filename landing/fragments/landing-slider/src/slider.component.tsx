import React                   from 'react'
import { FormattedMessage }    from 'react-intl'

import { Button }              from '@ui/button'
import { ArrowLeftWhiteIcon }  from '@ui/icons'
import { ArrowRightWhiteIcon } from '@ui/icons'
import { ImageBlock }          from '@ui/image'
import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Column }              from '@ui/layout'
import { Text }                from '@ui/text'

export const Slider = () => (
  <Box backgroundColor='background.slider' justifyContent='center'>
    <Column flexGrow='1'>
      <Layout flexBasis={[24, 160]} flexShrink='0' />

      <Column>
        <Column justifyContent='center' alignItems='center'>
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
                fill
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
                color='text.slider.primary'
                fontSize={['atom', 'little']}
                lineHeight={['minor', 'medium']}
                textAlign='center'
              >
                <FormattedMessage id='sliderSign' />
              </Text>
            </Box>

            <Box>
              <Button
                variant='transparentBackgroundWhiteText'
                fill
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
