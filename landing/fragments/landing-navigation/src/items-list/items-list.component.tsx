import React              from 'react'
import { FC }             from 'react'

import { Condition }      from '@ui/condition'
import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { NextLink }       from '@ui/link'
import { useWindowWidth } from '@ui/utils'

import { Item }           from '../item'
import { ItemsProps }     from './items-list.interfaces'

export const ItemsList: FC<ItemsProps> = ({ navLinksList }) => {
  const { isDesktop } = useWindowWidth()

  return (
    <Condition match={isDesktop}>
      <Row height='32px' flexBasis={860} flexShrink='1' justifyContent='space-between'>
        {navLinksList.map((navLink) => (
          <Box width={200}>
            <NextLink key={navLink.id} path={navLink.path} width='100%'>
              <Item name={navLink.name} />
            </NextLink>
          </Box>
        ))}
      </Row>
    </Condition>
  )
}
