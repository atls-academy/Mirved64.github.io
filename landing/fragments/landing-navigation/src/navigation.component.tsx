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
    <Box width='100%' height={[80, 120]} alignItems='center' justifyContent='center'>
      <Layout flexBasis={[0, 40]} />

      <Condition match={isMobile}>
        <Box flexGrow='1' justifyContent='center'>
          <NextLink>
            <LogoWhiteIcon width={40} height={40} />
          </NextLink>
        </Box>
      </Condition>

      <Condition match={isDesktop}>
        <Box>
          <NextLink>
            <LogoWhiteIcon width={56} height={56} />
          </NextLink>
        </Box>
      </Condition>

      <Condition match={isDesktop}>
        <Layout flexBasis={[0, 40]} flexGrow='1' />
      </Condition>

      <Condition match={isDesktop}>
        <Row height='32px' flexBasis={860} flexShrink='1'>
          <Item name={intl.formatMessage({ id: 'navigation.item.academy' })} path='/' />

          <Layout flexBasis={20} />

          <Item name={intl.formatMessage({ id: 'navigation.item.courses' })} path='/' />

          <Layout flexBasis={20} />

          <Item name={intl.formatMessage({ id: 'navigation.item.teaching' })} path='/' />

          <Layout flexBasis={20} />

          <Item name={intl.formatMessage({ id: 'navigation.item.faq' })} path='/' />
        </Row>
      </Condition>

      <Condition match={isDesktop}>
        <Layout flexBasis={[0, 40]} flexGrow='1' />
      </Condition>

      <Condition match={isDesktop}>
        <Box width={163} height={64} flexShrink='0'>
          <Button
            variant='ghostBackgroundWhiteText'
            size='normal'
            gap={24}
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
      </Condition>

      <Layout flexBasis={[0, 40]} />
    </Box>
  )
}
