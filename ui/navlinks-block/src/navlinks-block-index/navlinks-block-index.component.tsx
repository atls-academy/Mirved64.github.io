import React                from 'react'

import { Condition }        from '@ui/condition/src'
import { Box }              from '@ui/layout/src'
import { Layout }           from '@ui/layout/src'

import { NODE_ID_LIST }     from '../helpers'
import { NavLinkItemIndex } from '../navlink-item'
import { useNavlinksBlock } from '../data'

export const NavLinksBlockIndex = () => {
  const navLinks = useNavlinksBlock()

  const getNodeId = (id) => navLinks?.data?.allNavigation?.nodes?.find((obj) => obj.id === id)

  return (
    <Box>
      {NODE_ID_LIST?.map((id, index) => (
        <Box
          key={id}
          width={
            index < NODE_ID_LIST.length - 1
              ? { standard: 220, ultra: 330 }
              : { standard: 200, ultra: 300 }
          }
        >
          <NavLinkItemIndex name={getNodeId(id)?.title} path={id} />

          <Condition match={index < NODE_ID_LIST.length - 1}>
            <Layout flexBasis={{ standard: 20, ultra: 30 }} />
          </Condition>
        </Box>
      ))}
    </Box>
  )
}
