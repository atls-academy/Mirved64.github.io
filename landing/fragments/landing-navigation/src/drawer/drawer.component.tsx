import { Scrollspy }        from '@makotot/ghostui'

import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { Link }             from 'react-scroll'

import { Background }       from '@ui/background'
import { Button }           from '@ui/button'
import { Card }             from '@ui/card'
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

import { CardDataDesktop }  from '../data'
import { CardDataMobile }   from '../data'
import { NavLinks }         from '../data'

export const Drawer = ({ active, onClose, sectionRefs }) => {
  const { isMobile, isDesktop } = useWindowWidth()
  const { hover, hoverProps } = useHover()

  const cardsList = () =>
    Array.from({ length: 3 }, () => CardDataDesktop).map((el, index) => ({ ...el, id: index }))

  return (
    <DrawerContainer heightDrawer={[495, 600]} active={active}>
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
            <Row>
              <Layout flexBasis={40} flexShrink='0' />
              {cardsList().map((card, index, array) => (
                <Row key={card.id}>
                  <Card
                    category={card.category}
                    titleDesktop={card.title}
                    description={card.description}
                    indent={110}
                    widthCategoryBox={104}
                  />

                  <Condition match={index < array.length - 1}>
                    <Layout flexBasis={30} flexShrink='0' />
                  </Condition>
                </Row>
              ))}

              <Layout flexBasis={40} flexShrink='0' />
            </Row>

            <Layout flexBasis={32} />
          </Condition>

          <Condition match={isMobile}>
            <Layout flexBasis={20} />

            <Row height={40} alignItems='center'>
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

            <Row>
              <Layout flexBasis={20} />

              <Column flexGrow='1'>
                {CardDataMobile.map((card, index, array) => (
                  <Column key={card.id} flexBasis={85}>
                    <Box
                      width={card.category === 'базовый' ? 87 : 122}
                      height={32}
                      border='thinnestPrimary'
                      borderRadius='tiny'
                      justifyContent='center'
                      alignItems='center'
                    >
                      <Text
                        color='text.primaryText'
                        fontSize='atom'
                        lineHeight='petty'
                        textTransform='uppercase'
                      >
                        {card.category}
                      </Text>
                    </Box>

                    <Layout flexBasis={8} />

                    <Box>
                      <Text color='text.primaryText' fontSize='ordinary' lineHeight='regular'>
                        {card.title}
                      </Text>
                    </Box>

                    <Condition match={index < array.length - 1}>
                      <Layout flexBasis={20} />

                      <Divider
                        backgroundColor='divider.primaryTransparent'
                        weight={1}
                        width='100%'
                      />

                      <Layout flexBasis={20} />
                    </Condition>
                  </Column>
                ))}
              </Column>

              <Layout flexBasis={20} />
            </Row>

            <Layout flexBasis={20} />
          </Condition>
        </Column>
      </Background>
    </DrawerContainer>
  )
}
