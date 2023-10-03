import React           from 'react'

import { Condition }   from '@ui/condition'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'

import { NavLinks }    from './data'
import { NavLinkItem } from './navlink-item'

export const NavLinksBlock = () => (
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
        <NavLinkItem name={navLink.name} path={navLink.path} />

        <Condition match={index < NavLinks.length - 1}>
          <Layout flexBasis={{ standard: 20, ultra: 30 }} />
        </Condition>
      </Box>
    ))}
  </>
)
