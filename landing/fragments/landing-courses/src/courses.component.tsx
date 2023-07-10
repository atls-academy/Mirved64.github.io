import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Image }            from '@ui/image'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'

export const Courses = () => (
  <Box backgroundColor='background.courses' width='100%' margin='0 auto' flexDirection='column'>
    <Layout flexBasis={[64, 160]} />

    <Row>
      <Layout flexBasis={[20, 230]} flexShrink='1' />

      <Column flexBasis={[335, 1610]} flexGrow={[1, 1]} margin='0 auto' flexShrink='1'>
        <Row justifyContent='space-between' alignItems='center'>
          <Layout flexWrap='wrap' flexShrink='1'>
            <Text
              color='text.courses.primary'
              fontSize={['regular', 'stupendous']}
              fontWeight='normal'
              lineHeight={['common', 'stupendous']}
              letter='-2%'
            >
              <FormattedMessage id='coursesTitle' />
            </Text>
          </Layout>

          <Layout flexWrap='wrap' display={['none', 'flex']} flexShrink='1'>
            <NextLink>
              <Text
                color='text.courses.primary'
                fontSize='big'
                fontWeight='normal'
                lineHeight='normalSmall'
              >
                <FormattedMessage id='coursesButtonDesktop' />
              </Text>
            </NextLink>
          </Layout>
        </Row>

        <Layout flexBasis={[40, 80]} />

        <Divider backgroundColor='divider.secondary' weight='1px' />

        <Layout flexBasis={[40, 80]} />

        <Box flexDirection={['column', 'row']} justifyContent='space-between'>
          <Layout flexWrap='wrap' flexBasis={[112, 710]}>
            <Text
              color='text.courses.primary'
              fontSize={['small', 'ordinary']}
              fontWeight='normal'
              lineHeight={['normal', 'regular']}
            >
              <FormattedMessage id='coursesSubtitlePowerBroker' />
            </Text>
          </Layout>

          <Layout flexBasis={[20, 0]} />

          <Layout flexWrap='wrap' flexBasis={[84, 559]}>
            <Text
              color='text.courses.primary'
              fontSize={['small', 'ordinary']}
              fontWeight='normal'
              lineHeight={['normal', 'regular']}
            >
              <FormattedMessage id='coursesSubtitlePractice' />
            </Text>
          </Layout>
        </Box>

        <Layout flexBasis={[40, 80]} />

        <Box justifyContent='space-between' flexDirection={['column', 'row']}>
          <Column order={[2, 0]}>
            <Layout>
              <Layout flexBasis={[335, 1160]} flexShrink='1' flexGrow='1'>
                <Layout flexBasis={[16, 40]} flexShrink='0' />

                <Column>
                  <Layout flexBasis={[16, 40]} flexShrink='0' />

                  <Column>
                    <Layout flexShrink='0'>
                      <Text
                        color='text.courses.primary'
                        fontSize={['medium', 'regular']}
                        fontWeight='normal'
                        lineHeight={['normal', 'regular']}
                      >
                        <FormattedMessage id='coursesCardTitleFrontend' />
                      </Text>
                    </Layout>

                    <Layout flexBasis={[12, 16]} flexShrink='0' />

                    <Layout display={['none', 'flex']} maxWidth={694} flexShrink='1'>
                      <Text
                        color='text.courses.primary'
                        fontSize='small'
                        fontWeight='normal'
                        lineHeight='normal'
                      >
                        <FormattedMessage id='coursesCardTextFrontendDesktop' />
                      </Text>
                    </Layout>

                    <Layout display={['flex', 'none']} flexGrow='1'>
                      <Text
                        color='text.courses.primary'
                        fontSize='tiny'
                        fontWeight='normal'
                        lineHeight='small'
                      >
                        <FormattedMessage id='coursesCardTextFrontendMobile' />
                      </Text>
                    </Layout>

                    <Layout flexBasis={[52, 0]} flexShrink='0' />

                    <Layout flexBasis={[0, 120]} flexShrink='0' />

                    <Layout flexShrink='0'>
                      <Text
                        color='text.courses.primary'
                        fontSize={['medium', 'regular']}
                        fontWeight='normal'
                        lineHeight={['normal', 'regular']}
                      >
                        <FormattedMessage id='coursesCardTitleBasis' />
                      </Text>
                    </Layout>

                    <Layout flexBasis={[12, 16]} flexShrink='0' />

                    <Layout display={['none', 'flex']} maxWidth={694} flexShrink='1'>
                      <Text
                        color='text.courses.primary'
                        fontSize='small'
                        fontWeight='normal'
                        lineHeight='normal'
                      >
                        <FormattedMessage id='coursesCardTextBasisDesktop' />
                      </Text>
                    </Layout>

                    <Layout display={['flex', 'none']} flexGrow='1'>
                      <Text
                        color='text.courses.primary'
                        fontSize='tiny'
                        fontWeight='normal'
                        lineHeight='small'
                      >
                        <FormattedMessage id='coursesCardTextBasisMobile' />
                      </Text>
                    </Layout>
                  </Column>

                  <Layout flexBasis={[36, 80]} flexShrink='0' />
                </Column>

                <Layout flexBasis={[16, 0]} flexShrink='0' />
              </Layout>
            </Layout>

            <Row display={['none', 'flex']}>
              <Layout flexBasis={32} flexShrink='0' />

              <Column>
                <Layout flexBasis={32} />

                <Row justifyContent='space-between'>
                  <Layout flexShrink='1' flexBasis={496}>
                    <Text
                      color='text.courses.primary'
                      fontSize='regular'
                      fontWeight='normal'
                      lineHeight='regular'
                    >
                      <FormattedMessage id='coursesSmallCardLibraries' />
                    </Text>
                  </Layout>

                  <Layout flexShrink='1' flexBasis={496}>
                    <Text
                      color='text.courses.primary'
                      fontSize='regular'
                      fontWeight='normal'
                      lineHeight='regular'
                    >
                      <FormattedMessage id='coursesSmallCardDesign' />
                    </Text>
                  </Layout>
                </Row>

                <Layout flexBasis={32} />
              </Column>

              <Layout flexBasis={32} flexShrink='0' />
            </Row>
          </Column>

          <Layout flexBasis={[192, 410]} order={[1, 0]}>
            <Layout flexBasis={[16, 32]} flexShrink='0' />

            <Column>
              <Layout flexBasis={[16, 32]} flexShrink='0' />

              <Layout>
                <Text
                  color='text.courses.primary'
                  fontSize={['tiny', 'little']}
                  fontWeight='normal'
                  lineHeight={['compact', 'medium']}
                >
                  <FormattedMessage id='coursesSidebarSubtitle' />
                </Text>
              </Layout>

              <Layout flexBasis={[16, 74]} flexShrink='0' />

              <Box display={['none', 'flex']} margin='0 auto'>
                <Image src='./image/Default.png' width={240} height={240} />
              </Box>

              <Layout flexBasis={[0, 62]} flexShrink='0' />

              <Box flexDirection={['row', 'column']} alignItems={['center', 'normal']}>
                <Layout maxWidth={[32, 36]}>
                  <Text
                    color='text.courses.primary'
                    fontSize={['giant', 'enormous']}
                    fontWeight='normal'
                    lineHeight='big'
                  >
                    <FormattedMessage id='coursesSidebarNumber' />
                  </Text>
                </Layout>

                <Layout flexBasis={[12, 8]} />

                <Layout flexBasis={[131, 44]} maxWidth={['100%', 188]}>
                  <Text
                    color='text.courses.primary'
                    fontSize={['atom', 'tiny']}
                    fontWeight='normal'
                    lineHeight={['tiny', 'small']}
                  >
                    <FormattedMessage id='coursesSidebarSign' />
                  </Text>
                </Layout>

                <Layout flexBasis={[64, 0]} flexShrink='5' flexGrow='1' />

                <Box display={['flex', 'none']} flexShrink='0'>
                  <Image src='./image/Default.png' width={64} height={64} />
                </Box>
              </Box>

              <Layout flexBasis={[16, 68]} flexShrink='0' />

              <Layout display={['none', 'flex']}>
                <Text
                  color='text.courses.primary'
                  fontSize='small'
                  fontWeight='normal'
                  lineHeight='small'
                >
                  <FormattedMessage id='coursesSidebarButtonDesktop' />
                </Text>
              </Layout>
            </Column>

            <Layout flexBasis={[16, 32]} flexShrink='1' />
          </Layout>
        </Box>
      </Column>

      <Layout flexBasis={[20, 80]} flexShrink='1' />
    </Row>

    <Row display={['flex', 'none']} overflow='hidden'>
      <Layout flexBasis={32} flexShrink='0' />

      <Row justifyContent='space-between'>
        <Layout flexShrink='0' flexBasis={228}>
          <Text
            color='text.courses.primary'
            fontSize='small'
            fontWeight='normal'
            lineHeight='small'
          >
            <FormattedMessage id='coursesSmallCardLibraries' />
          </Text>
        </Layout>

        <Layout flexShrink='0' flexBasis={228}>
          <Text
            color='text.courses.primary'
            fontSize='small'
            fontWeight='normal'
            lineHeight='small'
          >
            <FormattedMessage id='coursesSmallCardDesign' />
          </Text>
        </Layout>
      </Row>
    </Row>

    <Layout flexBasis={[52, 160]} flexShrink='0' />

    <Row flexWrap='wrap' display={['flex', 'none']}>
      <Layout flexBasis={20} />

      <Layout>
        <NextLink>
          <Text
            color='text.courses.primary'
            fontSize='little'
            fontWeight='normal'
            lineHeight='little'
          >
            <FormattedMessage id='coursesButtonMobile' />
          </Text>
        </NextLink>
      </Layout>
    </Row>

    <Layout flexBasis={[64, 0]} />
  </Box>
)
