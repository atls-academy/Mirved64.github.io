import React             from 'react'

import { LogoWhiteIcon } from '@ui/icons'
import { Box }           from '@ui/layout'
import { NextLink }      from '@ui/link'
import { Text }          from '@ui/text'

import { navLinkList }   from './navigation-list/navigation.list'

export const Navigation = () => (
  <Box
    backgroundColor='#666666'
    width='1920px'
    height='120px'
    justifyContent='space-between'
    alignItems='center'
    margin='0 auto'
  >
    <Box width='56px' height='56px' marginLeft='40px'>
      <NextLink>
        <LogoWhiteIcon />
      </NextLink>
    </Box>
    <Box width='860px' height='18px' justifyContent='space-between'>
      {navLinkList.map((link) => (
        <NextLink key={link.name}>
          <Text color='primary' fontSize='normal' fontWeight='normal' lineHeight='small'>
            {link.name}
          </Text>
        </NextLink>
      ))}
    </Box>
    <Box width='54px' height='18px' marginRight='40px'>
      <NextLink>
        <Text color='primary' fontSize='normal' fontWeight='normal' lineHeight='small'>
          <NextLink>Курсы</NextLink>
        </Text>
      </NextLink>
    </Box>
  </Box>
)
