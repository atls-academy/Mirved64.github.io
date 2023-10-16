import React                 from 'react'

import { Background }        from '@ui/background'
import { Divider }           from '@ui/divider'
import { GitHubIcon }        from '@ui/icons'
import { MailWhiteIcon }     from '@ui/icons'
import { TelegramIcon }      from '@ui/icons'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { Text }              from '@ui/text'

import { SocialLink }        from './social-link'
import { SocialLinkDisplay } from './social-link'
import { TextBlock }         from './text-block'
import { useHero }           from './data'

export const Hero = () => {
  const hero = useHero()

  const title: string = hero?.data?.section?.sections.title
  const mainIdea: string = hero?.data?.section?.content.split('\n').slice(1, 2)
  const problem: string[] = hero?.data?.section?.content.split('\n')[1]?.split('.').slice(0, 2)
  const slogan: string = hero?.data?.section?.content.split('\n')[2]?.slice(0, -1)

  return (
    <Box>
      <Column flexGrow='1'>
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
                  {title?.slice(0, -2)}
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
                      textTransform='uppercase'
                    >
                      {title?.slice(-2)}
                    </Text>
                  </Box>
                </Background>

                <Layout flexBasis={{ _: 0, standard: 10, ultra: 14 }} />
              </Column>
            </Row>

            <Layout flexBasis={{ _: 24, standard: 48, ultra: 72 }} />

            <Divider backgroundColor='background.ghost' weight={1} />

            <Layout flexBasis={{ _: 24, standard: 48, ultra: 72 }} />

            <Box flexWrap='wrap' maxWidth={{ standard: 640, ultra: 960 }}>
              <Text
                color='text.white'
                fontSize={{ _: 'tiny', standard: 'small', ultra: 'usual' }}
                lineHeight='huge'
              >
                {mainIdea}
              </Text>
            </Box>

            <Layout flexBasis={{ _: 0, wide: 96, ultra: 72 }} />

            <Column display={{ _: 'none', wide: 'flex' }} minWidth={{ wide: 1460, ultra: 2190 }}>
              <Box display='inline'>
                {problem?.map((el) => (
                  <TextBlock key={el[0]} text={el.trim()} />
                ))}
              </Box>

              <Layout flexBasis={{ wide: 40 }} />

              <TextBlock text={slogan} />
            </Column>

            <Layout flexBasis={[24, 0]} />

            <Row display={['flex', 'none']}>
              <SocialLink
                display={SocialLinkDisplay.Mobile}
                icon={<TelegramIcon width={15} height={12} />}
                href='https://web.telegram.org/'
              />

              <Layout flexBasis={5} flexGrow='1' flexShrink='0' />

              <SocialLink
                display={SocialLinkDisplay.Mobile}
                icon={<GitHubIcon width={15} height={15} />}
                href='https://github.com/'
              />

              <Layout flexBasis={5} flexGrow='1' flexShrink='0' />

              <SocialLink
                display={SocialLinkDisplay.Mobile}
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
              <SocialLink
                display={SocialLinkDisplay.Desktop}
                icon={<TelegramIcon width={15} height={12} />}
                href='https://web.telegram.org/'
              />

              <SocialLink
                display={SocialLinkDisplay.Desktop}
                icon={<GitHubIcon width={15} height={15} />}
                href='https://github.com/'
              />

              <SocialLink
                display={SocialLinkDisplay.Desktop}
                icon={<MailWhiteIcon width={18} height={14} />}
                href='https://www.google.com/intl/ru/gmail/about/'
              />
            </Column>

            <Column
              display={{ _: 'none', ultra: 'flex' }}
              height={300}
              justifyContent='space-between'
            >
              <SocialLink
                display={SocialLinkDisplay.Ultra}
                icon={<TelegramIcon width={36} height={36} />}
                href='https://web.telegram.org/'
              />

              <SocialLink
                display={SocialLinkDisplay.Ultra}
                icon={<GitHubIcon width={36} height={36} />}
                href='https://github.com/'
              />

              <SocialLink
                display={SocialLinkDisplay.Ultra}
                icon={<MailWhiteIcon width={36} height={36} />}
                href='https://www.google.com/intl/ru/gmail/about/'
              />
            </Column>
          </Box>

          <Layout flexBasis={{ _: 20, standard: 40, ultra: 620 }} flexShrink='0' />
        </Row>

        <Layout flexBasis={{ _: 20, standard: 50, wide: 200, ultra: 320 }} />
      </Column>
    </Box>
  )
}
