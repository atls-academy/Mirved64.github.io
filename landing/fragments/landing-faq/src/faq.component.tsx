import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'

import { faqList }          from './faq-list/faq.list'

export const Faq = () => (
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
            <Text color='text.secondary' fontSize='small' fontWeight='normal' lineHeight='compact'>
              <FormattedMessage id='faqButtonDesktop' />
            </Text>
          </NextLink>
        </Box>
      </Row>
      <Layout flexBasis={80} display={['none', 'flex']} />
      <Divider backgroundColor='divider.secondary' weight='1px' display={['none', 'flex']} />
      <Column>
        {faqList.map((question, index) => (
          <Column key={question.id} height='100%'>
            <Layout flexBasis={[16, 40]} />
            <Row justifyContent={['space-between', 'start']}>
              <Box alignItems='center' order={['2', '0']}>
                <Text color='text.secondary' fontSize='small' fontWeight='normal'>
                  <FormattedMessage id='cross' />
                </Text>
              </Box>
              <Layout flexBasis={[0, 27]} />
              <Box alignItems='center' flexGrow={[1, 0]}>
                <Text
                  color='text.secondary'
                  fontSize={['small', 'ordinary']}
                  fontWeight='normal'
                  lineHeight={['standart', 'regular']}
                >
                  <FormattedMessage id={question.question} />
                </Text>
              </Box>
            </Row>
            <Layout flexBasis={[16, 40]} />
            <Divider backgroundColor='divider.secondary' weight='1px' />
          </Column>
        ))}
      </Column>
      <Layout flexBasis={60} />
      <Box display={['flex', 'none']}>
        <NextLink>
          <Text color='text.secondary' fontSize='small' fontWeight='normal' lineHeight='compact'>
            <FormattedMessage id='faqButtonMobile' />
          </Text>
        </NextLink>
      </Box>
      <Layout flexBasis={[80, 160]} />
    </Column>
    <Layout flexBasis={[16, 80]} />
  </Box>
)
