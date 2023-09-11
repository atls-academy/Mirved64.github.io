import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { ArrowDownIcon }    from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { NavLinks }         from './data'
import { DrawerDesktop }    from './drawer'
import { NavigationProps }  from './navigation.interfaces'
import { NavLinkItem }      from './navlink-item'

export const NavigationDesktop: FC<NavigationProps> = ({ sectionRefs }) => {
  const [active, setActive] = useState<boolean>(false)

  const handleClick = () => setActive(!active)

  return (
    <Column>
      <DrawerDesktop active={active} onClose={handleClick}>
        <Box>
          {NavLinks.map((navLink, index) => (
            <Box key={navLink.id} width={index < NavLinks.length - 1 ? 220 : 200}>
              <ItemNavLink path={navLink.path} name={navLink.name} active={active} />

              <Condition match={index < NavLinks.length - 1}>
                <Layout flexBasis={20} />
              </Condition>
            </Box>
          ))}
        </Box>
      </DrawerDesktop>

      <Row height={120} alignItems='center' justifyContent='center'>
        <Layout flexBasis={40} />

        <Logo fill='white' width={56} height={56} />

        <Layout flexBasis={40} flexGrow='1' />

        {NavLinks.map((navLink, index) => (
          <Box key={navLink.id} width={index < NavLinks.length - 1 ? 220 : 200}>
            <NavLinkItem name={navLink.name} path={navLink.path} />

            <Condition match={index < NavLinks.length - 1}>
              <Layout flexBasis={20} />
            </Condition>
          </Box>
        ))}

        <Layout flexBasis={40} flexGrow='1' />

        <Box width={136}>
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
            <Text color='white' fontSize='compact' lineHeight='small'>
              <FormattedMessage id='navigation.button' />
            </Text>
          </Button>
        </Box>

        <Layout flexBasis={40} />
      </Row>
    </Column>
  )
}
