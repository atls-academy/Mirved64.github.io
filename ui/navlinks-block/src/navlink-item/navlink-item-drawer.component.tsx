import React                from 'react'
import { FC }               from 'react'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

import { NavLinkItemProps } from './navlink-item.interfaces'

export const NavLinkItemDrawer: FC<NavLinkItemProps> = ({ name, path }) => {
  const { hover, hoverProps } = useHover()

  return (
    <Box flexBasis={{ standard: 200, ultra: 300 }} cursor='pointer' {...hoverProps}>
      <NextLink path={`/#${path}`} width='100%'>
        <Column alignItems='center'>
          <Box>
            <Text
              color={hover ? 'text.black' : 'text.ghost'}
              fontSize={{ standard: 'compact', ultra: 'middle' }}
              lineHeight='small'
              textTransform='uppercase'
            >
              {name}
            </Text>
          </Box>

          <Layout flexBasis={{ standard: 10, ultra: 15 }} />

          <Divider
            backgroundColor={hover ? 'background.black' : 'background.blackTransparent'}
            weight={1}
            width={{ standard: 200, ultra: 300 }}
          />
        </Column>
      </NextLink>
    </Box>
  )
}
