import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { TelegramIcon }     from '@ui/icons'
import { GitHubIcon }       from '@ui/icons'
import { MailIcon }         from '@ui/icons'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

export const Hero = () => (
  <Box backgroundColor='background.hero' width='100%' flexDirection='column' margin='0 auto'>
    <Layout flexBasis={[80, 412]} />
    <Row flexGrow='1' flexShrink='1'>
      <Layout flexBasis={[20, 230]} flexShrink='0' />

      <Row flexGrow='1' flexShrink='1'>
        <Column flexShrink='1' flexGrow='1' flexBasis={[335, 1460]}>
          <Box>
            <Text
              color='text.hero.primary'
              fontSize={['normal', 'stupendous']}
              fontWeight='normal'
              lineHeight={['ordinary', 'stupendous']}
            >
              <FormattedMessage id='heroTitleTeach' />
            </Text>
          </Box>

          <Box>
            <Text
              color='text.hero.primary'
              fontSize={['normal', 'stupendous']}
              fontWeight='normal'
              lineHeight={['ordinary', 'stupendous']}
              wordBreak='break-all'
            >
              <FormattedMessage id='heroTitleProfessionals' />
            </Text>
          </Box>

          <Row>
            <Box>
              <Text
                color='text.hero.primary'
                fontSize={['normal', 'stupendous']}
                fontWeight='normal'
                lineHeight={['ordinary', 'stupendous']}
                wordBreak='break-all'
              >
                <FormattedMessage id='heroTitleRevolution' />
              </Text>
            </Box>

            <Space count='8' />

            <Box flexShrink='0'>
              <Text
                color='text.hero.primary'
                fontSize={['normal', 'stupendous']}
                fontWeight='normal'
                lineHeight={['ordinary', 'stupendous']}
                wordBreak='break-all'
              >
                <FormattedMessage id='heroTitleIt' />
              </Text>
            </Box>
          </Row>

          <Layout flexBasis={[24, 48]} />

          <Divider backgroundColor='divider.primary' weight={1} />

          <Layout flexBasis={[24, 48]} />

          <Box flexWrap='wrap' maxWidth={640}>
            <Text
              color='text.hero.primary'
              fontSize={['tiny', 'small']}
              fontWeight='normal'
              lineHeight={['compact', 'normal']}
            >
              <FormattedMessage id='heroSlogan' />
            </Text>
          </Box>

          <Layout flexBasis={[24, 0]} />

          <Box
            display={['flex', 'none']}
            flexShrink='1'
            flexGrow='1'
            flexBasis={44}
            justifyContent='space-between'
            alignItems='center'
          >
            <Box width='104px' height='44px' justifyContent='center' alignItems='center'>
              <Box width='15px' height='12px'>
                <NextLink>
                  <TelegramIcon width='100%' height='100%' />
                </NextLink>
              </Box>
            </Box>

            <Box width='104px' height='44px' justifyContent='center' alignItems='center'>
              <Box width='15px' height='15px'>
                <NextLink>
                  <GitHubIcon width='100%' height='100%' />
                </NextLink>
              </Box>
            </Box>

            <Box width='104px' height='44px' justifyContent='center' alignItems='center'>
              <Box width='18px' height='14px'>
                <NextLink>
                  <MailIcon width='100%' height='100%' />
                </NextLink>
              </Box>
            </Box>
          </Box>
        </Column>

        <Layout flexBasis={[0, 134]} />

        <Box alignItems='end' flexBasis={56} display={['none', 'flex']}>
          <Column height='200px' justifyContent='space-around' alignItems='center'>
            <Box width='56px' height='56px' alignItems='center' justifyContent='center'>
              <Box width='18px' height='15px' flexShrink='0'>
                <NextLink>
                  <TelegramIcon width='100%' height='100%' />
                </NextLink>
              </Box>
            </Box>

            <Box width='56px' height='56px' alignItems='center' justifyContent='center'>
              <Box width='18px' height='18px' flexShrink='0'>
                <NextLink>
                  <GitHubIcon width='100%' height='100%' />
                </NextLink>
              </Box>
            </Box>

            <Box width='56px' height='56px' alignItems='center' justifyContent='center'>
              <Box width='18px' height='14px' flexShrink='0'>
                <NextLink>
                  <MailIcon width='100%' height='100%' />
                </NextLink>
              </Box>
            </Box>
          </Column>
        </Box>
      </Row>

      <Layout flexBasis={[20, 40]} flexShrink='0' />
    </Row>

    <Layout flexBasis={[20, 50]} />
  </Box>
)
