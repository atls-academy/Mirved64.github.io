import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'

export const Courses = () => (
  <Box backgroundColor='background.courses' width='100%' margin='0 auto' flexDirection='column'>
    <Layout flexBasis={[64, 160]} flexShrink='0' />

    <Box>
      <Layout flexBasis={[20, 230]} flexShrink='0' />

      <Column flexBasis={[335, 1610]} flexGrow={[1, 0]} margin='0 auto'>
        <Row justifyContent='space-between' alignItems='center'>
          <Box flexWrap='wrap' flexShrink='1'>
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

          <Box flexWrap='wrap' display={['none', 'flex']} flexShrink='1'>
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
          <Box flexWrap='wrap' flexBasis={[112, 710]}>
            <Text
              color='text.secondary'
              fontSize={['small', 'ordinary']}
              fontWeight='normal'
              lineHeight={['normal', 'regular']}
            >
              <FormattedMessage id='coursesSubtitlePowerBroker' />
            </Text>
          </Box>

          <Layout flexBasis={[20, 0]} />

          <Box flexWrap='wrap' flexBasis={[84, 559]}>
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

        <Box justifyContent='space-between' flexDirection={['column', 'row']}>
          <Column order={[2, 0]} >
            <Box>
              <Box flexBasis={[335, 1160]} flexShrink='1' flexGrow='1'>
                <Layout flexBasis={[16, 40]} flexShrink='0' />

                <Column >
                  <Layout flexBasis={[16, 40]} flexShrink='0' />

                  <Column>
                    <Box flexShrink='0'>
                      <Text
                        color='text.secondary'
                        fontSize={['medium', 'regular']}
                        fontWeight='normal'
                        lineHeight={['normal', 'regular']}
                      >
                        <FormattedMessage id='coursesCardTitleFrontend' />
                      </Text>
                    </Box>

                    <Layout flexBasis={[12, 16]} flexShrink='0' />

                    <Box maxWidth={694} flexShrink='1'>
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

                      <Box display={['flex', 'none']} >
                        <Text
                          color='text.secondary'
                          fontSize='tiny'
                          fontWeight='normal'
                          lineHeight='small'
                        >
                          <FormattedMessage id='coursesCardTextFrontendMobile' />
                        </Text>
                      </Box>
                    </Box>

                    <Layout flexBasis={[52, 0]} flexShrink='0' />

                    <Layout flexBasis={[0, 120]} flexShrink='0' />

                    <Box flexShrink='0'>
                      <Text
                        color='text.secondary'
                        fontSize={['medium', 'regular']}
                        fontWeight='normal'
                        lineHeight={['normal', 'regular']}
                      >
                        <FormattedMessage id='coursesCardTitleBasis' />
                      </Text>
                    </Box>

                    <Layout flexBasis={[12, 16]} flexShrink='0' />

                    <Box display={['none', 'flex']} maxWidth={694} flexShrink='1'>
                      <Text
                        color='text.secondary'
                        fontSize='small'
                        fontWeight='normal'
                        lineHeight='normal'
                      >
                        <FormattedMessage id='coursesCardTextBasisDesktop' />
                      </Text>
                    </Box>

                    <Box display={['flex', 'none']} flexGrow='1'>
                      <Text
                        color='text.secondary'
                        fontSize='tiny'
                        fontWeight='normal'
                        lineHeight='small'
                      >
                        <FormattedMessage id='coursesCardTextBasisMobile' />
                      </Text>
                    </Box>

                    <Layout flexBasis={[36, 80]} flexShrink='0' />
                  </Column>
                </Column>

                <Layout flexBasis={[16, 0]} flexShrink='0' />
              </Box>
            </Box>

            <Box display={['none', 'flex']}>
              <Layout flexBasis={32} flexShrink='0' />

              <Column>
                <Layout flexBasis={32} />

                <Box justifyContent='space-between'>
                  <Box flexShrink='1' flexBasis={496}>
                    <Text
                      color='text.secondary'
                      fontSize='regular'
                      fontWeight='normal'
                      lineHeight='regular'
                    >
                      <FormattedMessage id='coursesSmallCardLibraries' />
                    </Text>
                  </Box>

                  <Box flexShrink='1' flexBasis={496}>
                    <Text
                      color='text.secondary'
                      fontSize='regular'
                      fontWeight='normal'
                      lineHeight='regular'
                    >
                      <FormattedMessage id='coursesSmallCardDesign' />
                    </Text>
                  </Box>
                </Box>

                <Layout flexBasis={32} />
              </Column>

              <Layout flexBasis={32} flexShrink='0' />
            </Box>
          </Column>

          <Box flexBasis={[192, 410]} order={[1, 0]} >
            <Layout flexBasis={[16, 32]} flexShrink='0' />

            <Column>
              <Layout flexBasis={[16, 32]} flexShrink='0' />

              <Box>
                <Text
                  color='text.secondary'
                  fontSize={['tiny', 'little']}
                  fontWeight='normal'
                  lineHeight={['compact', 'medium']}
                >
                  <FormattedMessage id='coursesSidebarSubtitle' />
                </Text>
              </Box>

              <Layout flexBasis={[16, 74]} flexShrink='0' />

              <Box display={['none', 'flex']} width='240px' height='240px' margin='0 auto'>
                <ImageBlock src='./image/Default.png' />
              </Box>

              <Layout flexBasis={[0, 62]} flexShrink='0' />

              <Box flexDirection={['row', 'column']} alignItems={['center', 'normal']}>
                <Box maxWidth={[32, 36]}>
                  <Text
                    color='text.secondary'
                    fontSize={['giant', 'enormous']}
                    fontWeight='normal'
                    lineHeight='big'
                  >
                    <FormattedMessage id='coursesSidebarNumber' />
                  </Text>
                </Box>

                <Layout flexBasis={[12, 8]} />

                <Box flexBasis={[131, 44]} maxWidth={['100%', 188]}>
                  <Text
                    color='text.secondary'
                    fontSize={['atom', 'tiny']}
                    fontWeight='normal'
                    lineHeight={['tiny', 'small']}
                  >
                    <FormattedMessage id='coursesSidebarSign' />
                  </Text>
                </Box>

                <Layout flexBasis={[64, 0]} flexShrink='5' flexGrow='1' />

                <Box display={['flex', 'none']} width='64px' height='64px' flexShrink='0'>
                  <ImageBlock src='./image/Default.png' />
                </Box>
              </Box>

              <Layout flexBasis={[16, 68]} flexShrink='0' />

              <Box display={['none', 'flex']}>
                <Text
                  color='text.secondary'
                  fontSize='small'
                  fontWeight='normal'
                  lineHeight='small'
                >
                  <FormattedMessage id='coursesSidebarButtonDesktop' />
                </Text>
              </Box>
            </Column>
            <Layout flexBasis={[16, 32]} flexShrink='0' />
          </Box>
        </Box>
      </Column>

      <Layout flexBasis={[20, 80]} flexShrink='0' />
    </Box>

    <Box display={['flex', 'none']} overflow='hidden'>
      <Layout flexBasis={32} flexShrink='0' />

      <Column>
        <Box justifyContent='space-between'>
          <Box flexShrink='0' flexBasis={228}>
            <Text color='text.secondary' fontSize='small' fontWeight='normal' lineHeight='small'>
              <FormattedMessage id='coursesSmallCardLibraries' />
            </Text>
          </Box>

          <Box flexShrink='0' flexBasis={228}>
            <Text color='text.secondary' fontSize='small' fontWeight='normal' lineHeight='small'>
              <FormattedMessage id='coursesSmallCardDesign' />
            </Text>
          </Box>
        </Box>
      </Column>

      <Layout flexBasis={16} flexShrink='0' />
    </Box>

    <Layout flexBasis={[52, 160]} flexShrink='0' />

    <Box flexWrap='wrap' display={['flex', 'none']}>
      <Layout flexBasis={20} />

      <NextLink>
        <Text color='text.secondary' fontSize='little' fontWeight='normal' lineHeight='little'>
          <FormattedMessage id='coursesButtonMobile' />
        </Text>
      </NextLink>
    </Box>

    <Layout flexBasis={[64, 0]} />
  </Box>
)
