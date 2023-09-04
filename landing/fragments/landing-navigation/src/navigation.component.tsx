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
import { useWindowWidth }   from '@ui/utils'

import { NavLinks }         from './data'
import { Drawer }           from './drawer'
import { DrawerIndexPage }  from './drawer'
import { Item }             from './item'
import { ItemNavLink }      from './item'
import { NavigationProps }  from './navigation.interfaces'

export const Navigation: FC<NavigationProps> = ({ sectionRefs, isIndex = false }) => {
  const { isMobile, isDesktop, isWideDesktop, isTV } = useWindowWidth()
  const [active, setActive] = useState<boolean>(false)

  return (
    <Column maxWidth={2600}>
      <Condition match={isIndex}>
        <DrawerIndexPage
          active={active}
          onClose={() => setActive(false)}
          sectionRefs={sectionRefs}
        />
      </Condition>

      <Condition match={!isIndex}>
        <Drawer active={active} onClose={() => setActive(false)} />
      </Condition>

      <Row height={[80, 120]} alignItems='center' justifyContent='center'>
        <Condition match={isMobile}>
          <Layout flexBasis={20} />

          <Box>
            <Logo fill='white' width={40} height={40} />
          </Box>

          <Layout flexBasis={195} flexGrow='1' flexShrink='10' />

          <Box width={100}>
            <Button
              onClick={() => setActive(true)}
              variant='ghostBackgroundWhiteText'
              size='smallSizeLittleRadii'
              icon={<ArrowDownIcon width={9} height={5} />}
              widthIcon={28}
              heightIcon={28}
              backgroundIcon='background.white'
              radiiIcon='atom'
            >
              <Text color='white' fontSize='tiny' fontWeight='normal' lineHeight='small'>
                <FormattedMessage id='navigation.button' />
              </Text>
            </Button>
          </Box>

          <Layout flexBasis={20} />
        </Condition>

        <Condition match={isDesktop || isWideDesktop || isTV}>
          <Layout flexBasis={40} />

          <Logo fill='white' width={56} height={56} />

          <Layout flexBasis={40} flexGrow='1' />

          <Condition match={isIndex}>
            {NavLinks.map((navLink, index) => (
              <Box key={navLink.id} width={index < NavLinks.length - 1 ? 220 : 200}>
                <Item name={navLink.name} path={navLink.path} />

                <Condition match={index < NavLinks.length - 1}>
                  <Layout flexBasis={20} />
                </Condition>
              </Box>
            ))}
          </Condition>

          <Condition match={!isIndex}>
            {NavLinks.map((navLink, index) => (
              <Box key={navLink.id} width={index < NavLinks.length - 1 ? 220 : 200}>
                <ItemNavLink name={navLink.name} path={navLink.path} />

                <Condition match={index < NavLinks.length - 1}>
                  <Layout flexBasis={20} />
                </Condition>
              </Box>
            ))}
          </Condition>

          <Layout flexBasis={40} flexGrow='1' />

          <Box width={136}>
            <Button
              onClick={() => setActive(true)}
              variant='ghostBackgroundWhiteText'
              size='bigSizeNormalRadiiBigPadding'
              icon={<ArrowDownIcon width={12} height={6} />}
              widthIcon={40}
              heightIcon={40}
              backgroundIcon='background.white'
              radiiIcon='little'
            >
              <Text color='white' fontSize='little' lineHeight='small'>
                <FormattedMessage id='navigation.button' />
              </Text>
            </Button>
          </Box>

          <Layout flexBasis={40} />
        </Condition>
      </Row>
    </Column>
  )
}
