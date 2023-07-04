import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { DefaultIcon }      from '@ui/icons'
import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'

export const Courses = () => (
  <Box backgroundColor='background.courses' width='100%' margin='0 auto'>
    <Layout flexBasis={[0, 230]} />
    <Column flexBasis={[335, 1610]} margin={['0 auto', '0']}>
      <Layout flexBasis={[64, 160]} />
      <Row justifyContent='space-between' alignItems='center'>
        <Box flexWrap='wrap'>
          <Text
            color='text.secondary'
            fontSize={['regular', 'stupendous']}
            fontWeight='normal'
            lineHeight={['common', 'stupendous']}
            letter='-2%'
          >
            <FormattedMessage id='coursesTitle' />
          </Text>
        </Box>
        <Box flexWrap='wrap' display={['none', 'flex']}>
          <NextLink>
            <Text
              color='text.secondary'
              fontSize='big'
              fontWeight='normal'
              lineHeight='normalSmall'
            >
              <FormattedMessage id='coursesButtonDesktop' />
            </Text>
          </NextLink>
        </Box>
      </Row>
      <Layout flexBasis={[40, 80]} />
      <Divider backgroundColor='divider.secondary' weight='1px' />
      <Layout flexBasis={[40, 80]} />
      <Box flexDirection={['column', 'row']} justifyContent='space-between'>
        <Box flexWrap='wrap' flexBasis={['content', 725]}>
          <Text
            color='text.secondary'
            fontSize={['small', 'ordinary']}
            fontWeight='normal'
            lineHeight={['normal', 'regular']}
          >
            <FormattedMessage id='coursesSubtitlePowerBroker' />
          </Text>
        </Box>
        <Layout display={['flex', 'none']} flexDirection='column' flexBasis={20} />
        <Box flexWrap='wrap' flexBasis={['content', 600]}>
          <Text
            color='text.secondary'
            fontSize={['small', 'ordinary']}
            fontWeight='normal'
            lineHeight={['normal', 'regular']}
          >
            <FormattedMessage id='coursesSubtitlePractice' />
          </Text>
        </Box>
      </Box>
      <Layout flexBasis={[40, 80]} />
      <Box flexDirection={['column', 'row']} justifyContent='space-between'>
        <Column flexBasis={['content', 1160]} order={['2', '0']}>
          <Layout flexBasis={[0, 40]} />
          <Box flexBasis={[300, 'content']}>
            <Layout flexBasis={[0, 32]} />
            <Column flexBasis={[303, 694]} margin={['0 auto', '0']}>
              <Column flexBasis='content'>
                <Layout flexBasis={[0, 32]} />
                <Box>
                  <Text
                    color='text.secondary'
                    fontSize={['medium', 'regular']}
                    fontWeight='normal'
                    lineHeight={['normal', 'regular']}
                  >
                    <FormattedMessage id='coursesCardTitleFrontend' />
                  </Text>
                </Box>
                <Layout flexBasis={[12, 16]} />
                <Box display={['none', 'flex']}>
                  <Text
                    color='text.secondary'
                    fontSize='small'
                    fontWeight='normal'
                    lineHeight='normal'
                  >
                    <FormattedMessage id='coursesCardTextFrontendDesktop' />
                  </Text>
                </Box>
                <Layout flexBasis={120} display={['none', 'flex']} />
                <Box display={['flex', 'none']}>
                  <Text
                    color='text.secondary'
                    fontSize='tiny'
                    fontWeight='normal'
                    lineHeight='small'
                  >
                    <FormattedMessage id='coursesCardTextFrontendMobile' />
                  </Text>
                </Box>
                <Layout flexBasis={52} display={['flex', 'none']} />
              </Column>
              <Column flexBasis='content'>
                <Box>
                  <Text
                    color='text.secondary'
                    fontSize={['medium', 'regular']}
                    fontWeight='normal'
                    lineHeight={['normal', 'regular']}
                  >
                    <FormattedMessage id='coursesCardTitleBasis' />
                  </Text>
                </Box>
                <Layout flexBasis={[12, 16]} />
                <Box display={['none', 'flex']}>
                  <Text
                    color='text.secondary'
                    fontSize='small'
                    fontWeight='normal'
                    lineHeight='normal'
                  >
                    <FormattedMessage id='coursesCardTextBasisDesktop' />
                  </Text>
                </Box>
                <Box display={['flex', 'none']}>
                  <Text
                    color='text.secondary'
                    fontSize='tiny'
                    fontWeight='normal'
                    lineHeight='small'
                  >
                    <FormattedMessage id='coursesCardTextBasisMobile' />
                  </Text>
                </Box>
                <Layout flexBasis={[36, 112]} />
              </Column>
              <Row justifyContent='space-between' overflow={['hidden', 'visible']}>
                <Layout flexBasis={16} display={['flex', 'none']} />
                <Box flexShrink='0' flexBasis={[200, 496]}>
                  <Text
                    color='text.secondary'
                    fontSize={['small', 'regular']}
                    fontWeight='normal'
                    lineHeight={['small', 'regular']}
                  >
                    <FormattedMessage id='coursesSmallCardLibraries' />
                  </Text>
                </Box>
                <Box flexShrink='0' flexBasis={[200, 496]}>
                  <Text
                    color='text.secondary'
                    fontSize={['small', 'regular']}
                    fontWeight='normal'
                    lineHeight={['small', 'regular']}
                  >
                    <FormattedMessage id='coursesSmallCardDesign' />
                  </Text>
                </Box>
              </Row>
            </Column>
          </Box>
          <Layout flexBasis={[52, 0]} />
        </Column>
        <Box flexBasis={['content', 410]}>
          <Column flexBasis={[303, 346]} order={['1', '0']} margin='0 auto'>
            <Layout flexBasis={[0, 32]} />
            <Box maxWidth={['none', '346px']}>
              <Text
                color='text.secondary'
                fontSize='little'
                fontWeight='normal'
                lineHeight={['little', 'medium']}
              >
                <FormattedMessage id='coursesSidebarSubtitle' />
              </Text>
            </Box>
            <Layout flexBasis={[0, 74]} />
            <Box display={['none', 'flex']} width='240px' height='240px' margin='0 auto'>
              <DefaultIcon width='100%' height='100%' />
            </Box>
            <Layout flexBasis={[40, 62]} />
            <Box justifyContent='space-between'>
              <Box
                flexDirection={['row', 'column']}
                maxWidth={['content', '100%']}
                alignItems={['center', 'normal']}
                height={['64px', '100%']}
              >
                <Box>
                  <Text
                    color='text.secondary'
                    fontSize={['giant', 'enormous']}
                    fontWeight='normal'
                    lineHeight='big'
                  >
                    <FormattedMessage id='coursesSidebarNumber' />
                  </Text>
                </Box>
                <Layout display={['flex', 'none']} flexBasis={12} />

                <Box flexBasis={[125, 'content']} maxWidth={['100%', 188]}>
                  <Text
                    color='text.secondary'
                    fontSize={['atom', 'tiny']}
                    fontWeight='normal'
                    lineHeight={['tiny', 'small']}
                  >
                    <FormattedMessage id='coursesSidebarSign' />
                  </Text>
                </Box>
              </Box>
              <Box display={['flex', 'none']} width='74px' height='64px'>
                <ImageBlock src='./image/Default.png' />
              </Box>
            </Box>
            <Layout flexBasis={[56, 68]} />
            <Box display={['none', 'flex']}>
              <Text color='text.secondary' fontSize='small' fontWeight='normal' lineHeight='small'>
                <FormattedMessage id='coursesSidebarButtonDesktop' />
              </Text>
            </Box>
          </Column>
        </Box>
      </Box>
      <Box flexWrap='wrap' display={['flex', 'none']}>
        <NextLink>
          <Text color='text.secondary' fontSize='little' fontWeight='normal' lineHeight='little'>
            <FormattedMessage id='coursesButtonMobile' />
          </Text>
        </NextLink>
      </Box>
      <Layout flexBasis={[64, 240]} />
    </Column>
    <Layout flexBasis={[0, 80]} />
  </Box>
)
