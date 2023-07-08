import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { GitHubIcon }       from '@ui/icons'
import { TelegramIcon }     from '@ui/icons'
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
          <Layout>
            <Text
              color='text.hero.primary'
              fontSize={['normal', 'stupendous']}
              fontWeight='normal'
              lineHeight={['ordinary', 'stupendous']}
            >
              <FormattedMessage id='heroTitleTeach' />
            </Text>
          </Layout>

          <Layout>
            <Text
              color='text.hero.primary'
              fontSize={['normal', 'stupendous']}
              fontWeight='normal'
              lineHeight={['ordinary', 'stupendous']}
              wordBreak='break-all'
            >
              <FormattedMessage id='heroTitleProfessionals' />
            </Text>
          </Layout>

          <Row>
            <Layout>
              <Text
                color='text.hero.primary'
                fontSize={['normal', 'stupendous']}
                fontWeight='normal'
                lineHeight={['ordinary', 'stupendous']}
                wordBreak='break-all'
              >
                <FormattedMessage id='heroTitleRevolution' />
              </Text>
            </Layout>

            <Space count='8' />

            <Layout flexShrink='0'>
              <Text
                color='text.hero.primary'
                fontSize={['normal', 'stupendous']}
                fontWeight='normal'
                lineHeight={['ordinary', 'stupendous']}
                wordBreak='break-all'
              >
                <FormattedMessage id='heroTitleIt' />
              </Text>
            </Layout>
          </Row>

          <Layout flexBasis={[24, 48]} />

          <Divider backgroundColor='divider.primary' weight={1} />

          <Layout flexBasis={[24, 48]} />

          <Layout flexWrap='wrap' maxWidth={640}>
            <Text
              color='text.hero.primary'
              fontSize={['tiny', 'small']}
              fontWeight='normal'
              lineHeight={['compact', 'normal']}
            >
              <FormattedMessage id='heroSlogan' />
            </Text>
          </Layout>

          <Layout flexBasis={[24, 0]} />

          <Layout
            display={['flex', 'none']}
            flexShrink='1'
            flexGrow='1'
            flexBasis={44}
            justifyContent='space-between'
            alignItems='center'
          >
            <Layout width='104px' height='44px' justifyContent='center' alignItems='center'>
              <Layout>
                <NextLink>
                  <TelegramIcon width={15} height={12} />
                </NextLink>
              </Layout>
            </Layout>

            <Layout width='104px' height='44px' justifyContent='center' alignItems='center'>
              <Layout>
                <NextLink>
                  <GitHubIcon width={15} height={15} />
                </NextLink>
              </Layout>
            </Layout>

            <Layout width='104px' height='44px' justifyContent='center' alignItems='center'>
              <Layout>
                <NextLink>
                  <MailIcon width={18} height={14} />
                </NextLink>
              </Layout>
            </Layout>
          </Layout>
        </Column>

        <Layout flexBasis={[0, 134]} />

        <Box alignItems='end' flexBasis={56} display={['none', 'flex']}>
          <Column height='200px' justifyContent='space-around' alignItems='center'>
            <Layout width='56px' height='56px' alignItems='center' justifyContent='center'>
              <Layout flexShrink='0'>
                <NextLink>
                  <TelegramIcon width={18} height={15} />
                </NextLink>
              </Layout>
            </Layout>

            <Layout width='56px' height='56px' alignItems='center' justifyContent='center'>
              <Layout flexShrink='0'>
                <NextLink>
                  <GitHubIcon width={18} height={18} />
                </NextLink>
              </Layout>
            </Layout>

            <Layout width='56px' height='56px' alignItems='center' justifyContent='center'>
              <Layout flexShrink='0'>
                <NextLink>
                  <MailIcon width={18} height={14} />
                </NextLink>
              </Layout>
            </Layout>
          </Column>
        </Box>
      </Row>

      <Layout flexBasis={[20, 40]} flexShrink='0' />
    </Row>

    <Layout flexBasis={[20, 50]} />
  </Box>
)
