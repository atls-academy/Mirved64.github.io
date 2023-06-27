import React             from 'react'

import { LogoWhiteIcon } from '@ui/icons'
import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { NextLink }      from '@ui/link'
import { Text }          from '@ui/text'

import { navLinkList }   from './navigation-list/navigation.list'

export const Navigation = () => (
  <Box
    backgroundColor='background.navigation'
    width='100%'
    height={['80px', '120px']}
    alignItems='center'
  >
    <Layout flexBasis={[0, 40]} />
    <Box flexGrow='1' justifyContent={['center', 'start']}>
      <NextLink>
        <LogoWhiteIcon width='56px' height='56px' />
      </NextLink>
    </Box>
    <Box height='18px' flexGrow='2' display={['none', 'flex']}>
      {navLinkList.map((link) => (
        <Box key={link.name} flexGrow='5' justifyContent='center'>
          <NextLink>
            <Text color='text.primary' fontSize='normal' fontWeight='normal' lineHeight='small'>
              {link.name}
            </Text>
          </NextLink>
        </Box>
      ))}
    </Box>
    <Box width='54px' height='18px' flexGrow='1' justifyContent='end' display={['none', 'flex']}>
      <NextLink>
        <Text color='text.primary' fontSize='normal' fontWeight='normal' lineHeight='small'>
          Курсы
        </Text>
      </NextLink>
    </Box>
    <Layout flexBasis={[0, 40]} />
  </Box>
)
