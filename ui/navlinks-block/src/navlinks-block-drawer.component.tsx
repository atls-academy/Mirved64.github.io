import React                  from 'react'
import { FC }                 from 'react'

import { Condition }          from '@ui/condition'
import { Box }                from '@ui/layout'
import { Layout }             from '@ui/layout'

import { NavLinkItemDrawer }  from './navlink-item'
import { NavLinksBlockProps } from './navlinks-block.interfaces'
import { useNavlinksBlock }   from './data'

export const NavLinksBlockDrawer: FC<NavLinksBlockProps> = ({ active }) => {
  const navLinks = useNavlinksBlock()
  const navLinksList: { path: string; title: string }[] = navLinks?.data?.allNavigation?.nodes
    ?.slice(2, 6)
    .reverse()
    .map((link) => ({
      title: link?.title,
      path: link?.id,
    }))

  return (
    <Box>
      {navLinksList?.map((navLink, index) => (
        <Box
          key={navLink.title}
          width={
            index < navLinksList.length - 1
              ? { standard: 220, ultra: 330 }
              : { standard: 200, ultra: 300 }
          }
        >
          <NavLinkItemDrawer path={navLink.path} name={navLink.title} active={active} />

          <Condition match={index < navLinksList.length - 1}>
            <Layout flexBasis={{ standard: 20, ultra: 30 }} />
          </Condition>
        </Box>
      ))}
    </Box>
  )
}
