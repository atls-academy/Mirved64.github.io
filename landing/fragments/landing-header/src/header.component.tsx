import React                   from 'react'
import { useState }            from 'react'

import { DrawerCard }          from '@landing/fragment-navigation'
import { Background }          from '@ui/background'
import { Button }              from '@ui/button'
import { Condition }           from '@ui/condition'
import { ArrowDownIcon }       from '@ui/icons'
import { ArrowUpIcon }         from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Column }              from '@ui/layout'
import { Logo }                from '@ui/logo'
import { NavLinksBlockHeader } from '@ui/navlinks-block'
import { Text }                from '@ui/text'
import { useScrollDirection }  from '@ui/utils'

import { useHeader }           from './data'

export const Header = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const { scrollDir, scrollYpx } = useScrollDirection()

  const handleClick = () => setVisible(!visible)

  const header = useHeader()

  const buttonTitle: string = header?.data?.allNavigation?.nodes?.find(
    (obj) => obj.id === 'cG9zdDoyMjI='
  )?.title
  const cardData: { title: string; description: string; label: { title: string } } =
    header?.data?.courseBy?.course

  const cardsList: { id: number; title: string; description: string; label: { title: string } }[] =
    Array.from({ length: 3 }, () => cardData).map((el, index) => ({
      ...(el as { title: string; description: string; label: { title: string } }),
      id: index,
    }))

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
              <Logo fill='primary' width={56} height={50} />
            </Box>

            <Box display={{ _: 'none', ultra: 'flex' }}>
              <Logo fill='primary' width={84} height={75} />
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
                  {buttonTitle}
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
                  {buttonTitle}
                </Text>
              </Button>
            </Box>

            <Layout flexBasis={40} />
          </Row>

          <Condition match={visible}>
            <Layout flexBasis={50} />

            <Row>
              <Layout flexBasis={40} flexShrink='0' />

              {cardsList?.map((card, index, array) => (
                <DrawerCard index={index} array={array} card={card} key={card.id} />
              ))}

              <Layout flexBasis={40} flexShrink='0' />
            </Row>
          </Condition>

          <Layout flexBasis={32} />
        </Column>
      </Background>
    </Row>
  )
}
