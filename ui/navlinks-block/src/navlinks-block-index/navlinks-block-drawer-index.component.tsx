import { Scrollspy }                    from '@makotot/ghostui'

import React                            from 'react'
import { FC }                           from 'react'

import { Condition }                    from '@ui/condition'
import { Box }                          from '@ui/layout'
import { Layout }                       from '@ui/layout'

import { NavLinkItemDrawerIndex }       from '../navlink-item'
import { NavLinksBlockIndexInterfaces } from './navlinks-blok.interfaces'
import { useNavlinksBlock }             from '../data'

export const NavLinksBlockDrawerIndex: FC<NavLinksBlockIndexInterfaces> = ({ sectionRefs }) => {
  const navLinks = useNavlinksBlock()

  const navLinksList: { path: string; title: string }[] = navLinks?.data?.allNavigation?.nodes
    ?.slice(2, 6)
    .reverse()
    .map((link) => ({
      title: link?.title,
      path: link?.id,
    }))

  return (
    <Scrollspy sectionRefs={sectionRefs} offset={-640}>
      {({ currentElementIndexInViewport }) => (
        <Box>
          {navLinksList?.map((navLink, index) => (
            <Box
              key={navLink.path}
              width={
                index < navLinksList.length - 1
                  ? { standard: 220, ultra: 330 }
                  : { standard: 200, ultra: 300 }
              }
            >
              <NavLinkItemDrawerIndex
                path={navLink.path}
                name={navLink.title}
                currentElementIndexInViewport={currentElementIndexInViewport}
                index={index}
              />

              <Condition match={index < navLinksList.length - 1}>
                <Layout flexBasis={{ standard: 20, ultra: 30 }} />
              </Condition>
            </Box>
          ))}
        </Box>
      )}
    </Scrollspy>
  )
}
