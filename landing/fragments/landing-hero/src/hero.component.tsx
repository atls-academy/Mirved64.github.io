import React                 from 'react'
import { FormattedMessage }  from 'react-intl'

import { Background }        from '@ui/background'
import { Condition }         from '@ui/condition'
import { Divider }           from '@ui/divider'
import { GitHubIcon }        from '@ui/icons'
import { TelegramIcon }      from '@ui/icons'
import { MailWhiteIcon }     from '@ui/icons'
import { Box }               from '@ui/layout'
import { Row }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Column }            from '@ui/layout'
import { Text }              from '@ui/text'
import { useWindowWidth }    from '@ui/utils'

import { SocialLinkDesktop } from './social-link'
import { SocialLinkMobile }  from './social-link'

export const Hero = () => {
  const { isMobile, isDesktop } = useWindowWidth()

  return (
    <Column>
      <Layout flexBasis={[80, 412]} />

      <Row flexGrow='1'>
        <Layout flexBasis={[20, 230]} flexShrink='0' />

        <Column flexBasis={[335, 1460]} flexGrow={[1, 0]}>
          <Row alignItems='end' flexWrap='wrap'>
            <Box width={[225, 770]}>
              <Text
                color='text.white'
                fontSize={['normal', 'stupendous']}
                lineHeight={['ordinary', 'stupendous']}
              >
                <FormattedMessage id='hero.title.text' />
              </Text>
            </Box>

            <Layout flexBasis={[8, 28]} flexShrink='0' />

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
                  border='thinnestGhost'
                >
                  <Text
                    color='text.white'
                    fontSize={['normal', 'stupendous']}
                    lineHeight={['ordinary', 'enormous']}
                  >
                    <FormattedMessage id='hero.title.it' />
                  </Text>
                </Box>
              </Background>

              <Layout flexBasis={[0, 10]} />
            </Column>
          </Row>

          <Layout flexBasis={[24, 48]} />

          <Divider backgroundColor='divider.white' weight={1} />

          <Layout flexBasis={[24, 48]} />

          <Condition match={isDesktop}>
            <Box flexWrap='wrap' maxWidth={640}>
              <Text color='text.white' fontSize='small' lineHeight='normal'>
                <FormattedMessage id='hero.slogan-desktop' />
              </Text>
            </Box>
          </Condition>

          <Condition match={isMobile}>
            <Box>
              <Text color='text.white' fontSize='tiny' lineHeight='compact'>
                <FormattedMessage id='hero.slogan-we-dont-teach-mobile' />
              </Text>
            </Box>

            <Box>
              <Text color='text.white' fontSize='tiny' lineHeight='compact'>
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

        <Condition match={isDesktop}>
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
