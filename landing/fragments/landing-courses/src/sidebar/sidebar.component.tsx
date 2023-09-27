import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { Link }             from 'react-scroll'

import { Background }       from '@ui/background'
import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { MouseIcon }        from '@ui/icons'
import { Image }            from '@ui/image'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import { useWindowWidth }   from '@ui/utils'

export const Sidebar = () => {
  const { isMobile, isUltraDesktop } = useWindowWidth()

  return (
    <Column flexBasis={{ _: 212, standard: 410, ultra: 470 }}>
      <Background
        display='flex'
        backgroundImage='blackTransparentGradient'
        backgroundColor='blackTransparentGradient'
        borderRadius={['normal', 'regular']}
        border='thinnestGhostGray'
      >
        <Row order={[1, 0]}>
          <Layout flexBasis={[16, 32]} />

          <Column
            flexBasis={{ _: 303, standard: 346, ultra: 406 }}
            flexGrow={[1, 0]}
            flexShrink={{ _: 2, ultra: 0 }}
            alignItems={{ ultra: 'center' }}
          >
            <Layout flexBasis={[16, 32]} />

            <Box>
              <Text
                color='text.primary'
                fontSize={{ _: 'tiny', standard: 'little', ultra: 'medium' }}
                lineHeight={['huge', 'big']}
              >
                <FormattedMessage id='courses.sidebar.subtitle' />
              </Text>
            </Box>

            <Layout flexBasis={[16, 74]} />

            <Condition match={!isMobile}>
              <Box justifyContent='center'>
                <Image src='./image/Sphere.png' width={240} height={240} />
              </Box>

              <Layout flexBasis={{ standard: 62, ultra: 68 }} />
            </Condition>

            <Box
              flexDirection={['row', 'column']}
              alignItems={['center', 'start']}
              width={{ ultra: 346 }}
            >
              <Box>
                <Text
                  color='text.accent'
                  fontSize={{ _: 'giant', standard: 'enormous', ultra: 'stupendous' }}
                  lineHeight='small'
                >
                  <FormattedMessage id='courses.sidebar.number' />
                </Text>
              </Box>

              <Layout flexBasis={[12, 8]} />

              <Box
                flexBasis={{ _: 131, standard: 44, ultra: 68 }}
                maxWidth={{ _: 131, standard: 188, ultra: 282 }}
              >
                <Text
                  color='text.primary'
                  fontSize={{ _: 'atom', standard: 'tiny', ultra: 'low' }}
                  lineHeight={['large', 'big']}
                >
                  <FormattedMessage id='courses.sidebar.sign' />
                </Text>
              </Box>

              <Condition match={isMobile}>
                <Layout flexBasis={64} flexShrink='5' flexGrow='1' />

                <Box flexShrink='0'>
                  <Image src='./image/Sphere.png' width={64} height={64} />
                </Box>
              </Condition>
            </Box>

            <Layout flexBasis={[16, 32]} />
          </Column>

          <Layout flexBasis={[16, 32]} />
        </Row>
      </Background>

      <Layout order={[2, 0]} flexBasis={[40, 20]} />

      <Condition match={!isMobile}>
        <Link to='teaching' width='100%' spy smooth duration={1000}>
          <Condition match={!isUltraDesktop}>
            <Button
              variant='primaryBackgroundWhiteText'
              size='hugeSizeRegularRadii'
              icon={<MouseIcon width={16} height={16} />}
              widthIcon={48}
              heightIcon={48}
              backgroundIcon='background.white'
              radiiIcon='normal'
            >
              <Text color='white' fontSize='small' lineHeight='normal'>
                <FormattedMessage id='courses.sidebar.button-desktop' />
              </Text>
            </Button>
          </Condition>

          <Condition match={isUltraDesktop}>
            <Button
              variant='primaryBackgroundWhiteText'
              size='massiveSizeLargeRadii'
              icon={<MouseIcon width={24} height={24} />}
              widthIcon={72}
              heightIcon={72}
              backgroundIcon='background.white'
              radiiIcon='regular'
            >
              <Text color='white' fontSize='usual' lineHeight='normal'>
                <FormattedMessage id='courses.sidebar.button-desktop' />
              </Text>
            </Button>
          </Condition>
        </Link>
      </Condition>
    </Column>
  )
}
