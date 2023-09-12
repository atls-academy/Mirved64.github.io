import React                 from 'react'
import { FormattedMessage }  from 'react-intl'

import { Background }        from '@ui/background'
import { Condition }         from '@ui/condition'
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
import { useWindowWidth }    from '@ui/utils'

import { SocialLinkDesktop } from './social-link'
import { SocialLinkUltra }   from './social-link'
import { SocialLinkMobile }  from './social-link'

export const Hero = () => {
  const { isMobile } = useWindowWidth()

  return (
    <Column flexGrow='1'>
      <Layout flexBasis={[80, 412]} />

      <Row flexGrow='1'>
        <Layout flexBasis={[20, 230]} flexShrink='0' />

        <Column flexBasis={[335, 1460]} flexGrow={[1, 0]}>
          <Row alignItems='end' flexWrap='wrap'>
            <Box width={[233, 798]}>
              <Text
                color='text.white'
                fontSize={['normal', 'stupendous']}
                lineHeight={['huge', 'standart']}
                fontFamily='regular'
              >
                <FormattedMessage id='hero.title.text' />
              </Text>
            </Box>

            <Column>
              <Background
                backgroundColor='ghostTransparentGradient'
                borderRadius={['little', 'regular']}
              >
                <Box
                  width={[49, 134]}
                  height={[39, 96]}
                  justifyContent='center'
                  alignItems='center'
                  borderRadius={['little', 'regular']}
                  backgroundColor='background.whiteTransparent'
                  border='thinnestGhost'
                >
                  <Text
                    color='text.white'
                    fontSize={['normal', 'massive']}
                    lineHeight={['huge', 'standart']}
                    fontFamily='regular'
                  >
                    <FormattedMessage id='hero.title.it' />
                  </Text>
                </Box>
              </Background>

              <Layout flexBasis={[0, 8]} />
            </Column>
          </Row>

          <Layout flexBasis={[24, 48]} />

          <Divider backgroundColor='background.ghost' weight={1} />

          <Layout flexBasis={[24, 48]} />

          <Condition match={!isMobile}>
            <Box flexWrap='wrap' maxWidth={640}>
              <Text color='text.white' fontSize='small' lineHeight='huge'>
                <FormattedMessage id='hero.slogan-desktop' />
              </Text>
            </Box>
          </Condition>

          <Condition match={isMobile}>
            <Box>
              <Text color='text.white' fontSize='tiny' lineHeight='huge'>
                <FormattedMessage id='hero.slogan-we-dont-teach-mobile' />
              </Text>
            </Box>

            <Box>
              <Text color='text.white' fontSize='tiny' lineHeight='huge'>
                <FormattedMessage id='hero.slogan-we-teach-mobile' />
              </Text>
            </Box>
          </Condition>

          <Layout flexBasis={[24, 0]} />

          <Condition match={isMobile}>
            <Row>
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
          </Condition>
        </Column>

        <Layout flexBasis={[0, 134]} flexGrow={[0, 1]} />

        <Condition match={!isMobile}>
          <Box alignItems='end'>
            <Column height='200px' justifyContent='space-between'>
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
          </Box>
        </Condition>

        <Layout flexBasis={[20, 40]} flexShrink='0' />
      </Row>

      <Layout flexBasis={[20, 50]} />
    </Column>
  )
}

export const HeroWide = () => {
  const { isWideDesktop, isTV } = useWindowWidth()

  return (
    <Column margin='0 auto'>
      <Layout flexBasis={{ wide: 256, ultra: 428 }} />

      <Row flexGrow='1'>
        <Layout flexBasis={{ wide: 230, ultra: 0 }} flexShrink='0' />

        <Column flexBasis={{ wide: 2290, ultra: 2600 }}>
          <Row alignItems='end' flexWrap='wrap'>
            <Box width={{ wide: 775, ultra: 1135 }}>
              <Text
                color='text.white'
                fontSize={{ wide: 'stupendous', ultra: 'heavy' }}
                lineHeight='standard'
              >
                <FormattedMessage id='hero.title.text' />
              </Text>
            </Box>

            <Layout flexBasis={{ wide: 28, ultra: 42 }} flexShrink='0' />

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

              <Layout flexBasis={{ wide: 10, ultra: 15 }} />
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

          <Column maxWidth={{ wide: 1460 }}>
            <Box display='inline'>
              <Text
                display='inline'
                color='text.white'
                fontSize='common'
                lineHeight='huge'
                wordWrap='break-word'
              >
                <FormattedMessage id='about.intro-desktop' />
              </Text>

              <Space count='6' />

              <Condition match={isWideDesktop}>
                <Delimiter />
              </Condition>

              <Condition match={isTV}>
                <DelimiterLarge />
              </Condition>

              <Space count='6' />

              <Text
                display='inline'
                color='text.white'
                fontSize='common'
                lineHeight='huge'
                wordWrap='break-word'
              >
                <FormattedMessage id='about.problem-desktop' />
              </Text>

              <Space count='14' />

              <Condition match={isWideDesktop}>
                <Delimiter />
              </Condition>

              <Condition match={isTV}>
                <DelimiterLarge />
              </Condition>
            </Box>

            <Layout flexBasis={{ wide: 40 }} />

            <Box display='inline'>
              <Text
                display='inline'
                color='text.white'
                fontSize='common'
                lineHeight='huge'
                wordWrap='break-word'
              >
                <FormattedMessage id='about.central-idea-desktop' />
              </Text>

              <Space count='6' />

              <Condition match={isWideDesktop}>
                <Delimiter />
              </Condition>

              <Condition match={isTV}>
                <DelimiterLarge />
              </Condition>
            </Box>
          </Column>
        </Column>

        <Layout flexBasis={{ wide: 774, ultra: 326 }} flexGrow='1' flexShrink='0' />

        <Box alignItems='end'>
          <Column height={{ wide: 200, ultra: 240 }} justifyContent='space-between'>
            <Condition match={isWideDesktop}>
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
            </Condition>

            <Condition match={isTV}>
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
            </Condition>
          </Column>
        </Box>

        <Layout flexBasis={{ wide: 40, ultra: 0 }} flexShrink='0' />
      </Row>

      <Layout flexBasis={{ wide: 200, ultra: 320 }} />
    </Column>
  )
}
