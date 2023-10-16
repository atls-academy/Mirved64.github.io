import { Scrollspy }                    from '@makotot/ghostui'

import React                            from 'react'
import { FC }                           from 'react'

import { Condition }                    from '@ui/condition'
import { Box }                          from '@ui/layout'
import { Layout }                       from '@ui/layout'

import { NODE_ID_LIST }                 from '../helpers'
import { NavLinkItemDrawerIndex }       from '../navlink-item'
import { NavLinksBlockIndexInterfaces } from './navlinks-blok.interfaces'
import { useNavlinksBlock }             from '../data'

export const NavLinksBlockHeaderIndex: FC<NavLinksBlockIndexInterfaces> = ({
  sectionRefs,
  handleStartAnimation,
}) => {
  const navLinks = useNavlinksBlock()

  const getNodeId = (id) => navLinks?.data?.allNavigation?.nodes?.find((obj) => obj.id === id)

  return (
    <Scrollspy sectionRefs={sectionRefs} offset={-640}>
      {({ currentElementIndexInViewport }) => (
        <Box>
          {NODE_ID_LIST?.map((id, index, array) => (
            <Box
              key={id}
              width={
                index < NODE_ID_LIST.length - 1
                  ? { standard: 220, ultra: 330 }
                  : { standard: 200, ultra: 300 }
              }
            >
              <Condition match={currentElementIndexInViewport !== array.length - 1}>
                <NavLinkItemDrawerIndex
                  path={id}
                  name={getNodeId(id)?.title}
                  currentElementIndexInViewport={currentElementIndexInViewport}
                  index={index}
                />

                <Condition match={index < NODE_ID_LIST.length - 1}>
                  <Layout flexBasis={{ standard: 20, ultra: 30 }} />
                </Condition>
              </Condition>

              <Condition match={currentElementIndexInViewport === array.length - 1}>
                <Condition match={index === 0}>
                  <NavLinkItemDrawerIndex
                    path={id}
                    name={getNodeId(id)?.title}
                    currentElementIndexInViewport={currentElementIndexInViewport}
                    index={index}
                    onClick={handleStartAnimation}
                    duration={0}
                  />

                  <Layout flexBasis={{ standard: 20, ultra: 30 }} />
                </Condition>

                <Condition match={index >= 1}>
                  <Box
                    key={id}
                    width={
                      index < NODE_ID_LIST.length - 1
                        ? { standard: 220, ultra: 330 }
                        : { standard: 200, ultra: 300 }
                    }
                  >
                    <NavLinkItemDrawerIndex
                      path={id}
                      name={getNodeId(id)?.title}
                      currentElementIndexInViewport={currentElementIndexInViewport}
                      index={index}
                    />

                    <Condition match={index < NODE_ID_LIST.length - 1}>
                      <Layout flexBasis={{ standard: 20, ultra: 30 }} />
                    </Condition>
                  </Box>
                </Condition>
              </Condition>
            </Box>
          ))}
        </Box>
      )}
    </Scrollspy>
  )
}
