import React             from 'react'

import { LogoWhiteIcon } from '@ui/icons'
import { Box }           from '@ui/layout'
import { NextLink }      from '@ui/link'
import { Text }          from '@ui/text'

import { navLinkList }   from './navigation-list/navigation.list'

export const Navigation = () => (
  <Box backgroundColor='#666666' width='100%' height='120px' alignItems='center'>
    <Box  flexGrow='1'  paddingLeft='40px'>
      <NextLink>
        <LogoWhiteIcon width='56px' height='56px' />
      </NextLink>
    </Box>
    <Box height='18px'  flexGrow='1'>
      {navLinkList.map((link) => (
        <Box key={link.name} flexGrow='5' justifyContent='center'>
          <NextLink>
            <Text color='primary' fontSize='normal' fontWeight='normal' lineHeight='small'>
              {link.name}
            </Text>
          </NextLink>
        </Box>
      ))}
    </Box>
    <Box width='54px' height='18px' flexGrow='1' justifyContent='end' paddingRight='40px'>
      <NextLink>
        <Text color='primary' fontSize='normal' fontWeight='normal' lineHeight='small'>
          Курсы
        </Text>
      </NextLink>
    </Box>
  </Box>
)
