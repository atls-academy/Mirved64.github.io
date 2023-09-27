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
import { Text }              from '@ui/text'
import { Space }             from '@ui/text'

import { SocialLinkDesktop } from './social-link'
import { SocialLinkUltra }   from './social-link'
import { SocialLinkMobile }  from './social-link'

export const Hero = () => (
  <Box flexDirection='column' flexGrow='1'>
    <Layout flexBasis={{ _: 80, standard: 412, wide: 256, ultra: 428 }} />

    <Row flexGrow='1'>
      <Layout flexBasis={{ _: 20, standard: 230, ultra: 620 }} flexShrink='0' />

      <Column flexBasis={[335, 1460]} flexGrow={[1, 0]} flexShrink={{ wide: 0 }}>
        <Row alignItems='end' flexWrap='wrap'>
          <Box width={{ _: 233, standard: 798, wide: 803, ultra: 1177 }}>
            <Text
              color='text.white'
              fontSize={{ _: 'normal', standard: 'stupendous', ultra: 'biggest' }}
              lineHeight={['huge', 'standard']}
              fontFamily='regular'
            >
              <FormattedMessage id='hero.title.text' />
            </Text>
          </Box>

          <Column>
            <Background
              backgroundImage='ghostTransparentGradient'
              borderRadius={{ _: 'little', standard: 'regular', ultra: 'large' }}
              overflow='hidden'
              border='thinnestGhost'
            >
              <Box
                width={{ _: 49, standard: 134, ultra: 201 }}
                height={{ _: 39, standard: 96, ultra: 144 }}
                justifyContent='center'
                alignItems='center'
                backgroundColor='background.whiteTransparent'
              >
                <Text
                  color='text.white'
                  fontSize={{ _: 'normal', standard: 'massive', ultra: 'colossal' }}
                  lineHeight={{ _: 'small', wide: 'massive', ultra: 'colossal' }}
                >
                  <FormattedMessage id='hero.title.it' />
                </Text>
              </Box>
            </Background>

            <Layout flexBasis={{ _: 0, standard: 10, ultra: 14 }} />
          </Column>
        </Row>

        <Layout flexBasis={{ _: 24, standard: 48, ultra: 72 }} />

        <Divider backgroundColor='background.ghost' weight={1} />

        <Layout flexBasis={{ _: 24, standard: 48, ultra: 72 }} />

        <Box display={['none', 'flex']} flexWrap='wrap' maxWidth={{ standard: 640, ultra: 960 }}>
          <Text
            color='text.white'
            fontSize={{ standard: 'small', ultra: 'usual' }}
            lineHeight='huge'
          >
            <FormattedMessage id='hero.slogan-desktop' />
          </Text>
        </Box>

        <Layout flexBasis={{ _: 0, wide: 96, ultra: 72 }} />

        <Column display={{ _: 'none', wide: 'flex' }} minWidth={{ wide: 1460, ultra: 2190 }}>
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

            <Box display={{ _: 'none', wide: 'inline', ultra: 'none' }}>
              <Delimiter />
            </Box>

            <Box display={{ _: 'none', ultra: 'inline' }}>
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

            <Box display={{ _: 'none', wide: 'inline', ultra: 'none' }}>
              <Delimiter />
            </Box>

            <Box display={{ _: 'none', ultra: 'inline' }}>
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

            <Box display={{ _: 'none', wide: 'inline', ultra: 'none' }}>
              <Delimiter />
            </Box>

            <Box display={{ _: 'none', ultra: 'inline' }}>
              <DelimiterLarge />
            </Box>
          </Box>
        </Column>

        <Box display={['flex', 'none']}>
          <Text color='text.white' fontSize='tiny' lineHeight='huge'>
            <FormattedMessage id='hero.slogan-we-dont-teach-mobile' />
          </Text>
        </Box>

        <Box display={['flex', 'none']}>
          <Text color='text.white' fontSize='tiny' lineHeight='huge'>
            <FormattedMessage id='hero.slogan-we-teach-mobile' />
          </Text>
        </Box>

        <Layout flexBasis={[24, 0]} />

        <Row display={['flex', 'none']}>
          <SocialLinkMobile
            icon={<TelegramIcon width={15} height={12} />}
            href='https://web.telegram.org/'
          />

          <Layout flexBasis={5} flexGrow='1' flexShrink='0' />

          <SocialLinkMobile
            icon={<GitHubIcon width={15} height={15} />}
            href='https://github.com/'
          />

          <Layout flexBasis={5} flexGrow='1' flexShrink='0' />

          <SocialLinkMobile
            icon={<MailWhiteIcon width={18} height={14} />}
            href='https://www.google.com/intl/ru/gmail/about/'
          />
        </Row>
      </Column>

      <Layout
        flexBasis={{ _: 0, standard: 134, wide: 774, ultra: 326 }}
        flexGrow={[0, 1]}
        flexShrink={{ wide: '0' }}
      />

      <Box alignItems='end' display={['none', 'flex']}>
        <Column
          height={200}
          justifyContent='space-between'
          display={{ standard: 'flex', ultra: 'none' }}
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

        <Column display={{ _: 'none', ultra: 'flex' }} height={300} justifyContent='space-between'>
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

      <Layout flexBasis={{ _: 20, standard: 40, ultra: 620 }} flexShrink='0' />
    </Row>

    <Layout flexBasis={{ _: 20, standard: 50, wide: 200, ultra: 320 }} />
  </Box>
)
