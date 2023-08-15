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
    <Column>
      <Layout flexBasis={[64, 160]} />

      <Row>
        <Layout flexBasis={[20, 230]} />

        <Column flexBasis={[335, 1610]} flexGrow='1'>
          <Row alignItems='center'>
            <Box flexWrap='wrap'>
              <Text
                color='text.primary'
                fontSize={['regular', 'stupendous']}
                lineHeight={['common', 'stupendous']}
              >
                <FormattedMessage id='courses.title' />
              </Text>
            </Box>

            <Layout flexBasis={20} flexGrow='1' />

            <Condition match={isDesktop}>
              <Box width={254} flexShrink='0'>
                <Button
                  variant='primaryBackgroundWhiteText'
                  size='big'
                  icon={<ArrowRightIcon width={16} height={16} />}
                  widthIcon={48}
                  heightIcon={48}
                  backgroundIcon='background.white'
                >
                  <NextLink>
                    <Text color='white' fontSize='small' lineHeight='small'>
                      <FormattedMessage id='courses.button.all-materials' />
                    </Text>
                  </NextLink>
                </Button>
              </Box>
            </Condition>
          </Row>

          <Layout flexBasis={[40, 80]} />

          <Divider backgroundColor='divider.grayGhost' weight={1} />

          <Layout flexBasis={[40, 80]} />

          <Info />

          <Layout flexBasis={[40, 80]} />

          <Box flexDirection={['column', 'row']}>
            <Column order={[3, 0]} flexBasis={[335, 1160]} flexGrow='1'>
              <Card
                indent={[148, 214]}
                category={formatMessage({
                  id: 'courses.card.training',
                })}
                widthCategoryBox={[80, 104]}
                titleDesktop={formatMessage({
                  id: 'courses.card.frontend-engineer',
                })}
                description={formatMessage({
                  id: 'courses.card.you-will-learn-fundamental-knowledge-in-it',
                })}
              />

              <Layout flexBasis={[20, 40]} />

              <Card
                indent={[93, 56]}
                category={formatMessage({
                  id: 'courses.card.minicourse',
                })}
                widthCategoryBox={[87, 112]}
                titleDesktop={formatMessage({
                  id: 'courses.card.development-basics',
                })}
                description={formatMessage({
                  id: 'courses.card.you-will-learn-fundamental-knowledge-in-it',
                })}
              />

              <Layout flexBasis={[20, 40]} />

              <Condition match={isDesktop}>
                <Row>
                  <Card
                    indent={110}
                    category={formatMessage({
                      id: 'courses.card.learning-material',
                    })}
                    widthCategoryBox={180}
                    titleDesktop={formatMessage({
                      id: 'courses.card.how-use-libraries',
                    })}
                  />

                  <Layout flexBasis={[20, 40]} flexShrink='0' />

                  <Card
                    indent={110}
                    category={formatMessage({
                      id: 'courses.card.learning-material',
                    })}
                    widthCategoryBox={180}
                    titleDesktop={formatMessage({
                      id: 'courses.card.design-figma-math',
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
        <Row>
          <Swiper spaceBetween={20} slidesPerView={1.23} className='swiper-1'>
            <SwiperSlide>
              <Row>
                <Layout flexBasis={20} flexShrink='0' />
                
                <Card
                  indent={62}
                  category={formatMessage({
                    id: 'courses.card.learning-material',
                  })}
                  widthCategoryBox={142}
                  isMobileOnly
                  titleMobile={formatMessage({
                    id: 'courses.card.how-use-libraries',
                  })}
                />
              </Row>
            </SwiperSlide>

            <SwiperSlide>
              <Row>
                <Card
                  indent={62}
                  category={formatMessage({
                    id: 'courses.card.learning-material',
                  })}
                  widthCategoryBox={142}
                  isMobileOnly
                  titleMobile={formatMessage({
                    id: 'courses.card.design-figma-math',
                  })}
                />
                
                <Layout flexBasis={20} flexShrink='0' />
              </Row>
            </SwiperSlide>
          </Swiper>
        </Row>
      </Condition>

      <Layout flexBasis={[20, 160]} />

      <Condition match={isMobile}>
        <Row>
          <Layout flexBasis={20} />

          <Box flexBasis={335} flexGrow='1'>
            <NextLink path='/' width='100%'>
              <Button
                variant='primaryBackgroundWhiteText'
                size='big'
                icon={<ArrowRightIcon width={16} height={16} />}
                widthIcon={48}
                heightIcon={48}
                backgroundIcon='background.white'
              >
                <Text color='white' fontSize='small' lineHeight='small'>
                  <FormattedMessage id='courses.button.all-materials' />
                </Text>
              </Button>
            </NextLink>
          </Box>

          <Layout flexBasis={20} />
        </Row>
      </Condition>

      <Layout flexBasis={[64, 0]} />
    </Column>
  )
}
