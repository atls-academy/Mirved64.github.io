import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { ArrowDownIcon }    from '@ui/icons'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'
import { useWindowWidth }   from '@ui/utils'

import { Item }             from './item'

export const Navigation = () => {
  const { isMobile, isDesktop } = useWindowWidth()
  const intl = useIntl()

  return (
    <Row height={[80, 120]} alignItems='center' justifyContent='center'>
      <Condition match={isMobile}>
        <Layout flexBasis={20} />

        <Box>
          <Logo fill='white' logoWidth={40} logoHeight={40} />
        </Box>

        <Layout flexBasis={195} flexGrow='1' flexShrink='10' />

        <Box width={100}>
          <Button
            variant='ghostBackgroundWhiteText'
            size='smallSizeLittleRadii'
            icon={<ArrowDownIcon width={9} height={5} />}
            widthIcon={28}
            heightIcon={28}
            backgroundIcon='background.white'
            radiiIcon='atom'
          >
            <NextLink>
              <Text color='white' fontSize='tiny' fontWeight='normal' lineHeight='tiny'>
                <FormattedMessage id='navigation.button' />
              </Text>
            </NextLink>
          </Button>
        </Box>

        <Layout flexBasis={20} />
      </Condition>

      <Condition match={isDesktop}>
        <Layout flexBasis={[0, 40]} />

        <Box>
          <Box>
            <Logo fill='white' logoWidth={56} logoHeight={56} />
          </Box>
        </Box>

        <Layout flexBasis={[0, 40]} flexGrow='1' />

        <Row height='29px' flexBasis={860}>
          <Item name={intl.formatMessage({ id: 'navigation.item.academy' })} path='/' />

          <Layout flexBasis={20} />

          <Item name={intl.formatMessage({ id: 'navigation.item.courses' })} path='/' />

          <Layout flexBasis={20} />

          <Item name={intl.formatMessage({ id: 'navigation.item.teaching' })} path='/' />

          <Layout flexBasis={20} />

          <Item name={intl.formatMessage({ id: 'navigation.item.faq' })} path='/' />
        </Row>

        <Layout flexBasis={[0, 40]} flexGrow='1' />

        <Box width={136}>
          <Button
            variant='ghostBackgroundWhiteText'
            size='bigSizeNormalRadiiBigPadding'
            icon={<ArrowDownIcon width={12} height={6} />}
            widthIcon={40}
            heightIcon={40}
            backgroundIcon='background.white'
            radiiIcon='little'
          >
            <NextLink>
              <Text color='white' fontSize='compact' lineHeight='little'>
                <FormattedMessage id='navigation.button' />
              </Text>
            </NextLink>
          </Button>
        </Box>
        <Layout flexBasis={[0, 40]} />
      </Condition>
    </Row>
  )
}
