import React                from 'react'

import { Condition }        from '@ui/condition/src'
import { Box }              from '@ui/layout/src'
import { Layout }           from '@ui/layout/src'

import { NavLinks }         from '../data'
import { NavLinkItemIndex } from '../navlink-item'

export const NavLinksBlockIndex = () => (
  <>
    {NavLinks.map((navLink, index) => (
      <Box
        key={navLink.id}
        width={
          index < NavLinks.length - 1
            ? { standard: 220, ultra: 330 }
            : { standard: 200, ultra: 300 }
        }
      >
        <NavLinkItemIndex name={navLink.name} path={navLink.path} />

        <Condition match={index < NavLinks.length - 1}>
          <Layout flexBasis={{ standard: 20, ultra: 30 }} />
        </Condition>
      </Box>
    ))}
  </>
)
