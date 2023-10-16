import React                 from 'react'

import { Condition }         from '@ui/condition'
import { Box }               from '@ui/layout'
import { Layout }            from '@ui/layout'

import { NODE_ID_LIST }      from './helpers'
import { NavLinkItemDrawer } from './navlink-item'
import { useNavlinksBlock }  from './data'

export const NavLinksBlockHeader = () => {
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
          <NavLinkItemDrawer path={id} name={getNodeId(id)?.title} />

          <Condition match={index < NODE_ID_LIST.length - 1}>
            <Layout flexBasis={{ standard: 20, ultra: 30 }} />
          </Condition>
        </Box>
      ))}
    </Box>
  )
}
