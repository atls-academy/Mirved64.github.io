import { Scrollspy }              from '@makotot/ghostui'

import React                      from 'react'
import { FC }                     from 'react'
import { FormattedMessage }       from 'react-intl'
import { useState }               from 'react'

import { CardDataDesktop }        from '@landing/fragment-navigation'
import { NavLinks }               from '@landing/fragment-navigation'
import { NavLinkItemDrawerIndex } from '@landing/fragment-navigation'
import { Background }             from '@ui/background/src'
import { Button }                 from '@ui/button'
import { Card }                   from '@ui/card/src'
import { Condition }              from '@ui/condition'
import { ArrowDownIcon }          from '@ui/icons'
import { ArrowUpIcon }            from '@ui/icons'
import { Box }                    from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Column }                 from '@ui/layout/src'
import { Logo }                   from '@ui/logo'
import { Text }                   from '@ui/text'
import { useScrollDirection }     from '@ui/utils'

import { HeaderIndexProps }       from './header.interfaces'

export const HeaderIndex: FC<HeaderIndexProps> = ({ sectionRefs}) => {
  const [visible, setVisible] = useState<boolean>(false)

  const { scrollDir, scrollYpx } = useScrollDirection()

  const handleClick = () => setVisible(!visible)

  const cardsList = Array.from({ length: 3 }, () => CardDataDesktop).map((el, index) => ({
    ...el,
    id: index,
  }))

  const drawerCards = cardsList.map((card, index, array) => {
    const Indent = () => (
      <Condition match={index !== 0 && index !== array.length - 1}>
        <Layout flexBasis={10} flexShrink='0' />
      </Condition>
    )

    return (
      <Row key={card.id}>
        <Condition match={index === array.length - 1}>
          <Layout flexBasis={20} flexShrink='0' />
        </Condition>

        <Indent />

        <Card
          category={card.category}
          titleDesktop={card.title}
          description={card.description}
          indent={110}
          widthCategoryBox={104}
        />

        <Indent />

        <Condition match={index === 0}>
          <Layout flexBasis={20} flexShrink='0' />
        </Condition>
      </Row>
    )
  })

  return (
    <Row justifyContent='center'>
      <Background
        backgroundColor='white'
        borderRadius={['normalBottom', 'bigBottom']}
        width='100%'
        maxWidth={2600}
        position='fixed'
        zIndex={30}
        style={
          scrollDir === 'up' && scrollYpx >= 120
            ? { top: 0, opacity: 1, transition: '.3s' }
            : { top: '-100%', opacity: 0, transition: '.3s' }
        }
      >
        <Column>
          <Layout flexBasis={32} />

          <Row alignItems='center' height={56}>
            <Layout flexBasis={40} />

            <Box display={{ _: 'none', standard: 'flex', ultra: 'none' }}>
              <Logo fill='rgba(58, 55, 93, 1)' width={56} height={50} />
            </Box>

            <Box display={{ _: 'none', ultra: 'flex' }}>
              <Logo fill='rgba(58, 55, 93, 1)' width={84} height={75} />
            </Box>

            <Layout flexBasis={40} flexGrow='1' />

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

            <Layout flexBasis={40} flexGrow='1' />

            <Box display={{ _: 'none', standard: 'flex', ultra: 'none' }} width={136}>
              <Button
                onClick={handleClick}
                variant='primaryBackgroundWhiteText'
                size='bigSizeNormalRadiiBigPadding'
                icon={
                  visible ? (
                    <ArrowUpIcon width={12} height={6} />
                  ) : (
                    <ArrowDownIcon width={12} height={6} />
                  )
                }
                widthIcon={40}
                heightIcon={40}
                backgroundIcon='background.white'
                radiiIcon='little'
              >
                <Text color='text.white' fontSize='compact' lineHeight='small'>
                  <FormattedMessage id='navigation.button' />
                </Text>
              </Button>
            </Box>

            <Box display={{ _: 'none', ultra: 'flex' }} width={203}>
              <Button
                onClick={handleClick}
                variant='primaryBackgroundWhiteText'
                size='giantSizeRegularRadii'
                icon={
                  visible ? (
                    <ArrowUpIcon width={24} height={24} />
                  ) : (
                    <ArrowDownIcon width={24} height={24} />
                  )
                }
                widthIcon={60}
                heightIcon={60}
                backgroundIcon='background.white'
                radiiIcon='usual'
              >
                <Text color='text.white' fontSize='medium' lineHeight='small'>
                  <FormattedMessage id='navigation.button' />
                </Text>
              </Button>
            </Box>

            <Layout flexBasis={40} />
          </Row>

          {visible ? (
            <>
              <Layout flexBasis={50} />
              <Row>
                <Layout flexBasis={40} flexShrink='0' />

                {drawerCards}

                <Layout flexBasis={40} flexShrink='0' />
              </Row>
            </>
          ) : null}

          <Layout flexBasis={32} />
        </Column>
      </Background>
    </Row>
  )
}
