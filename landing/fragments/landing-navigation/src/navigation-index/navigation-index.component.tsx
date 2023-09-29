import React                        from 'react'
import { FC }                       from 'react'
import { FormattedMessage }         from 'react-intl'
import { useState }                 from 'react'

import { Button }                   from '@ui/button'
import { ArrowDownIcon }            from '@ui/icons'
import { Box }                      from '@ui/layout'
import { Row }                      from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Logo }                     from '@ui/logo'
import { NavLinksBlockIndex }       from '@ui/navlinks-block'
import { NavLinksBlockDrawerIndex } from '@ui/navlinks-block'
import { Text }                     from '@ui/text'

import { DrawerDesktop }            from '../drawer'
import { NavigationProps }          from '../navigation.interfaces'

export const NavigationDesktopIndex: FC<NavigationProps> = ({ sectionRefs }) => {
  const [active, setActive] = useState<boolean>(false)

  const handleClick = () => setActive(!active)

  return (
    <>
      <DrawerDesktop active={active} onClose={handleClick}>
        <NavLinksBlockDrawerIndex sectionRefs={sectionRefs} />
      </DrawerDesktop>

      <Row height={120} alignItems='center' justifyContent='center' maxWidth={2600} margin='0 auto'>
        <Layout flexBasis={40} />

        <Box display={{ _: 'none', standard: 'flex', ultra: 'none' }}>
          <Logo fill='white' width={56} height={50} />
        </Box>

        <Box display={{ _: 'none', ultra: 'flex' }}>
          <Logo fill='white' width={84} height={75} />
        </Box>

        <Layout flexBasis={40} flexGrow='1' />

        <NavLinksBlockIndex />

        <Layout flexBasis={40} flexGrow='1' />

        <Box display={{ _: 'none', standard: 'flex', ultra: 'none' }} width={136}>
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
              <FormattedMessage id='navigation.button' />
            </Text>
          </Button>
        </Box>

        <Box display={{ _: 'none', ultra: 'flex' }} width={203}>
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
              <FormattedMessage id='navigation.button' />
            </Text>
          </Button>
        </Box>

        <Layout flexBasis={40} />
      </Row>
    </>
  )
}
