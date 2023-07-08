import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { LogoWhiteIcon }    from '@ui/icons'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'

import { ItemsList }        from './items-list'
import { navLinkList }      from './navigation-list'

export const Navigation = () => (
  <Box
    backgroundColor='background.navigation'
    width='100%'
    height={['80px', '120px']}
    alignItems='center'
    margin='0 auto'
  >
    <Layout flexBasis={[0, 40]} />

    <Layout display={['flex', 'none']} flexGrow='1' justifyContent='center'>
      <NextLink>
        <LogoWhiteIcon width={40} height={40} />
      </NextLink>
    </Layout>

    <Layout display={['none', 'flex']} flexGrow='1' justifyContent='start'>
      <NextLink>
        <LogoWhiteIcon width={56} height={56} />
      </NextLink>
    </Layout>

    <ItemsList navLinksList={navLinkList} />

    <Layout width='54px' height='18px' flexGrow='1' justifyContent='end' display={['none', 'flex']}>
      <NextLink>
        <Text
          color='text.navigation.primary'
          fontSize='compact'
          fontWeight='normal'
          lineHeight='little'
        >
          <FormattedMessage id='navigationButton' />
        </Text>
      </NextLink>
    </Layout>

    <Layout flexBasis={[0, 40]} />
  </Box>
)
