import React         from 'react'
import { FC }        from 'react'

import { Row }       from '@ui/layout'

import { Item }      from '../item'
import { ListProps } from './items-list.interfaces'

export const ItemsList: FC<ListProps> = ({ technologies, font }) => (
  <Row overflow='hidden' width='100%'>
    {technologies!.map((technology) => (
      <Item
        key={technology.technology}
        technologyName={technology.technology}
        divider={4}
        font={font!}
      />
    ))}
  </Row>
)
