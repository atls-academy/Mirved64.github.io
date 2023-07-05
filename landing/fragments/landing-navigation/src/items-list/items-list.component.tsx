import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'

import { Item }       from '../item'
import { ItemsProps } from './items-list.interfaces'

export const ItemsList: FC<ItemsProps> = ({ navLinksList }) => (
  <Box height='18px' flexGrow='2' display={['none', 'flex']}>
    {navLinksList.map((navLink) => (
      <Item key={navLink.id} name={navLink.name} path={navLink.path} />
    ))}
  </Box>
)
