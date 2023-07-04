import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'

import { Item }             from './item'

export const Faq = () => {
  const intl = useIntl()
  return (
    <Box backgroundColor='background.faq' width='100%' margin='0 auto'>
      <Layout flexBasis={[16, 230]} />
      <Column flexGrow='1'>
        <Layout flexBasis={[80, 160]} />
        <Row width='100%' justifyContent='space-between' alignItems='center'>
          <Box>
            <Text
              color='text.secondary'
              fontSize={['ordinary', 'stupendous']}
              fontWeight='normal'
              lineHeight={['regular', 'stupendous']}
              letter='-2%'
            >
              <FormattedMessage id='faqTitle' />
            </Text>
          </Box>
          <Box display={['none', 'flex']}>
            <NextLink>
              <Text
                color='text.secondary'
                fontSize='small'
                fontWeight='normal'
                lineHeight='compact'
              >
                <FormattedMessage id='faqButtonDesktop' />
              </Text>
            </NextLink>
          </Box>
        </Row>
        <Layout flexBasis={80} display={['none', 'flex']} />
        <Divider backgroundColor='divider.secondary' weight='1px' display={['none', 'flex']} />
        <Column>
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} gap='none' />
        </Column>

        <Column display={['flex', 'none']}>
          <Layout flexBasis={60} />
          <NextLink>
            <Text color='text.secondary' fontSize='small' fontWeight='normal' lineHeight='compact'>
              <FormattedMessage id='faqButtonMobile' />
            </Text>
          </NextLink>
        </Column>
        <Layout flexBasis={[80, 160]} />
      </Column>
      <Layout flexBasis={[16, 80]} />
    </Box>
  )
}
