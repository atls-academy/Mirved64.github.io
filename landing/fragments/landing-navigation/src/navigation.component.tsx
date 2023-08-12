import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { LogoWhiteIcon }    from '@ui/icons'
import { ArrowDownIcon }    from '@ui/icons'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { useWindowWidth }   from '@ui/utils'

import { Item }             from './item'

export const Navigation = () => {
  const { isMobile, isDesktop } = useWindowWidth()
  const intl = useIntl()

  return (
    <Row height={[80, 120]} alignItems='center' justifyContent='center'>
      <Condition match={isMobile}>
        <NextLink>
          <LogoWhiteIcon width={40} height={40} />
        </NextLink>
      </Condition>

      <Condition match={isDesktop}>
        <Layout flexBasis={[0, 40]} />

        <Box>
          <NextLink>
            <LogoWhiteIcon width={56} height={56} />
          </NextLink>
        </Box>

        <Layout flexBasis={[0, 40]} flexGrow='1' />

        <Row height='29px' flexBasis={860} flexShrink='1'>
          <Item name={intl.formatMessage({ id: 'navigation.item.academy' })} path='/' />

          <Layout flexBasis={20} />

          <Item name={intl.formatMessage({ id: 'navigation.item.courses' })} path='/' />

          <Layout flexBasis={20} />

          <Item name={intl.formatMessage({ id: 'navigation.item.teaching' })} path='/' />

          <Layout flexBasis={20} />

          <Item name={intl.formatMessage({ id: 'navigation.item.faq' })} path='/' />
        </Row>

        <Layout flexBasis={[0, 40]} flexGrow='1' />

        <Box width={163}>
          <Button
            variant='ghostBackgroundWhiteText'
            size='normal'
            icon={<ArrowDownIcon width={16} height={16} />}
            widthIcon={48}
            heightIcon={48}
            backgroundIcon='background.white'
          >
            <NextLink>
              <Text color='white' fontSize='compact' fontWeight='normal' lineHeight='little'>
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
