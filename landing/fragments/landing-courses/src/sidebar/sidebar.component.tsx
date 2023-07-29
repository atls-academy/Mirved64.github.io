import React                from 'react'
import { FormattedMessage } from 'react-intl'

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
    <Column flexBasis={[212, 410]} flexShrink={[1, 0]}>
      <Row order={[1, 0]}>
        <Layout flexBasis={[16, 32]} />

        <Column flexBasis={[303, 346]} flexGrow={[1, 0]}>
          <Layout flexBasis={[16, 32]} />

          <Column>
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

            <Layout flexBasis={[16, 74]} />

            <Condition match={isDesktop}>
              <Box justifyContent='center'>
                <Image src='./image/Default.png' width={240} height={240} />
              </Box>
            </Condition>

            <Layout flexBasis={[0, 62]} />

            <Box flexDirection={['row', 'column']} alignItems={['center', 'normal']}>
              <Box>
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

              <Box flexBasis={[131, 44]} maxWidth={[131, 188]}>
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

              <Condition match={isMobile}>
                <Box flexShrink='0'>
                  <Image src='./image/Default.png' width={64} height={64} />
                </Box>
              </Condition>
            </Box>
          </Column>

          <Layout flexBasis={[16, 32]} />
        </Column>

        <Layout flexBasis={[16, 32]} />
      </Row>

      <Layout order={[2, 0]} flexBasis={[40, 20]} />

      <Condition match={isDesktop}>
        <Box width='100%' height={72} alignItems='center'>
          <Button
            variant='transparentBackgroundBlackText'
            fill
            gap={121}
            icon={<MouseIcon width={16} height={16} />}
            widthIcon={48}
            heightIcon={48}
            backgroundIcon='background.courses.white'
          >
            <Text fontSize='small' fontWeight='normal' lineHeight='small'>
              <FormattedMessage id='coursesSidebarButtonDesktop' />
            </Text>
          </Button>
        </Box>
      </Condition>
    </Column>
  )
}
