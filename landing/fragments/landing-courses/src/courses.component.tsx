import React                  from 'react'
import { FormattedMessage }   from 'react-intl'

import { Background }         from '@ui/background'
import { Button }             from '@ui/button'
import { Condition }          from '@ui/condition'
import { Divider }            from '@ui/divider'
import { ArrowRightIcon }     from '@ui/icons'
import { ArrowIcon }          from '@ui/icons'
import { Box }                from '@ui/layout'
import { Row }                from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Column }             from '@ui/layout'
import { NextLink }           from '@ui/link'
import { Text }               from '@ui/text'
import { useHover }           from '@ui/utils'
import { useWindowWidth }     from '@ui/utils'

import { CardsMaterials }     from './cards'
import { CardsMaterialsWide } from './cards'
import { CardsSwiper }        from './cards'
import { CardsLearning }      from './cards'
import { Info }               from './info'
import { Sidebar }            from './sidebar'

export const Courses = () => {
  const { isMobile, isDesktop, isWideDesktop } = useWindowWidth()
  const { hover, hoverProps } = useHover()

  return (
    <Box flexBasis={{ wide: 2580 }} flexShrink={{ wide: 0 }}>
      <Column>
        <Layout flexBasis={[64, 160]} />

        <Row>
          <Layout flexBasis={[20, 230]} />

          <Column flexBasis={{ _: 335, standard: 1610, wide: 2250 }}>
            <Row alignItems='center'>
              <Box flexWrap='wrap'>
                <Text
                  color='text.primary'
                  fontSize={['regular', 'stupendous']}
                  lineHeight='standart'
                >
                  <FormattedMessage id='courses.title' />
                </Text>
              </Box>

              <Layout flexBasis={20} flexGrow='1' />

              <Condition match={isDesktop}>
                <Box width={254} flexShrink='0'>
                  <NextLink path='/library' width='100%'>
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
                        <FormattedMessage id='courses.button.all-materials' />
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
              <Column order={[3, 0]} flexBasis={{ _: 335, standard: 1160, wide: 1798 }}>
                <CardsLearning />

                <Condition match={!isMobile}>
                  <Layout flexBasis={[20, 40]} />
                </Condition>

                <Condition match={isDesktop}>
                  <CardsMaterials />
                </Condition>

                <Condition match={isWideDesktop}>
                  <Row flexWrap='wrap'>
                    <CardsMaterialsWide />

                    <NextLink path='/library' width={572}>
                      <Background
                        {...hoverProps}
                        borderRadius='regular'
                        overflow='hidden'
                        backgroundColor={hover ? 'purpurGradient' : 'navyGradient'}
                        display='flex'
                        height='100%'
                      >
                        <Layout flexBasis={[16, 40]} flexShrink='0' />

                        <Column justifyContent='end' flexGrow='1'>
                          <Row alignItems='center'>
                            <Box>
                              <Text color='text.white' fontSize='regular' lineHeight='usual'>
                                <FormattedMessage id='courses.button.all-materials' />
                              </Text>
                            </Box>

                            <Layout flexBasis={15} />

                            <ArrowIcon width={66} height={40} />
                          </Row>

                          <Layout flexBasis={40} />
                        </Column>

                        <Layout flexBasis={40} flexShrink='0' />
                      </Background>
                    </NextLink>
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
          <Layout flexBasis={[20, 40]} />

          <Row>
            <CardsSwiper spaceBetween={20} className='swiper-1' slidesPerView={1.23} />
          </Row>
        </Condition>

        <Layout flexBasis={[20, 160]} />

        <Condition match={isMobile}>
          <Row>
            <Layout flexBasis={20} />

            <Box flexBasis={335} flexGrow='1'>
              <NextLink path='/library' width='100%'>
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
                    <FormattedMessage id='courses.button.all-materials' />
                  </Text>
                </Button>
              </NextLink>
            </Box>

            <Layout flexBasis={20} />
          </Row>
        </Condition>

        <Layout flexBasis={[64, 80]} />
      </Column>
    </Box>
  )
}
