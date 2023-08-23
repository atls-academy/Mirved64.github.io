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
    <Row height={[80, 128]} alignItems='center' justifyContent='center'>
      <Condition match={isMobile}>
        <Layout flexBasis={20} />

        <Box>
          <Logo fill='white' width={40} height={40} />
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
        <Layout flexBasis={40} />

        <Logo fill='white' width={56} height={56} />

        <Layout flexBasis={40} flexGrow='1' />

        <Row height='29px' flexBasis={860}>
          <Item name={intl.formatMessage({ id: 'navigation.item.academy' })} path='academy' />

          <Layout flexBasis={20} />

          <Item name={intl.formatMessage({ id: 'navigation.item.courses' })} path='courses' />

          <Layout flexBasis={20} />

          <Item name={intl.formatMessage({ id: 'navigation.item.teaching' })} path='teaching' />

          <Layout flexBasis={20} />

          <Item name={intl.formatMessage({ id: 'navigation.item.faq' })} path='faq' />
        </Row>

        <Layout flexBasis={40} flexGrow='1' />

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
