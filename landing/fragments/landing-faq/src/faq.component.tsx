import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Divider }          from '@ui/divider'
import { MailIcon }         from '@ui/icons'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'

import { Item }             from './item'

export const Faq = () => {
  const intl = useIntl()
  return (
    <Box backgroundColor='background.faq.mainColor' width='100%' margin='0 auto'>
      <Layout flexBasis={[16, 230]} />

      <Column flexGrow='1'>
        <Layout flexBasis={[80, 160]} />

        <Row justifyContent='space-between' alignItems='center'>
          <Box>
            <Text
              color='text.faq.primary'
              fontSize={['ordinary', 'stupendous']}
              fontWeight='normal'
              lineHeight={['regular', 'massive']}
              letter='-2%'
            >
              <FormattedMessage id='faqTitle' />
            </Text>
          </Box>

          <Box
            width={247}
            height={72}
            display={['none', 'flex']}
            alignItems='center'
            flexShrink='0'
          >
            <Button variant='transparentBackgroundBlackText' divider={24} fill>
              <Box width={139} height={20}>
                <NextLink>
                  <Text fontSize='small' fontWeight='normal' lineHeight='compact'>
                    <FormattedMessage id='faqButton' />
                  </Text>
                </NextLink>
              </Box>
              <Box
                width={48}
                height={48}
                alignItems='center'
                justifyContent='center'
                backgroundColor='background.faq.white'
              >
                <MailIcon width={16} height={16} />
              </Box>
            </Button>
          </Box>
        </Row>

        <Layout flexBasis={[0, 80]} />

        <Divider backgroundColor='divider.secondary' weight='1px' display={['none', 'flex']} />

        <Column>
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
        </Column>

        <Column display={['flex', 'none']}>
          <Layout flexBasis={60} />

          <Box width={247} height={72} alignItems='center' flexShrink='0'>
            <Button variant='transparentBackgroundBlackText' divider={24} fill>
              <Box width={139} height={20}>
                <NextLink>
                  <Text fontSize='small' fontWeight='normal' lineHeight='compact'>
                    <FormattedMessage id='faqButton' />
                  </Text>
                </NextLink>
              </Box>
              <Box
                width={48}
                height={48}
                alignItems='center'
                justifyContent='center'
                backgroundColor='background.faq.white'
              >
                <MailIcon width={16} height={16} />
              </Box>
            </Button>
          </Box>
        </Column>

        <Layout flexBasis={[80, 160]} />
      </Column>

      <Layout flexBasis={[16, 80]} />
    </Box>
  )
}
