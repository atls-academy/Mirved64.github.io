import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'

import { Button }           from '@ui/button'
import { ArrowDownIcon }    from '@ui/icons'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { DrawerMobile }     from './drawer'

export const NavigationMobile = () => {
  const [active, setActive] = useState<boolean>(false)

  const handleClick = () => setActive(!active)

  return (
    <>
      <DrawerMobile active={active} onClose={handleClick} />

      <Row height={80} alignItems='center' justifyContent='center'>
        <Layout flexBasis={20} />

        <Box>
          <Logo fill='white' width={40} height={40} />
        </Box>

        <Layout flexBasis={195} flexGrow='1' flexShrink='10' />

        <Box width={100}>
          <Button
            onClick={handleClick}
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
      </Row>
    </>
  )
}
