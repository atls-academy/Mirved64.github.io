import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Divider }          from '@ui/divider'
import { ArrowRightIcon }   from '@ui/icons'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { useWindowWidth }   from '@ui/utils'

import { CardsMaterials }   from './cards'
import { CardsSwiper }      from './cards'
import { CardsLearning }    from './cards'
import { Info }             from './info'
import { Sidebar }          from './sidebar'

export const Courses = () => {
  const { isMobile, isDesktop } = useWindowWidth()

  return (
    <Box borderRadius={['hugeTop', 'giantTop']} flexGrow='1'>
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
                    size='hugeSizeRegularRadii'
                    icon={<ArrowRightIcon width={16} height={16} />}
                    widthIcon={48}
                    heightIcon={48}
                    backgroundIcon='background.white'
                    radiiIcon='normal'
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

            <Divider backgroundColor='background.grayGhost' weight={1} />

            <Layout flexBasis={[40, 80]} />

            <Info />

            <Layout flexBasis={[40, 80]} />

            <Box flexDirection={['column', 'row']}>
              <Column order={[3, 0]} flexBasis={[335, 1160]} flexGrow='1'>
                <CardsLearning />

                <Condition match={isDesktop}>
                  <CardsMaterials />
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
            <CardsSwiper spaceBetween={20} className='swiper-1' slidesPerView={1.23} />
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
