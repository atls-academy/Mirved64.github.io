import { Scrollspy }      from '@makotot/ghostui'

import React              from 'react'
import { FC }             from 'react'
import { Link }           from 'react-scroll'

import { Condition }      from '@ui/condition'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Text }           from '@ui/text'
import { useWindowWidth } from '@ui/utils'

import { NavbarProps }    from './navbar.interfaces'
import { useNavBar }      from './data'

export const Navbar: FC<NavbarProps> = ({ sectionRefs }) => {
  const { isDesktop, isWide } = useWindowWidth()

  const navbar = useNavBar()

  const navLinksList: { path: string; title: string }[] = navbar?.data?.allNavigation?.nodes
    ?.slice(2, 6)
    .reverse()
    .map((link) => ({
      title: link?.title,
      path: link?.id,
    }))

  return (
    <Condition match={isDesktop || isWide}>
      <Box
        position='fixed'
        top={{ standard: 540, wide: 376 }}
        left={40}
        width={138}
        height={116}
        zIndex={21}
      >
        <Scrollspy sectionRefs={sectionRefs} offset={-640}>
          {({ currentElementIndexInViewport }) => (
            <Column>
              <Box
                position='absolute'
                left='3px'
                width={2}
                height={116}
                backgroundColor={
                  currentElementIndexInViewport === 0 || currentElementIndexInViewport === 2
                    ? 'background.grayTransparent'
                    : 'background.purpleTransparent'
                }
              />

              {navLinksList?.map((element, index, array) => (
                <Column key={element.path} width={138}>
                  <Row alignItems='center' height={14}>
                    <Condition match={currentElementIndexInViewport === index}>
                      <Box
                        width={8}
                        height={8}
                        borderRadius='50%'
                        cursor='pointer'
                        zIndex={20}
                        backgroundColor={
                          currentElementIndexInViewport === 0 || currentElementIndexInViewport === 2
                            ? 'background.white'
                            : 'background.purple'
                        }
                        flexShrink='0'
                      />

                      <Layout flexBasis={20} flexShrink='0' />

                      <Link to={element.path} spy smooth duration={1000}>
                        <Text
                          color={
                            currentElementIndexInViewport === 0 ||
                            currentElementIndexInViewport === 2
                              ? 'text.white'
                              : 'text.purple'
                          }
                          cursor='pointer'
                          fontSize='tiny'
                          lineHeight='small'
                          textTransform={index === array.length - 1 ? 'uppercase' : 'none'}
                        >
                          {element.title}
                        </Text>
                      </Link>
                    </Condition>

                    <Condition match={currentElementIndexInViewport !== index}>
                      <Layout flexBasis={28} flexShrink='0' />

                      <Link to={element.path} spy smooth duration={1000}>
                        <Text
                          color={
                            currentElementIndexInViewport === 0 ||
                            currentElementIndexInViewport === 2
                              ? 'text.whiteTransparent'
                              : 'text.primaryTransparent'
                          }
                          cursor='pointer'
                          fontSize='tiny'
                          lineHeight='small'
                        >
                          {element.title}
                        </Text>
                      </Link>
                    </Condition>
                  </Row>

                  <Condition match={index < navLinksList.length - 1}>
                    <Layout flexBasis={20} flexShrink='0' />
                  </Condition>
                </Column>
              ))}
            </Column>
          )}
        </Scrollspy>
      </Box>
    </Condition>
  )
}
