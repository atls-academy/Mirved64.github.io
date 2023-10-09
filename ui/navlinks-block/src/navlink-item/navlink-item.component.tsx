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

export const NavLinkItem: FC<NavLinkItemProps> = ({ name, path }) => {
  const { hover, hoverProps } = useHover()

  return (
    <Box width={{ standard: 200, ultra: 300 }} {...hoverProps} cursor='pointer'>
      <NextLink path={`/#${path}`} width='100%'>
        <Column alignItems='center'>
          <Box>
            <Text
              color={hover ? 'text.white' : 'text.gray'}
              fontSize={{ standard: 'compact', ultra: 'middle' }}
              lineHeight='small'
              textTransform='uppercase'
            >
              {name}
            </Text>
          </Box>

          <Layout flexBasis={{ standard: 10, ultra: 15 }} />

          <Divider
            backgroundColor={hover ? 'background.white' : 'background.graySemiTransparent'}
            weight={1}
            width={{ standard: 200, ultra: 300 }}
          />
        </Column>
      </NextLink>
    </Box>
  )
}