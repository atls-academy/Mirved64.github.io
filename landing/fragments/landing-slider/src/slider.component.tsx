import React                   from 'react'
import { FormattedMessage }    from 'react-intl'

import { Background }          from '@ui/background'
import { Button }              from '@ui/button'
import { Condition }           from '@ui/condition'
import { ArrowLeftWhiteIcon }  from '@ui/icons'
import { ArrowRightWhiteIcon } from '@ui/icons'
import { Image }               from '@ui/image'
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
    <Column flexGrow='1' alignItems='center'>
      <Layout flexBasis={[24, 160]} flexShrink='0' />

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
        <Column maxWidth={960}>
          <Row>
            <Text color='text.white' fontSize='regular' lineHeight='mean'>
              <FormattedMessage id='slider.slogan.any-process-stops' />
            </Text>

            <Space count={3} />

            <Text color='text.whiteSemiTransparent' fontSize='regular' lineHeight='mean'>
              <FormattedMessage id='slider.slogan.be' />
            </Text>

            <Space count={3} />

            <Text color='text.white' fontSize='regular' lineHeight='mean'>
              <FormattedMessage id='slider.slogan.difficult' />
            </Text>
          </Row>

          <Row justifyContent='center'>
            <Text color='text.white' fontSize='regular' lineHeight='mean'>
              <FormattedMessage id='slider.slogan.when' />
            </Text>

            <Space count={3} />

            <Text color='text.whiteSemiTransparent' fontSize='regular' lineHeight='mean'>
              <FormattedMessage id='slider.slogan.you-know' />
            </Text>

            <Space count={3} />

            <Text color='text.white' fontSize='regular' lineHeight='mean'>
              <FormattedMessage id='slider.slogan.how-it-happen' />
            </Text>
          </Row>
        </Column>
      </Condition>

      <Condition match={isMobile}>
        <Column maxWidth={335}>
          <Row justifyContent='center'>
            <Text color='text.white' fontSize='medium' lineHeight='normal'>
              <FormattedMessage id='slider.slogan.any-process-stops' />
            </Text>
          </Row>

          <Row>
            <Text color='text.whiteSemiTransparent' fontSize='medium' lineHeight='normal'>
              <FormattedMessage id='slider.slogan.be' />
            </Text>

            <Space count={2} />

            <Text color='text.white' fontSize='medium' lineHeight='normal'>
              <FormattedMessage id='slider.slogan.difficult' />
            </Text>

            <Space count={2} />

            <Text color='text.white' fontSize='medium' lineHeight='normal'>
              <FormattedMessage id='slider.slogan.when' />
            </Text>

            <Space count={2} />

            <Text color='text.whiteSemiTransparent' fontSize='medium' lineHeight='normal'>
              <FormattedMessage id='slider.slogan.you-know' />
            </Text>
          </Row>

          <Row justifyContent='center'>
            <Text color='text.white' fontSize='medium' lineHeight='normal'>
              <FormattedMessage id='slider.slogan.how-it-happen' />
            </Text>
          </Row>
        </Column>
      </Condition>

      <Layout flexBasis={[24, 50]} flexShrink='0' />

      <Condition match={isDesktop}>
        <Background backgroundColor='darkPurpleGradient' borderRadius='regular' border='boldGhost'>
          <Box
            width={960}
            justifyContent='center'
            borderRadius='regular'
            position='relative'
            maxHeight={540}
            overflow='hidden'
          >
            <Box position='absolute'>
              <Image src='./image/integrated-title-bar.png' width={936} height={25} />
            </Box>

            <Box>
              <Image src='./image/mockup.png' width={720} height={540} />
            </Box>
          </Box>
        </Background>
      </Condition>

      <Condition match={isMobile}>
        <Background backgroundColor='darkPurpleGradient' borderRadius='ordinary' border='thinGhost'>
          <Box
            position='relative'
            borderRadius='ordinary'
            width={155}
            justifyContent='center'
            overflow='hidden'
          >
            <Box position='absolute' top='2px'>
              <Image src='./image/toolbar-mobile.png' width={143} height={22} />
            </Box>

            <Box width={155} height={323} justifyContent='center'>
              <Image src='./image/mockup.png' width={138} height={339} />
            </Box>
          </Box>
        </Background>
      </Condition>

      <Layout flexBasis={[24, 32]} />

      <Row justifyContent='space-between' maxWidth={[335, 960]}>
        <Box>
          <Button
            variant='ghostBackgroundWhiteText'
            size='LargeSizelittleRadii'
            icon={<ArrowLeftWhiteIcon width={16} height={16} />}
            widthIcon={48}
            heightIcon={64}
            radiiIcon='little'
          />
        </Box>

        <Box
          height={[58, 60]}
          flexBasis={[175, 778]}
          alignItems='center'
          justifyContent='center'
          borderRadius='little'
          border='thinnestGhostWhite'
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
            variant='ghostBackgroundWhiteText'
            size='LargeSizelittleRadii'
            icon={<ArrowRightWhiteIcon width={16} height={16} />}
            widthIcon={48}
            heightIcon={64}
            radiiIcon='little'
          />
        </Box>
      </Row>

      <Layout flexBasis={[64, 160]} flexShrink='0' />
      <Layout flexBasis={[64, 80]} flexShrink='0' />
    </Column>
  )
}
