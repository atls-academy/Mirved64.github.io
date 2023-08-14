import React                from 'react'
import { FormattedMessage } from 'react-intl'

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
  const { isMobile, isDesktop } = useWindowWidth()

  return (
    <Column flexShrink={[1, 0]} flexBasis={[212, 410]}>
      <Background
        display='flex'
        backgroundColor='blackTransparent'
        borderRadius={['normal', 'regular']}
      >
        <Row order={[1, 0]}>
          <Layout flexBasis={[16, 32]} />

          <Column flexBasis={[303, 346]} flexGrow={[1, 0]}>
            <Layout flexBasis={[16, 32]} />

            <Box>
              <Text
                color='text.primary'
                fontSize={['tiny', 'little']}
                lineHeight={['compact', 'medium']}
              >
                <FormattedMessage id='courses.sidebar.subtitle' />
              </Text>
            </Box>

            <Layout flexBasis={[16, 74]} />

            <Condition match={isDesktop}>
              <Box justifyContent='center'>
                <Image src='./image/Default.png' width={240} height={240} />
              </Box>
            </Condition>

            <Layout flexBasis={[0, 62]} />

            <Box flexDirection={['row', 'column']} alignItems={['center', 'start']}>
              <Box>
                <Text
                  color='text.accent'
                  fontSize={['giant', 'enormous']}
                  lineHeight={['large', 'big']}
                >
                  <FormattedMessage id='courses.sidebar.number' />
                </Text>
              </Box>

              <Layout flexBasis={[12, 8]} />

              <Box flexBasis={[131, 44]} maxWidth={[131, 188]}>
                <Text
                  color='text.primary'
                  fontSize={['atom', 'tiny']}
                  lineHeight={['minor', 'small']}
                >
                  <FormattedMessage id='courses.sidebar.sign' />
                </Text>
              </Box>

              <Layout flexBasis={[64, 0]} flexShrink='5' flexGrow='1' />

              <Condition match={isMobile}>
                <Box flexShrink='0'>
                  <Image src='./image/Default.png' width={64} height={64} />
                </Box>
              </Condition>
            </Box>

            <Layout flexBasis={[16, 32]} />
          </Column>

          <Layout flexBasis={[16, 32]} />
        </Row>
      </Background>

      <Layout order={[2, 0]} flexBasis={[40, 20]} />

      <Condition match={isDesktop}>
        <Button
          variant='primaryBackgroundWhiteText'
          size='hugeSizeRegularRadii'
          icon={<MouseIcon width={16} height={16} />}
          widthIcon={48}
          heightIcon={48}
          backgroundIcon='background.white'
          radiiIcon='normal'
        >
          <Text color='white' fontSize='small' lineHeight='small'>
            <FormattedMessage id='courses.sidebar.button-desktop' />
          </Text>
        </Button>
      </Condition>
    </Column>
  )
}
