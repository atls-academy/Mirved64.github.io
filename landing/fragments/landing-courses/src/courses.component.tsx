import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Image }            from '@ui/image'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'

export const Courses = () => (
  <Box backgroundColor='background.courses' width='100%' margin='0 auto' flexDirection='column'>
    <Layout flexBasis={[64, 160]} />

    <Row>
      <Layout flexBasis={[20, 230]} flexShrink='1' />

      <Column flexBasis={[335, 1610]} flexGrow='1' margin='0 auto' flexShrink='1'>
        <Row justifyContent='space-between' alignItems='center'>
          <Box flexWrap='wrap' flexShrink='1'>
            <Text
              color='text.courses.primary'
              fontSize={['regular', 'stupendous']}
              fontWeight='normal'
              lineHeight={['common', 'stupendous']}
              letter='-2%'
            >
              <FormattedMessage id='coursesTitle' />
            </Text>
          </Box>

          <Box flexWrap='wrap' display={['none', 'flex']} flexShrink='1'>
            <NextLink>
              <Text
                color='text.courses.primary'
                fontSize='small'
                fontWeight='normal'
                lineHeight='small'
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
          <Box flexWrap='wrap' flexBasis={[112, 710]}>
            <Text
              color='text.courses.primary'
              fontSize={['small', 'ordinary']}
              fontWeight='normal'
              lineHeight={['normal', 'regular']}
            >
              <FormattedMessage id='coursesSubtitleAtlantisPowerBroker' />
            </Text>
          </Box>

          <Layout flexBasis={[20, 0]} />

          <Box display={['none', 'flex']} flexBasis={559} flexWrap='wrap'>
            <Text
              color='text.courses.primary'
              fontSize='ordinary'
              fontWeight='normal'
              lineHeight='regular'
            >
              <FormattedMessage id='coursesSubtitleAdvantageOfLearningDesktop' />
            </Text>
          </Box>

          <Box display={['flex', 'none']} flexBasis={84} flexWrap='wrap'>
            <Text
              color='text.courses.primary'
              fontSize='small'
              fontWeight='normal'
              lineHeight='normal'
            >
              <FormattedMessage id='coursesSubtitleAdvantageOfLearningMobile' />
            </Text>
          </Box>
        </Box>

        <Layout flexBasis={[40, 80]} />

        <Box justifyContent='space-between' flexDirection={['column', 'row']}>
          <Column order={[2, 0]}>
            <Layout>
              <Box flexBasis={[335, 1160]} flexShrink='1' flexGrow='1'>
                <Layout flexBasis={[16, 40]} flexShrink='0' />

                <Column>
                  <Layout flexBasis={[16, 40]} flexShrink='0' />

                  <Column>
                    <Box flexShrink='0'>
                      <Text
                        color='text.courses.primary'
                        fontSize={['medium', 'regular']}
                        fontWeight='normal'
                        lineHeight={['normal', 'mean']}
                      >
                        <FormattedMessage id='coursesCardFrontendTitle' />
                      </Text>
                    </Box>

                    <Layout flexBasis={[12, 16]} flexShrink='0' />

                    <Box display={['none', 'flex']} maxWidth={694} flexShrink='1'>
                      <Text
                        color='text.courses.primary'
                        fontSize='small'
                        fontWeight='normal'
                        lineHeight='normal'
                      >
                        <FormattedMessage id='coursesCardFrontendTextDesktop' />
                      </Text>
                    </Box>

                    <Box display={['flex', 'none']} flexGrow='1'>
                      <Text
                        color='text.courses.primary'
                        fontSize='tiny'
                        fontWeight='normal'
                        lineHeight='small'
                      >
                        <FormattedMessage id='coursesCardFrontendTextMobile' />
                      </Text>
                    </Box>

                    <Layout flexBasis={[52, 0]} flexShrink='0' />

                    <Layout flexBasis={[0, 120]} flexShrink='0' />

                    <Box flexShrink='0'>
                      <Text
                        color='text.courses.primary'
                        fontSize={['medium', 'regular']}
                        fontWeight='normal'
                        lineHeight={['normal', 'mean']}
                      >
                        <FormattedMessage id='coursesCardBasisTitle' />
                      </Text>
                    </Box>

                    <Layout flexBasis={[12, 16]} flexShrink='0' />

                    <Box display={['none', 'flex']} maxWidth={694} flexShrink='1'>
                      <Text
                        color='text.courses.primary'
                        fontSize='small'
                        fontWeight='normal'
                        lineHeight='normal'
                      >
                        <FormattedMessage id='coursesCardBasisTextDesktop' />
                      </Text>
                    </Box>

                    <Box display={['flex', 'none']} flexGrow='1'>
                      <Text
                        color='text.courses.primary'
                        fontSize='tiny'
                        fontWeight='normal'
                        lineHeight='small'
                      >
                        <FormattedMessage id='coursesCardBasisTextMobile' />
                      </Text>
                    </Box>
                  </Column>

                  <Layout flexBasis={[36, 80]} flexShrink='0' />
                </Column>

                <Layout flexBasis={[16, 0]} flexShrink='0' />
              </Box>
            </Layout>

            <Layout display={['none', 'flex']}>
              <Layout flexBasis={32} flexShrink='0' />

              <Column>
                <Layout flexBasis={32} />

                <Row justifyContent='space-between'>
                  <Box flexShrink='1' flexBasis={496}>
                    <Text
                      color='text.courses.primary'
                      fontSize='regular'
                      fontWeight='normal'
                      lineHeight='mean'
                    >
                      <FormattedMessage id='coursesSmallCardLibraries' />
                    </Text>
                  </Box>

                  <Box flexShrink='1' flexBasis={496}>
                    <Text
                      color='text.courses.primary'
                      fontSize='regular'
                      fontWeight='normal'
                      lineHeight='mean'
                    >
                      <FormattedMessage id='coursesSmallCardDesign' />
                    </Text>
                  </Box>
                </Row>

                <Layout flexBasis={32} />
              </Column>

              <Layout flexBasis={32} flexShrink='0' />
            </Layout>
          </Column>

          <Row flexBasis={[192, 410]} order={[1, 0]}>
            <Layout flexBasis={[16, 32]} flexShrink='0' />

            <Column>
              <Layout flexBasis={[16, 32]} flexShrink='0' />

              <Box>
                <Text
                  color='text.courses.primary'
                  fontSize={['tiny', 'little']}
                  fontWeight='normal'
                  lineHeight={['compact', 'medium']}
                >
                  <FormattedMessage id='coursesSidebarSubtitle' />
                </Text>
              </Box>

              <Layout flexBasis={[16, 74]} flexShrink='0' />

              <Box display={['none', 'flex']} margin='0 auto'>
                <Image src='./image/Default.png' width={240} height={240} />
              </Box>

              <Layout flexBasis={[0, 62]} flexShrink='0' />

              <Box flexDirection={['row', 'column']} alignItems={['center', 'normal']}>
                <Box maxWidth={[32, 36]}>
                  <Text
                    color='text.courses.primary'
                    fontSize={['giant', 'enormous']}
                    fontWeight='normal'
                    lineHeight={['large', 'big']}
                  >
                    <FormattedMessage id='coursesSidebarNumber' />
                  </Text>
                </Box>

                <Layout flexBasis={[12, 8]} />

                <Box flexBasis={[131, 44]} maxWidth={['100%', 188]}>
                  <Text
                    color='text.courses.primary'
                    fontSize={['atom', 'tiny']}
                    fontWeight='normal'
                    lineHeight={['minor', 'small']}
                  >
                    <FormattedMessage id='coursesSidebarSign' />
                  </Text>
                </Box>

                <Layout flexBasis={[64, 0]} flexShrink='5' flexGrow='1' />

                <Box display={['flex', 'none']} flexShrink='0'>
                  <Image src='./image/Default.png' width={64} height={64} />
                </Box>
              </Box>

              <Layout flexBasis={[16, 68]} flexShrink='0' />

              <Box display={['none', 'flex']}>
                <Text
                  color='text.courses.primary'
                  fontSize='small'
                  fontWeight='normal'
                  lineHeight='small'
                >
                  <FormattedMessage id='coursesSidebarButtonDesktop' />
                </Text>
              </Box>
            </Column>

            <Layout flexBasis={[16, 32]} flexShrink='1' />
          </Row>
        </Box>
      </Column>

      <Layout flexBasis={[20, 80]} flexShrink='1' />
    </Row>

    <Row display={['flex', 'none']} overflow='hidden'>
      <Layout flexBasis={32} flexShrink='0' />

      <Row justifyContent='space-between'>
        <Box flexShrink='0' flexBasis={228}>
          <Text
            color='text.courses.primary'
            fontSize='small'
            fontWeight='normal'
            lineHeight='tiddly'
          >
            <FormattedMessage id='coursesSmallCardLibraries' />
          </Text>
        </Box>

        <Box flexShrink='0' flexBasis={228}>
          <Text
            color='text.courses.primary'
            fontSize='small'
            fontWeight='normal'
            lineHeight='tiddly'
          >
            <FormattedMessage id='coursesSmallCardDesign' />
          </Text>
        </Box>
      </Row>
    </Row>

    <Layout flexBasis={[52, 160]} flexShrink='0' />

    <Row flexWrap='wrap' display={['flex', 'none']}>
      <Layout flexBasis={20} />

      <Box>
        <NextLink>
          <Text
            color='text.courses.primary'
            fontSize='little'
            fontWeight='normal'
            lineHeight='minor'
          >
            <FormattedMessage id='coursesButtonMobile' />
          </Text>
        </NextLink>
      </Box>
    </Row>

    <Layout flexBasis={[64, 0]} />
  </Box>
)
