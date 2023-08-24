import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { ArrowDownIcon }    from '@ui/icons'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'
import { useWindowWidth }   from '@ui/utils'

import { NavLinks }         from './data'
import { Drawer }           from './drawer'
import { Item }             from './item'

export const Navigation = ({ sectionRefs }) => {
  const { isMobile, isDesktop } = useWindowWidth()
  const [active, setActive] = useState<boolean>(false)

  return (
    <>
      <Drawer active={active} onClose={() => setActive(false)} sectionRefs={sectionRefs} />
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
              <Text color='white' fontSize='tiny' fontWeight='normal' lineHeight='tiny'>
                <FormattedMessage id='navigation.button' />
              </Text>
            </Button>
          </Box>

          <Layout flexBasis={20} />
        </Condition>

        <Condition match={isDesktop}>
          <Layout flexBasis={40} />

          <Logo fill='white' width={56} height={56} />

          <Layout flexBasis={40} flexGrow='1' />

          {NavLinks.map((navLink, index) => (
            <Box key={navLink.id} width={index < NavLinks.length - 1 ? 220 : 200}>
              <Item name={navLink.name} path={navLink.path} />

              <Condition match={index < NavLinks.length - 1}>
                <Layout flexBasis={20} />
              </Condition>
            </Box>
          ))}

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
              <Text color='white' fontSize='compact' lineHeight='little'>
                <FormattedMessage id='navigation.button' />
              </Text>
            </Button>
          </Box>

          <Layout flexBasis={[0, 40]} />
        </Condition>
      </Row>
    </>
  )
}
