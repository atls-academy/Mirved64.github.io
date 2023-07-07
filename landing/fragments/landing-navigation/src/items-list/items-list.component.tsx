import React          from 'react'
import { FC }         from 'react'

import { Row }        from '@ui/layout'

import { Item }       from '../item'
import { ItemsProps } from './items-list.interfaces'

export const ItemsList: FC<ItemsProps> = ({ navLinksList }) => (
  <Row
    height='18px'
    flexBasis={860}
    flexShrink='1'
    display={['none', 'flex']}
    justifyContent='space-between'
  >
    {navLinksList.map((navLink) => (
      <Item key={navLink.id} name={navLink.name} path={navLink.path} />
    ))}
  </Row>
)
