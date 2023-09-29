import React                   from 'react'
import { FormattedMessage }    from 'react-intl'
import { useState }            from 'react'

import { CardDataDesktop }     from '@landing/fragment-navigation'
import { DrawerCard }          from '@landing/fragment-navigation'
import { Background }          from '@ui/background/src'
import { Button }              from '@ui/button'
import { Condition }           from '@ui/condition'
import { ArrowDownIcon }       from '@ui/icons'
import { ArrowUpIcon }         from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Column }              from '@ui/layout/src'
import { Logo }                from '@ui/logo'
import { NavLinksBlockHeader } from '@ui/navlinks-block/src'
import { Text }                from '@ui/text'
import { useScrollDirection }  from '@ui/utils'

export const Header = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const { scrollDir, scrollYpx } = useScrollDirection()

  const handleClick = () => setVisible(!visible)

  const cardsList = Array.from({ length: 3 }, () => CardDataDesktop).map((el, index) => ({
    ...el,
    id: index,
  }))

  const headerCards = cardsList.map((card, index, array) => (
    <DrawerCard index={index} array={array} card={card} key={card.id} />
  ))

  return (
    <Row justifyContent='center'>
      <Background
        backgroundColor='white'
        borderRadius={['normalBottom', 'bigBottom']}
        width='100%'
        position='fixed'
        zIndex={30}
        style={
          scrollDir === 'up' && scrollYpx >= 120
            ? { top: 0, opacity: 1, transition: '.3s' }
            : { top: '-100%', opacity: 0, transition: '.3s' }
        }
      >
        <Column maxWidth={2600} margin='0 auto'>
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

            <NavLinksBlockHeader />

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

          <Condition match={visible}>
            <Layout flexBasis={50} />

            <Row>
              <Layout flexBasis={40} flexShrink='0' />

              {headerCards}

              <Layout flexBasis={40} flexShrink='0' />
            </Row>
          </Condition>

          <Layout flexBasis={32} />
        </Column>
      </Background>
    </Row>
  )
}
