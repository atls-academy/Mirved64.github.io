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
        <LogoWhiteIcon width='100%' height='100%' />
      </NextLink>
    </Box>
    <Box width='860px' height='18px' justifyContent='space-between'>
      {navLinkList.map((link) => (
        <Box key={link.name}>
          <NextLink>
            <Text color='primary' fontSize='normal' fontWeight='normal' lineHeight='small'>
              {link.name}
            </Text>
          </NextLink>
        </Box>
      ))}
    </Box>
    <Box width='54px' height='18px' marginRight='40px'>
      <NextLink>
        <Text color='primary' fontSize='normal' fontWeight='normal' lineHeight='small'>
          Курсы
        </Text>
      </NextLink>
    </Box>
  </Box>
)
