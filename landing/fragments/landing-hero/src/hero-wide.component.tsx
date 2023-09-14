import React                 from 'react'
import { FormattedMessage }  from 'react-intl'

import { Background }        from '@ui/background'
import { Delimiter }         from '@ui/delimiter'
import { DelimiterLarge }    from '@ui/delimiter'
import { Divider }           from '@ui/divider'
import { GitHubIcon }        from '@ui/icons'
import { TelegramIcon }      from '@ui/icons'
import { MailWhiteIcon }     from '@ui/icons'
import { Box }               from '@ui/layout'
import { Row }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Column }            from '@ui/layout'
import { Space }             from '@ui/text'
import { Text }              from '@ui/text'

import { SocialLinkDesktop } from './social-link'
import { SocialLinkUltra }   from './social-link'

export const HeroWide = () => (
  <Box flexDirection='column' flexGrow='1'>
    <Layout flexBasis={{ wide: 256, ultra: 428 }} />

    <Row flexGrow='1'>
      <Layout flexBasis={{ wide: 230, ultra: 620 }} flexShrink='0' />

      <Column flexShrink={{ wide: 0 }}>
        <Row alignItems='end' flexWrap='wrap'>
          <Box width={{ wide: 803, ultra: 1177 }}>
            <Text
              color='text.white'
              fontSize={{ wide: 'stupendous', ultra: 'biggest' }}
              lineHeight='standard'
            >
              <FormattedMessage id='hero.title.text' />
            </Text>
          </Box>

          <Column>
            <Background
              backgroundColor='ghostTransparentGradient'
              borderRadius={{ wide: 'regular', ultra: 'large' }}
            >
              <Box
                width={{ wide: 134, ultra: 201 }}
                height={{ wide: 96, ultra: 144 }}
                justifyContent='center'
                alignItems='center'
                borderRadius={{ wide: 'regular', ultra: 'large' }}
                backgroundColor='background.whiteTransparent'
                border='thinnestGhost'
              >
                <Text
                  color='text.white'
                  fontSize={{ wide: 'massive', ultra: 'colossal' }}
                  lineHeight='standard'
                >
                  <FormattedMessage id='hero.title.it' />
                </Text>
              </Box>
            </Background>

            <Layout flexBasis={{ wide: 10, ultra: 14 }} />
          </Column>
        </Row>

        <Layout flexBasis={{ wide: 48, ultra: 72 }} />

        <Divider backgroundColor='background.ghost' weight={1} />

        <Layout flexBasis={{ wide: 48, ultra: 72 }} />

        <Box flexWrap='wrap' maxWidth={{ wide: 640, ultra: 960 }}>
          <Text color='text.white' fontSize={{ wide: 'small', ultra: 'usual' }} lineHeight='huge'>
            <FormattedMessage id='hero.slogan-desktop' />
          </Text>
        </Box>

        <Layout flexBasis={{ wide: 96, ultra: 72 }} />

        <Column maxWidth={{ wide: 1460, ultra: 2190 }}>
          <Box display='inline'>
            <Text
              display='inline'
              color='text.white'
              fontSize={{ wide: 'common', ultra: 'heavy' }}
              lineHeight='huge'
              wordWrap='break-word'
            >
              <FormattedMessage id='about.intro-desktop' />
            </Text>

            <Space count='6' />

            <Box display={{ _: 'none', standard: 'none', wide: 'inline', ultra: 'none' }}>
              <Delimiter />
            </Box>

            <Box display={{ _: 'none', standard: 'none', wide: 'none', ultra: 'inline' }}>
              <DelimiterLarge />
            </Box>

            <Space count='6' />

            <Text
              display='inline'
              color='text.white'
              fontSize={{ wide: 'common', ultra: 'heavy' }}
              lineHeight='huge'
              wordWrap='break-word'
            >
              <FormattedMessage id='about.problem-desktop' />
            </Text>

            <Space count='6' />

            <Box display={{ _: 'none', standard: 'none', wide: 'inline', ultra: 'none' }}>
              <Delimiter />
            </Box>

            <Box display={{ _: 'none', standard: 'none', wide: 'none', ultra: 'inline' }}>
              <DelimiterLarge />
            </Box>
          </Box>

          <Layout flexBasis={{ wide: 40 }} />

          <Box display='inline'>
            <Text
              display='inline'
              color='text.white'
              fontSize={{ wide: 'common', ultra: 'heavy' }}
              lineHeight='huge'
              wordWrap='break-word'
            >
              <FormattedMessage id='about.central-idea-desktop' />
            </Text>

            <Space count='6' />

            <Box display={{ _: 'none', standard: 'none', wide: 'inline', ultra: 'none' }}>
              <Delimiter />
            </Box>

            <Box display={{ _: 'none', standard: 'none', wide: 'none', ultra: 'inline' }}>
              <DelimiterLarge />
            </Box>
          </Box>
        </Column>
      </Column>

      <Layout flexBasis={{ wide: 774, ultra: 326 }} flexGrow='1' flexShrink='0' />

      <Box alignItems='end'>
        <Column
          display={{ _: 'none', standard: 'none', wide: 'flex', ultra: 'none' }}
          height={200}
          justifyContent='space-between'
        >
          <SocialLinkDesktop
            icon={<TelegramIcon width={15} height={12} />}
            href='https://web.telegram.org/'
          />

          <SocialLinkDesktop
            icon={<GitHubIcon width={15} height={15} />}
            href='https://github.com/'
          />

          <SocialLinkDesktop
            icon={<MailWhiteIcon width={18} height={14} />}
            href='https://www.google.com/intl/ru/gmail/about/'
          />
        </Column>

        <Column
          display={{ _: 'none', standard: 'none', wide: 'none', ultra: 'flex' }}
          height={300}
          justifyContent='space-between'
        >
          <SocialLinkUltra
            icon={<TelegramIcon width={36} height={36} />}
            href='https://web.telegram.org/'
          />

          <SocialLinkUltra
            icon={<GitHubIcon width={36} height={36} />}
            href='https://github.com/'
          />

          <SocialLinkUltra
            icon={<MailWhiteIcon width={36} height={36} />}
            href='https://www.google.com/intl/ru/gmail/about/'
          />
        </Column>
      </Box>

      <Layout flexBasis={{ wide: 40, ultra: 620 }} flexShrink='0' />
    </Row>

    <Layout flexBasis={{ wide: 200, ultra: 320 }} />
  </Box>
)
