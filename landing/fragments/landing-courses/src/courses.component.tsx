import React                  from 'react'

import { Button }             from '@ui/button'
import { Condition }          from '@ui/condition'
import { Divider }            from '@ui/divider'
import { ArrowRightIcon }     from '@ui/icons'
import { Box }                from '@ui/layout'
import { Row }                from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Column }             from '@ui/layout'
import { NextLink }           from '@ui/link'
import { Text }               from '@ui/text'
import { useWindowWidth }     from '@ui/utils'

import { CardsMaterials }     from './cards'
import { CardsMaterialsWide } from './cards'
import { CardsSwiper }        from './cards'
import { CardsLearning }      from './cards'
import { Info }               from './info'
import { Sidebar }            from './sidebar'
import { useCourses }         from './data'

export const Courses = () => {
  const { isMobile, isDesktop, isWide, isUltra } = useWindowWidth()

  const courses = useCourses()
  const title: string = courses?.data?.sectionBy.sections.title
  const path: string = courses?.data?.navigationBy.navigation.linkName
  const buttonTitle: string = courses?.data?.navigationBy.title

  return (
    <Box flexBasis={{ wide: 2580 }} flexShrink={{ wide: 0 }} flexGrow={{ wide: '1' }}>
      <Column flexGrow='1'>
        <Layout flexBasis={[64, 160]} />

        <Row>
          <Layout flexBasis={{ _: 20, standard: 230, ultra: 620 }} />

          <Column
            flexBasis={{ _: 335, standard: 1610, wide: 2250, ultra: 2600 }}
            flexShrink={{ wide: 0 }}
            flexGrow='1'
          >
            <Row alignItems='center'>
              <Box flexWrap='wrap'>
                <Text
                  color='text.primary'
                  fontSize={{ _: 'regular', standard: 'stupendous', ultra: 'biggest' }}
                  lineHeight='standard'
                >
                  {title}
                </Text>
              </Box>

              <Condition match={isDesktop}>
                <Layout flexBasis={20} flexGrow='1' />

                <Box width={254} flexShrink='0'>
                  <NextLink path={path} width='100%'>
                    <Button
                      variant='primaryBackgroundWhiteText'
                      size='hugeSizeRegularRadii'
                      icon={<ArrowRightIcon width={16} height={16} />}
                      widthIcon={48}
                      heightIcon={48}
                      backgroundIcon='background.white'
                      radiiIcon='normal'
                    >
                      <Text color='white' fontSize='small' lineHeight='normal'>
                        {buttonTitle}
                      </Text>
                    </Button>
                  </NextLink>
                </Box>
              </Condition>
            </Row>

            <Layout flexBasis={[40, 80]} />

            <Divider backgroundColor='background.grayGhost' weight={1} />

            <Layout flexBasis={[40, 80]} />

            <Info />

            <Layout flexBasis={[40, 80]} />

            <Box flexDirection={['column', 'row']}>
              <Column
                order={[3, 0]}
                flexBasis={{ _: 335, standard: 1160, wide: 1798, ultra: 2090 }}
              >
                <CardsLearning />

                <Condition match={!isMobile}>
                  <Layout flexBasis={40} />
                </Condition>

                <Condition match={isDesktop}>
                  <CardsMaterials />
                </Condition>

                <Condition match={isWide || isUltra}>
                  <CardsMaterialsWide />
                </Condition>
              </Column>

              <Layout flexBasis={[0, 40]} />

              <Sidebar />
            </Box>
          </Column>

          <Layout flexBasis={{ _: 20, standard: 80, ultra: 620 }} />
        </Row>

        <Condition match={isMobile}>
          <Layout flexBasis={20} />

          <Row>
            <CardsSwiper spaceBetween={20} className='swiper-1' slidesPerView={1.23} />
          </Row>
        </Condition>

        <Layout flexBasis={[20, 160]} />

        <Condition match={isMobile}>
          <Row>
            <Layout flexBasis={20} />

            <Box flexBasis={335} flexGrow='1'>
              <NextLink path={path} width='100%'>
                <Button
                  variant='primaryBackgroundWhiteText'
                  size='bigSizeNormalRadiiSmallPadding'
                  icon={<ArrowRightIcon width={6} height={12} />}
                  widthIcon={32}
                  heightIcon={32}
                  backgroundIcon='background.white'
                  radiiIcon='tiny'
                >
                  <Text color='white' fontSize='small' lineHeight='small'>
                    {buttonTitle}
                  </Text>
                </Button>
              </NextLink>
            </Box>

            <Layout flexBasis={20} />
          </Row>
        </Condition>

        <Layout flexBasis={[144, 80]} />
      </Column>
    </Box>
  )
}
