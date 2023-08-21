import React                from 'react'
import { FormattedMessage } from 'react-intl'

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

import { FaqList }          from './faq-list'
import { Item }             from './item'

export const Faq = () => {
  const { isMobile, isDesktop } = useWindowWidth()

  return (
    <Row>
      <Layout flexBasis={[16, 230]} flexShrink='0' />

      <Column flexGrow='1'>
        <Layout flexBasis={[80, 160]} />

        <Row alignItems='center'>
          <Box>
            <Text
              color='text.primary'
              fontSize={['ordinary', 'stupendous']}
              lineHeight={['regular', 'massive']}
            >
              <FormattedMessage id='faq.title' />
            </Text>
          </Box>

          <Condition match={isDesktop}>
            <Layout flexBasis={[0, 20]} flexGrow='1' />

            <Box width={247} flexShrink='0'>
              <Button
                variant='primaryBackgroundWhiteText'
                size='big'
                icon={<MailIcon width={16} height={16} />}
                widthIcon={48}
                heightIcon={48}
                backgroundIcon='background.white'
              >
                <Text color='white' fontSize='small' lineHeight='compact'>
                  <FormattedMessage id='faq.button' />
                </Text>
              </Button>
            </Box>
          </Condition>
        </Row>

        <Layout flexBasis={[60, 80]} />

        <Condition match={isDesktop}>
          <Divider backgroundColor='divider.grayGhost' weight={1} />
        </Condition>

        {FaqList.map((item) => (
          <Item question={item.question} key={item.id} />
        ))}

        <Condition match={isMobile}>
          <Layout flexBasis={60} />

          <Box>
            <Button
              variant='primaryBackgroundWhiteText'
              size='big'
              icon={<MailIcon width={16} height={16} />}
              widthIcon={48}
              heightIcon={48}
              backgroundIcon='background.white'
            >
              <Text color='white' fontSize='small' lineHeight='compact'>
                <FormattedMessage id='faq.button' />
              </Text>
            </Button>
          </Box>
        </Condition>

        <Layout flexBasis={[80, 160]} />
      </Column>

      <Layout flexBasis={[16, 80]} flexShrink='0' />
    </Row>
  )
}
