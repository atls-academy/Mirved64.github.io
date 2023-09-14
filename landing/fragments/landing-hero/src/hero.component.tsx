import React                 from 'react'
import { FormattedMessage }  from 'react-intl'

import { Background }        from '@ui/background'
import { Divider }           from '@ui/divider'
import { GitHubIcon }        from '@ui/icons'
import { TelegramIcon }      from '@ui/icons'
import { MailWhiteIcon }     from '@ui/icons'
import { Box }               from '@ui/layout'
import { Row }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Column }            from '@ui/layout'
import { Text }              from '@ui/text'

import { SocialLinkDesktop } from './social-link'
import { SocialLinkMobile }  from './social-link'

export const Hero = () => (
  <Box flexDirection='column' flexGrow='1'>
    <Layout flexBasis={[80, 412]} />

    <Row flexGrow='1'>
      <Layout flexBasis={[20, 230]} flexShrink='0' />

      <Column flexBasis={[335, 1460]} flexGrow={[1, 0]}>
        <Row alignItems='end' flexWrap='wrap'>
          <Box width={[233, 798]}>
            <Text
              color='text.white'
              fontSize={['normal', 'stupendous']}
              lineHeight={['huge', 'standard']}
              fontFamily='regular'
            >
              <FormattedMessage id='hero.title.text' />
            </Text>
          </Box>

          <Column>
            <Background
              backgroundColor='ghostTransparentGradient'
              borderRadius={['little', 'regular']}
              overflow='hidden'
              border='thinnestGhost'
            >
              <Box
                width={[49, 134]}
                height={[39, 96]}
                justifyContent='center'
                alignItems='center'
                backgroundColor='background.whiteTransparent'
              >
                <Text color='text.white' fontSize={['normal', 'massive']} lineHeight='small'>
                  <FormattedMessage id='hero.title.it' />
                </Text>
              </Box>
            </Background>

            <Layout flexBasis={[0, 10]} />
          </Column>
        </Row>

        <Layout flexBasis={[24, 48]} />

        <Divider backgroundColor='background.ghost' weight={1} />

        <Layout flexBasis={[24, 48]} />

        <Box display={{ _: 'none', standard: 'flex', wide: 'none' }} flexWrap='wrap' maxWidth={640}>
          <Text color='text.white' fontSize='small' lineHeight='huge'>
            <FormattedMessage id='hero.slogan-desktop' />
          </Text>
        </Box>

        <Box display={{ _: 'flex', standard: 'none' }}>
          <Text color='text.white' fontSize='tiny' lineHeight='huge'>
            <FormattedMessage id='hero.slogan-we-dont-teach-mobile' />
          </Text>
        </Box>

        <Box display={{ _: 'flex', standard: 'none' }}>
          <Text color='text.white' fontSize='tiny' lineHeight='huge'>
            <FormattedMessage id='hero.slogan-we-teach-mobile' />
          </Text>
        </Box>

        <Layout flexBasis={[24, 0]} />

        <Row display={{ _: 'flex', standard: 'none' }}>
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

      <Layout flexBasis={[0, 134]} flexGrow={[0, 1]} />

      <Box alignItems='end' display={{ _: 'none', standard: 'flex', wide: 'none' }}>
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

      <Layout flexBasis={[20, 40]} flexShrink='0' />
    </Row>

    <Layout flexBasis={[20, 50]} />
  </Box>
)
