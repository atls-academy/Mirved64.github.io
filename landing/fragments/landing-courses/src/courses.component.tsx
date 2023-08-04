import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Card }             from '@ui/card'
import { Condition }        from '@ui/condition'
import { Divider }          from '@ui/divider'
import { ArrowRightIcon }   from '@ui/icons'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Swiper }           from '@ui/swiper'
import { SwiperSlide }      from '@ui/swiper'
import { Text }             from '@ui/text'
import { useWindowWidth }   from '@ui/utils'

import { Info }             from './info'
import { Sidebar }          from './sidebar'

export const Courses = () => {
  const { formatMessage } = useIntl()
  const { isMobile, isDesktop } = useWindowWidth()

  return (
    <Box backgroundColor='background.white' justifyContent='center'>
      <Column flexGrow='1'>
        <Layout flexBasis={[64, 160]} />

        <Row>
          <Layout flexBasis={[20, 230]} />

          <Column flexBasis={[335, 1610]} flexGrow='1'>
            <Row justifyContent='space-between' alignItems='center'>
              <Box flexWrap='wrap'>
                <Text
                  color='text.black'
                  fontSize={['regular', 'stupendous']}
                  fontWeight='normal'
                  lineHeight={['common', 'stupendous']}
                >
                  <FormattedMessage id='coursesTitle' />
                </Text>
              </Box>

              <Condition match={isDesktop}>
                <Box width={254} height={72} flexShrink='0'>
                  <Button
                    variant='transparentBackgroundBlackText'
                    gap={24}
                    icon={<ArrowRightIcon width={16} height={16} />}
                    widthIcon={48}
                    heightIcon={48}
                    backgroundIcon='background.white'
                  >
                    <NextLink>
                      <Text fontSize='small' fontWeight='normal' lineHeight='small'>
                        <FormattedMessage id='coursesButton' />
                      </Text>
                    </NextLink>
                  </Button>
                </Box>
              </Condition>
            </Row>

            <Layout flexBasis={[40, 80]} />

            <Divider backgroundColor='divider.black' weight='1px' />

            <Layout flexBasis={[40, 80]} />

            <Info />

            <Layout flexBasis={[40, 80]} />

            <Box flexDirection={['column', 'row']}>
              <Column order={[3, 0]} flexBasis={[335, 1160]} flexGrow='1'>
                <Card
                  indent={[104, 214]}
                  category={formatMessage({
                    id: 'coursesCardFrontendCategory',
                  })}
                  titleDesktop={formatMessage({
                    id: 'coursesCardFrontendTitle',
                  })}
                  description={formatMessage({
                    id: 'coursesCardFrontendText',
                  })}
                />

                <Layout flexBasis={[20, 40]} />

                <Card
                  indent={[49, 54]}
                  category={formatMessage({
                    id: 'coursesCardBasisCategory',
                  })}
                  titleDesktop={formatMessage({
                    id: 'coursesCardBasisTitle',
                  })}
                  description={formatMessage({
                    id: 'coursesCardBasisText',
                  })}
                />

                <Layout flexBasis={[20, 40]} />

                <Condition match={isDesktop}>
                  <Row>
                    <Card
                      indent={126}
                      category={formatMessage({
                        id: 'coursesCardLearningMaterial',
                      })}
                      titleDesktop={formatMessage({
                        id: 'coursesCardLearningMaterialLibraries',
                      })}
                    />

                    <Layout flexBasis={[20, 40]} />

                    <Card
                      indent={126}
                      category={formatMessage({
                        id: 'coursesCardLearningMaterial',
                      })}
                      titleDesktop={formatMessage({
                        id: 'coursesCardLearningMaterialDesign',
                      })}
                    />
                  </Row>
                </Condition>
              </Column>

              <Layout flexBasis={[0, 40]} />

              <Sidebar />
            </Box>
          </Column>

          <Layout flexBasis={[20, 80]} />
        </Row>

        <Condition match={isMobile}>
          <Box>
            <Swiper spaceBetween={20} slidesPerView={1.23} className='swiper-1'>
              <SwiperSlide>
                <Card
                  indent={62}
                  category={formatMessage({
                    id: 'coursesCardLearningMaterial',
                  })}
                  isMobileOnly
                  titleDesktop={formatMessage({
                    id: 'coursesCardLearningMaterialLibraries',
                  })}
                  titleMobile={formatMessage({
                    id: 'coursesCardLearningMaterialLibraries',
                  })}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Card
                  indent={62}
                  category={formatMessage({
                    id: 'coursesCardLearningMaterial',
                  })}
                  isMobileOnly
                  titleDesktop={formatMessage({
                    id: 'coursesCardLearningMaterialDesign',
                  })}
                  titleMobile={formatMessage({
                    id: 'coursesCardLearningMaterialDesign',
                  })}
                />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Condition>

        <Layout flexBasis={[52, 160]} />

        <Condition match={isMobile}>
          <Row>
            <Layout flexBasis={20} />

            <Box width={254} height={72} alignItems='center'>
              <NextLink path='/' width='100%'>
                <Button
                  variant='transparentBackgroundBlackText'
                  gap={24}
                  icon={<ArrowRightIcon width={16} height={16} />}
                  widthIcon={48}
                  heightIcon={48}
                  backgroundIcon='background.white'
                >
                  <Text fontSize='small' fontWeight='normal' lineHeight='small'>
                    <FormattedMessage id='coursesButton' />
                  </Text>
                </Button>
              </NextLink>
            </Box>
          </Row>
        </Condition>

        <Layout flexBasis={[64, 0]} />
      </Column>
    </Box>
  )
}
