import { Scrollspy }      from '@makotot/ghostui'

import React              from 'react'
import { Link }           from 'react-scroll'

import { Condition }      from '@ui/condition'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Text }           from '@ui/text'
import { useWindowWidth } from '@ui/utils'

import { NavLinks }       from './data'

export const Navbar = ({ sectionRefs }) => {
  const { isDesktop } = useWindowWidth()

  return (
    <Condition match={isDesktop}>
      <Box position='fixed' top={540} left={40} width={138} height={116} zIndex={11}>
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
                    : 'background.purpurTransparent'
                }
              />

              {NavLinks.map((element, index) => (
                <Column key={element.id} width={138}>
                  <Row alignItems='center' height={14}>
                    <Condition match={currentElementIndexInViewport === index}>
                      <Box
                        width={8}
                        height={8}
                        borderRadius='50%'
                        cursor='pointer'
                        style={{ transition: '0.3s' }}
                        backgroundColor={
                          currentElementIndexInViewport === 0 || currentElementIndexInViewport === 2
                            ? 'background.white'
                            : 'background.purpur'
                        }
                        flexShrink='0'
                      />

                      <Layout flexBasis={20} flexShrink='0' />

                      <Link to={element.id} spy smooth duration={1000}>
                        <Text
                          color={
                            currentElementIndexInViewport === 0 ||
                            currentElementIndexInViewport === 2
                              ? 'text.white'
                              : 'text.purpur'
                          }
                          style={{ transition: '0.3s' }}
                          cursor='pointer'
                          fontSize='tiny'
                          lineHeight='tiny'
                        >
                          {element.name}
                        </Text>
                      </Link>
                    </Condition>

                    <Condition match={currentElementIndexInViewport !== index}>
                      <Layout flexBasis={28} flexShrink='0' />

                      <Link to={element.id} spy smooth duration={1000}>
                        <Text
                          color={
                            currentElementIndexInViewport === 0 ||
                            currentElementIndexInViewport === 2
                              ? 'text.whiteTransparent'
                              : 'text.primaryTransparent'
                          }
                          cursor='pointer'
                          style={{ transition: '0.3s' }}
                          fontSize='tiny'
                          lineHeight='tiny'
                        >
                          {element.name}
                        </Text>
                      </Link>
                    </Condition>
                  </Row>

                  <Condition match={index < NavLinks.length - 1}>
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
