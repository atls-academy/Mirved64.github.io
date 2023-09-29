import React                from 'react'
import { FC }               from 'react'
import { Link }             from 'react-scroll'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

import { NavLinkItemProps } from '../navlink-item.interfaces'

export const NavLinkItemIndex: FC<NavLinkItemProps> = ({ name, path }) => {
  const { hover, hoverProps } = useHover()

  return (
    <Box width={{ standard: 200, ultra: 300 }} {...hoverProps} cursor='pointer'>
      <Link to={path} width='100%' spy smooth duration={1000}>
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
      </Link>
    </Box>
  )
}
