import React                  from 'react'
import { FormattedMessage }   from 'react-intl'
import { useState }           from 'react'

import { Button }             from '@ui/button'
import { Condition }          from '@ui/condition'
import { ArrowDownIcon }      from '@ui/icons'
import { Box }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Logo }               from '@ui/logo'
import { Text }               from '@ui/text'
import { useWindowWidth }     from '@ui/utils'

import { NavLinks }           from './data'
import { DrawerDesktop }      from './drawer'
import { NavLinkItem }        from './navlink-item'
import { NavLinkItemDrawer }  from './navlink-item'

export const NavigationDesktop = () => {
  const { isMobile, isTV } = useWindowWidth()
  const [active, setActive] = useState<boolean>(false)

  const handleClick = () => setActive(!active)

  return (
    <Column maxWidth={2600} margin='0 auto'>
      <DrawerDesktop active={active} onClose={handleClick}>
        <Box>
          {NavLinks.map((navLink, index) => (
            <Box key={navLink.id} width={index < NavLinks.length - 1 ? 220 : 200}>
              <NavLinkItemDrawer path={navLink.path} name={navLink.name} active={active} />

              <Condition match={index < NavLinks.length - 1}>
                <Layout flexBasis={20} />
              </Condition>
            </Box>
          ))}
        </Box>
      </DrawerDesktop>

      <Row
        height={{standard: 120, ultra: 148 }}
        alignItems='center'
        justifyContent='center'
      >
        <Condition match={!isMobile}>
          <Layout flexBasis={40} />

          <Condition match={!isTV}>
            <Logo fill='white' width={56} height={50} />
          </Condition>

          <Condition match={isTV}>
            <Logo fill='white' width={84} height={75} />
          </Condition>

          <Layout flexBasis={40} flexGrow='1' />

          <Condition match={!isTV}>
          {NavLinks.map((navLink, index) => (
            <Box key={navLink.id} width={index < NavLinks.length - 1 ? 220 : 200}>
              <NavLinkItem name={navLink.name} path={navLink.path} />

              <Condition match={index < NavLinks.length - 1}>
                <Layout flexBasis={20} />
              </Condition>
            </Box>
          ))}</Condition>

          <Condition match={isTV}>
            {NavLinks.map((navLink, index) => (
              <Box key={navLink.id} width={index < NavLinks.length - 1 ? 330 : 300}>
                <NavLinkItem name={navLink.name} path={navLink.path} />

                <Condition match={index < NavLinks.length - 1}>
                  <Layout flexBasis={30} />
                </Condition>
              </Box>
            ))}
          </Condition>

          <Layout flexBasis={40} flexGrow='1' />

          <Box width={{ standard: 136, ultra: 203 }}>
            <Condition match={!isTV}>
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
            </Condition>

            <Condition match={isTV}>
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
            </Condition>
          </Box>

          <Layout flexBasis={40} />
        </Condition>
      </Row>
    </Column>
  )
}
