import { Scrollspy }              from '@makotot/ghostui'

import React                      from 'react'
import { FC }                     from 'react'
import { FormattedMessage }       from 'react-intl'
import { useState }               from 'react'

import { Button }                 from '@ui/button'
import { Condition }              from '@ui/condition'
import { ArrowDownIcon }          from '@ui/icons'
import { Box }                    from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Logo }                   from '@ui/logo'
import { Text }                   from '@ui/text'
import { useWindowWidth }         from '@ui/utils/src'

import { NavLinks }               from './data'
import { DrawerDesktop }          from './drawer'
import { NavigationProps }        from './navigation.interfaces'
import { NavLinkItemDrawerIndex } from './navlink-item'
import { NavLinkItemIndex }       from './navlink-item'

export const NavigationDesktopIndex: FC<NavigationProps> = ({ sectionRefs }) => {
  const [active, setActive] = useState<boolean>(false)

  const { isTV } = useWindowWidth()

  const handleClick = () => setActive(!active)

  return (
    <>
      <DrawerDesktop active={active} onClose={handleClick}>
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
      </DrawerDesktop>

      <Row height={120} alignItems='center' justifyContent='center' maxWidth={2600} margin='0 auto'>
        <Layout flexBasis={40} />

        <Condition match={!isTV}>
          <Logo fill='white' width={56} height={50} />
        </Condition>

        <Condition match={isTV}>
          <Logo fill='white' width={84} height={75} />
        </Condition>

        <Layout flexBasis={40} flexGrow='1' />

        {NavLinks.map((navLink, index) => (
          <Box
            key={navLink.id}
            width={
              index < NavLinks.length - 1
                ? { standard: 220, ultra: 330 }
                : { standard: 200, ultra: 300 }
            }
          >
            <NavLinkItemIndex name={navLink.name} path={navLink.path} />

            <Condition match={index < NavLinks.length - 1}>
              <Layout flexBasis={{ standard: 20, ultra: 30 }} />
            </Condition>
          </Box>
        ))}

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
      </Row>
    </>
  )
}
