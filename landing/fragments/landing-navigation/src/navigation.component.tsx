import React                   from 'react'
import { useState }            from 'react'

import { Button }              from '@ui/button'
import { ArrowDownIcon }       from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Logo }                from '@ui/logo'
import { NavLinksBlock }       from '@ui/navlinks-block'
import { NavLinksBlockDrawer } from '@ui/navlinks-block'
import { Text }                from '@ui/text'

import { DrawerDesktop }       from './drawer'
import { useNavigation }       from './data'

export const NavigationDesktop = () => {
  const [active, setActive] = useState<boolean>(false)

  const handleClick = () => setActive(!active)

  const navigation = useNavigation()

  const buttonTitle: string = navigation?.data?.allNavigation.nodes.find(
    (obj) => obj.id === 'cG9zdDoyMjI='
  )?.title

  return (
    <>
      <DrawerDesktop active={active} onClose={handleClick}>
        <NavLinksBlockDrawer active={active} />
      </DrawerDesktop>

      <Row
        height={{ standard: 120, ultra: 148 }}
        maxWidth={2600}
        margin='0 auto'
        alignItems='center'
        justifyContent='center'
      >
        <Layout flexBasis={40} />

        <Box display={{ _: 'none', standard: 'flex', ultra: 'none' }}>
          <Logo fill='white' width={56} height={50} />
        </Box>

        <Box display={{ _: 'none', ultra: 'flex' }}>
          <Logo fill='white' width={84} height={75} />
        </Box>

        <Layout flexBasis={40} flexGrow='1' />

        <NavLinksBlock />

        <Layout flexBasis={40} flexGrow='1' />

        <Box width={136} display={{ _: 'none', standard: 'flex', ultra: 'none' }}>
          <Button
            onClick={handleClick}
            variant='ghostBackgroundWhiteText'
            size='bigSizeNormalRadiiBigPadding'
            icon={<ArrowDownIcon width={12} height={6} />}
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

        <Box width={203} display={{ _: 'none', ultra: 'flex' }}>
          <Button
            onClick={handleClick}
            variant='ghostBackgroundWhiteText'
            size='giantSizeRegularRadii'
            icon={<ArrowDownIcon width={24} height={24} />}
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
    </>
  )
}
