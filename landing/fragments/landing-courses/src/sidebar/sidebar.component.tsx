import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { MouseIcon }        from '@ui/icons'
import { Image }            from '@ui/image'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

export const Sidebar = () => (
  <Column>
    <Column flexBasis={[212, 660]}>
      <Layout flexBasis={[16, 32]} flexShrink='0' />

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

      <Layout flexBasis={[16, 74]} flexShrink='0' />

      <Box display={['none', 'flex']} margin='0 auto'>
        <Image src='./image/Default.png' width={240} height={240} />
      </Box>

      <Layout flexBasis={[0, 62]} flexShrink='0' />

      <Box flexDirection={['row', 'column']} alignItems={['center', 'normal']}>
        <Box maxWidth={[32, 36]}>
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

        <Layout flexBasis={[64, 32]} flexShrink='5' flexGrow='1' />

        <Box display={['flex', 'none']} flexShrink='0'>
          <Image src='./image/Default.png' width={64} height={64} />
        </Box>
      </Box>
    </Column>

    <Layout flexBasis={[40, 20]} flexShrink='0' />

    <Box display={['none', 'flex']} width='100%' height={72}>
      <Button variant='transparentBackgroundBlackText' fill divider={90}>
        <Box>
          <Text fontSize='small' fontWeight='normal' lineHeight='small'>
            <FormattedMessage id='coursesSidebarButtonDesktop' />
          </Text>
        </Box>
        <Box
          width={48}
          height={48}
          alignItems='center'
          justifyContent='center'
          backgroundColor='background.courses.white'
        >
          <MouseIcon width={16} height={16} />
        </Box>
      </Button>
    </Box>
  </Column>
)
