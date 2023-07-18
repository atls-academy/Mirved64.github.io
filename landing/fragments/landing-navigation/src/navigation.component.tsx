import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { LogoWhiteIcon }    from '@ui/icons'
import { ArrowDownIcon }    from '@ui/icons'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'

import { ItemsList }        from './items-list'
import { navLinkList }      from './navigation-list'

export const Navigation = () => (
  <Box
    backgroundColor='background.navigation.mainColor'
    width='100%'
    height={[80, 120]}
    alignItems='center'
    margin='0 auto'
  >
    <Layout flexBasis={[0, 40]} />

    <Box display={['flex', 'none']} flexGrow='1' justifyContent='center'>
      <NextLink>
        <LogoWhiteIcon width={40} height={40} />
      </NextLink>
    </Box>

    <Box display={['none', 'flex']}>
      <NextLink>
        <LogoWhiteIcon width={56} height={56} />
      </NextLink>
    </Box>

    <Layout display={['none', 'flex']} flexBasis={[0, 40]} flexGrow='1' />

    <ItemsList navLinksList={navLinkList} />

    <Layout display={['none', 'flex']} flexBasis={[0, 40]} flexGrow='1' />

    <Box width={163} height={64} alignItems='center' display={['none', 'flex']}>
      <Button variant='transparentBackgroundWhiteText' fill divider={24}>
        <Box width={59} height={22} justifyContent='center'>
          <NextLink>
            <Text fontSize='compact' fontWeight='normal' lineHeight='little'>
              <FormattedMessage id='navigationButton' />
            </Text>
          </NextLink>
        </Box>
        <Box
          width={48}
          height={48}
          alignItems='center'
          justifyContent='center'
          backgroundColor='background.navigation.white'
        >
          <ArrowDownIcon width={16} height={16} />
        </Box>
      </Button>
    </Box>

    <Layout flexBasis={[0, 40]} />
  </Box>
)
