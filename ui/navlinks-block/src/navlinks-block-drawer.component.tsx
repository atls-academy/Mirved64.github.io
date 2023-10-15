import React                  from 'react'
import { FC }                 from 'react'

import { Condition }          from '@ui/condition'
import { Box }                from '@ui/layout'
import { Layout }             from '@ui/layout'

import { NavLinks }           from './data'
import { NavLinkItemDrawer }  from './navlink-item'
import { NavLinksBlockProps } from './navlinks-block.interfaces'

export const NavLinksBlockDrawer: FC<NavLinksBlockProps> = ({ active }) => (
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
        <NavLinkItemDrawer path={navLink.path} name={navLink.name} active={active} />

        <Condition match={index < NavLinks.length - 1}>
          <Layout flexBasis={{ standard: 20, ultra: 30 }} />
        </Condition>
      </Box>
    ))}
  </>
)
