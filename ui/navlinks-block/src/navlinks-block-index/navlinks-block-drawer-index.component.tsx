import { Scrollspy }                    from '@makotot/ghostui'

import React                            from 'react'
import { FC }                           from 'react'

import { Condition }                    from '@ui/condition/src'
import { Box }                          from '@ui/layout/src'
import { Layout }                       from '@ui/layout/src'

import { NavLinks }                     from '../data'
import { NavLinkItemDrawerIndex }       from '../navlink-item'
import { NavLinksBlockIndexInterfaces } from './navlinks-blok.interfaces'

export const NavLinksBlockDrawerIndex: FC<NavLinksBlockIndexInterfaces> = ({ sectionRefs }) => (
  <Scrollspy sectionRefs={sectionRefs} offset={-640}>
    {({ currentElementIndexInViewport }) => (
      <Box>
        {NavLinks.map((navLink, index) => (
          <Box
            key={navLink.id}
            width={
              index < NavLinks.length - 1
                ? { standard: 220, ultra: 330 }
                : { standard: 200, ultra: 300 }
            }
          >
            <NavLinkItemDrawerIndex
              path={navLink.path}
              name={navLink.name}
              currentElementIndexInViewport={currentElementIndexInViewport}
              index={index}
            />

            <Condition match={index < NavLinks.length - 1}>
              <Layout flexBasis={{ standard: 20, ultra: 30 }} />
            </Condition>
          </Box>
        ))}
      </Box>
    )}
  </Scrollspy>
)
