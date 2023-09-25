import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Background }       from '@ui/background'
import { Button }           from '@ui/button'
import { DrawerContainer }  from '@ui/drawer'
import { ArrowUpIcon }      from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { CardDataDesktop }  from '../data'
import { DrawerCard }       from './drawer-card'
import { DrawerProps }      from './drawer.interfaces'

export const DrawerDesktop: FC<DrawerProps> = ({ active, onClose, children }) => {
  const cardsList = Array.from({ length: 3 }, () => CardDataDesktop).map((el, index) => ({
    ...el,
    id: index,
  }))

  const drawerCards = cardsList.map((card, index, array) => (
    <DrawerCard key={card.id} card={card} array={array} index={index} />
  ))

  return (
    <DrawerContainer active={active}>
      <Background backgroundColor='white' borderRadius={['normalBottom', 'bigBottom']} width='100%'>
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

            {children}

            <Layout flexBasis={40} flexGrow='1' />

            <Box display={{ _: 'none', standard: 'flex', ultra: 'none' }} width={136}>
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
                <Text color='text.white' fontSize='compact' lineHeight='small'>
                  <FormattedMessage id='navigation.button' />
                </Text>
              </Button>
            </Box>

            <Box display={{ _: 'none', ultra: 'flex' }} width={203}>
              <Button
                onClick={onClose}
                variant='primaryBackgroundWhiteText'
                size='giantSizeRegularRadii'
                icon={<ArrowUpIcon width={24} height={24} />}
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

          <Layout flexBasis={50} />
          <Row>
            <Layout flexBasis={40} flexShrink='0' />

            {drawerCards}

            <Layout flexBasis={40} flexShrink='0' />
          </Row>

          <Layout flexBasis={32} />
        </Column>
      </Background>
    </DrawerContainer>
  )
}
