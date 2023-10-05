import React               from 'react'
import { FC }              from 'react'

import { Background }      from '@ui/background'
import { Button }          from '@ui/button'
import { DrawerContainer } from '@ui/drawer'
import { ArrowUpIcon }     from '@ui/icons'
import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Logo }            from '@ui/logo'
import { Text }            from '@ui/text'

import { DrawerCard }      from './drawer-card'
import { DrawerProps }     from './drawer.interfaces'
import { useNavigation }   from '../data'

export const DrawerDesktop: FC<DrawerProps> = ({ active, onClose, children }) => {
  const navigation = useNavigation()

  const buttonTitle: string = navigation?.data?.allNavigation.nodes.find(
    (obj) => obj.id === 'cG9zdDoyMjI='
  )?.title
  const cardData = navigation?.data?.courseBy?.course

  const cardsList: { id: number; title: string; description: string; label: { title: string } }[] =
    Array.from({ length: 3 }, () => cardData).map((el, index) => ({
      ...(el as { title: string; description: string; label: { title: string } }),
      id: index,
    }))

  return (
    <DrawerContainer active={active}>
      <Background backgroundColor='white' borderRadius={['normalBottom', 'bigBottom']} width='100%'>
        <Column maxWidth={2600} margin='0 auto'>
          <Layout flexBasis={32} />

          <Row alignItems='center' height={56}>
            <Layout flexBasis={40} />

            <Box display={{ _: 'none', standard: 'flex', ultra: 'none' }}>
              <Logo fill='primary' width={56} height={50} />
            </Box>

            <Box display={{ _: 'none', ultra: 'flex' }}>
              <Logo fill='primary' width={84} height={75} />
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
                  {buttonTitle}
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
                  {buttonTitle}
                </Text>
              </Button>
            </Box>

            <Layout flexBasis={40} />
          </Row>

          <Layout flexBasis={50} />
          <Row>
            <Layout flexBasis={40} flexShrink='0' />

            {cardsList?.map((card, index, array) => (
              <DrawerCard index={index} array={array} card={card} key={card.id} />
            ))}

            <Layout flexBasis={40} flexShrink='0' />
          </Row>

          <Layout flexBasis={32} />
        </Column>
      </Background>
    </DrawerContainer>
  )
}
