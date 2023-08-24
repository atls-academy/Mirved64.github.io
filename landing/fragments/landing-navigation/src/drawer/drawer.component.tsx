import { Scrollspy }        from '@makotot/ghostui'

import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { Link }             from 'react-scroll'

import { Background }       from '@ui/background'
import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Divider }          from '@ui/divider'
import { DrawerContainer }  from '@ui/drawer'
import { ArrowUpIcon }      from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'
import { useWindowWidth }   from '@ui/utils'
import { useHover }         from '@ui/utils'

import { NavLinks }         from '../data'

export const Drawer = ({ active, onClose, sectionRefs }) => {
  const { isMobile, isDesktop } = useWindowWidth()
  const { hover, hoverProps } = useHover()

  return (
    <DrawerContainer heightDrawer={[455, 600]} active={active}>
      <Background backgroundColor='white' borderRadius={['normalBottom', 'bigBottom']} width='100%'>
        <Column>
          <Condition match={isDesktop}>
            <Layout flexBasis={32} />
            <Row alignItems='center' height={56}>
              <Layout flexBasis={40} />

              <Logo fill='rgba(58, 55, 93, 1)' width={56} height={56} />

              <Layout flexBasis={40} flexGrow='1' />

              <Scrollspy sectionRefs={sectionRefs} offset={-640}>
                {({ currentElementIndexInViewport }) => (
                  <Box flexBasis={860}>
                    {NavLinks.map((navLink, index) => (
                      <Box
                        width={index < NavLinks.length - 1 ? 220 : 200}
                        key={`drawer-${navLink.id}`}
                      >
                        <Box flexBasis={200} cursor='pointer' {...hoverProps}>
                          <Link to={navLink.path} width='100%' spy smooth duration={1000}>
                            <Column alignItems='center'>
                              <Condition match={currentElementIndexInViewport !== index}>
                                <Box>
                                  <Text
                                    color={hover ? 'text.black' : 'text.ghost'}
                                    fontSize='compact'
                                    lineHeight='little'
                                    textTransform='uppercase'
                                  >
                                    {navLink.name}
                                  </Text>
                                </Box>

                                <Layout flexBasis={10} />

                                <Divider
                                  backgroundColor={
                                    hover ? 'divider.black' : 'divider.blackTransparent'
                                  }
                                  weight={1}
                                  width={200}
                                />
                              </Condition>

                              <Condition match={currentElementIndexInViewport === index}>
                                <Box>
                                  <Text
                                    color='text.black'
                                    fontSize='compact'
                                    lineHeight='little'
                                    textTransform='uppercase'
                                  >
                                    {navLink.name}
                                  </Text>
                                </Box>

                                <Layout flexBasis={10} />

                                <Divider backgroundColor='divider.black' weight={1} width={200} />
                              </Condition>
                            </Column>
                          </Link>
                        </Box>

                        <Condition match={index < NavLinks.length - 1}>
                          <Layout flexBasis={20} />
                        </Condition>
                      </Box>
                    ))}
                  </Box>
                )}
              </Scrollspy>

              <Layout flexBasis={40} flexGrow='1' />

              <Box width={136}>
                <Button
                  onClick={onClose}
                  variant='primaryBackgroundWhiteText'
                  size='bigSizeNormalRadiiBigPadding'
                  icon={<ArrowUpIcon width={12} height={6} />}
                  widthIcon={40}
                  heightIcon={40}
                  backgroundIcon='background.white'
                  radiiIcon='little'
                >
                  <Text color='white' fontSize='compact' lineHeight='little'>
                    <FormattedMessage id='navigation.button' />
                  </Text>
                </Button>
              </Box>

              <Layout flexBasis={40} />
            </Row>

            <Layout flexBasis={50} />
          </Condition>

          <Condition match={isMobile}>
            <Row height={80} alignItems='center'>
              <Layout flexBasis={20} />

              <Box>
                <Logo fill='rgba(58, 55, 93, 1)' width={40} height={40} />
              </Box>

              <Layout flexBasis={195} flexGrow='1' flexShrink='10' />

              <Box width={100}>
                <Button
                  onClick={onClose}
                  variant='primaryBackgroundWhiteText'
                  size='smallSizeLittleRadii'
                  icon={<ArrowUpIcon width={9} height={5} />}
                  widthIcon={28}
                  heightIcon={28}
                  backgroundIcon='background.white'
                  radiiIcon='atom'
                >
                  <Text color='white' fontSize='tiny' fontWeight='normal' lineHeight='tiny'>
                    <FormattedMessage id='navigation.button' />
                  </Text>
                </Button>
              </Box>

              <Layout flexBasis={20} />
            </Row>

            <Layout flexBasis={78} />
          </Condition>
        </Column>
      </Background>
    </DrawerContainer>
  )
}
