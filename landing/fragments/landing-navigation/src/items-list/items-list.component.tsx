import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { Row }        from '@ui/layout'
import { NextLink }   from '@ui/link'

import { Item }       from '../item'
import { ItemsProps } from './items-list.interfaces'

export const ItemsList: FC<ItemsProps> = ({ navLinksList }) => (
  <Row
    height='32px'
    flexBasis={860}
    flexShrink='1'
    display={['none', 'flex']}
    justifyContent='space-between'
  >
    {navLinksList.map((navLink) => (
      <Box width={200}>
        <NextLink key={navLink.id} path={navLink.path} width='100%'>
          <Item name={navLink.name} />
        </NextLink>
      </Box>
    ))}
  </Row>
)
