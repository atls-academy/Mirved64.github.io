import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Background }       from '@ui/background'
import { Button }           from '@ui/button'
import { Card }             from '@ui/card'
import { Condition }        from '@ui/condition'
import { DrawerContainer }  from '@ui/drawer'
import { ArrowUpIcon }      from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'
import { useWindowWidth }   from '@ui/utils'

import { CardDataDesktop }  from '../data'
import { DrawerProps }      from './drawer.interfaces'

export const DrawerDesktop: FC<DrawerProps> = ({ active, onClose, children }) => {
  const { isTV } = useWindowWidth()

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
    <DrawerContainer active={active}>
      <Background backgroundColor='white' borderRadius={['normalBottom', 'bigBottom']} width='100%'>
        <Column>
          <Layout flexBasis={32} />

          <Row alignItems='center' height={56}>
            <Layout flexBasis={40} />

            <Condition match={!isTV}>
              <Logo fill='rgba(58, 55, 93, 1)' width={56} height={50} />
            </Condition>

            <Condition match={isTV}>
              <Logo fill='rgba(58, 55, 93, 1)' width={84} height={75} />
            </Condition>

            <Layout flexBasis={40} flexGrow='1' />

            {children}

            <Layout flexBasis={40} flexGrow='1' />

            <Box width={{ standard: 136, ultra: 203 }}>
              <Condition match={!isTV}>
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
              </Condition>

              <Condition match={isTV}>
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
              </Condition>
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
