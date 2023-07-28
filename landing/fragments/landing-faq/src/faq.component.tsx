import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Divider }          from '@ui/divider'
import { MailIcon }         from '@ui/icons'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { useWindowWidth }   from '@ui/utils'

import { Item }             from './item'

export const Faq = () => {
  const intl = useIntl()
  const windowWidth = useWindowWidth()

  return (
    <Box backgroundColor='background.faq.mainColor' width='100%' justifyContent='center'>
      <Layout flexBasis={[16, 230]} flexShrink='0' />

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

          <Condition match={windowWidth > 640}>
            <Box width={247} height={72} alignItems='center' flexShrink='0'>
              <Button
                variant='transparentBackgroundBlackText'
                gap={24}
                fill
                icon={<MailIcon width={16} height={16} />}
                widthIcon={48}
                heightIcon={48}
                backgroundIcon='background.faq.white'
              >
                <Text fontSize='small' fontWeight='normal' lineHeight='compact'>
                  <FormattedMessage id='faqButton' />
                </Text>
              </Button>
            </Box>
          </Condition>
        </Row>

        <Layout flexBasis={[60, 80]} />

        <Condition match={windowWidth > 640}>
          <Divider backgroundColor='divider.secondary' weight='1px' />
        </Condition>

        <Column>
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
          <Item question={intl.formatMessage({ id: 'faqQuestion' })} divider={1} />
        </Column>

        <Condition match={windowWidth < 640}>
          <Column>
            <Layout flexBasis={60} />

            <Box width={247} height={72} alignItems='center' flexShrink='0'>
              <Button
                variant='transparentBackgroundBlackText'
                gap={24}
                fill
                icon={<MailIcon width={16} height={16} />}
                widthIcon={48}
                heightIcon={48}
                backgroundIcon='background.faq.white'
              >
                <Text fontSize='small' fontWeight='normal' lineHeight='compact'>
                  <FormattedMessage id='faqButton' />
                </Text>
              </Button>
            </Box>
          </Column>
        </Condition>

        <Layout flexBasis={[80, 160]} />
      </Column>

      <Layout flexBasis={[16, 80]} flexShrink='0' />
    </Box>
  )
}
