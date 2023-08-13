import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Divider }          from '@ui/divider'
import { GitHubIcon }       from '@ui/icons'
import { TelegramIcon }     from '@ui/icons'
import { MailWhiteIcon }    from '@ui/icons'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Link }             from '@ui/link'
import { Text }             from '@ui/text'
import { useWindowWidth }   from '@ui/utils'

export const Hero = () => {
  const { isMobile, isDesktop } = useWindowWidth()

  return (
    <Column>
      <Layout flexBasis={[80, 412]} />

      <Row flexGrow='1'>
        <Layout flexBasis={[20, 230]} flexShrink='0' />

        <Column flexBasis={[335, 1460]} flexGrow={[1, 0]}>
          <Box>
            <Text
              color='text.white'
              fontSize={['normal', 'stupendous']}
              fontWeight='normal'
              lineHeight={['ordinary', 'stupendous']}
            >
              <FormattedMessage id='hero.title.teach' />
            </Text>
          </Box>

          <Box>
            <Text
              color='text.white'
              fontSize={['normal', 'stupendous']}
              fontWeight='normal'
              lineHeight={['ordinary', 'stupendous']}
            >
              <FormattedMessage id='hero.title.professionals' />
            </Text>
          </Box>

          <Row flexWrap='wrap'>
            <Box>
              <Text
                color='text.white'
                fontSize={['normal', 'stupendous']}
                fontWeight='normal'
                lineHeight={['ordinary', 'stupendous']}
              >
                <FormattedMessage id='hero.title.revolution' />
              </Text>
            </Box>

            <Layout flexBasis={[8, 28]} flexShrink='0' />

            <Box
              width={[49, 134]}
              height={[39, 116]}
              justifyContent='center'
              alignItems='center'
              backgroundColor='background.whiteTransparent'
            >
              <Text
                color='text.white'
                fontSize={['normal', 'stupendous']}
                fontWeight='normal'
                lineHeight={['ordinary', 'stupendous']}
              >
                <FormattedMessage id='hero.title.it' />
              </Text>
            </Box>
          </Row>

          <Layout flexBasis={[24, 48]} />

          <Divider backgroundColor='divider.white' weight={1} flexShrink='1' />

          <Layout flexBasis={[24, 48]} />

          <Box flexWrap='wrap' maxWidth={[335, 640]} flexShrink='1'>
            <Text
              color='text.white'
              fontSize={['tiny', 'small']}
              fontWeight='normal'
              lineHeight={['small', 'normal']}
            >
              <FormattedMessage id='hero.slogan' />
            </Text>
          </Box>

          <Layout flexBasis={[24, 0]} />

          <Condition match={isMobile}>
            <Row>
              <Box>
                <Link href='https://web.telegram.org/'>
                  <Button
                    variant='ghostBackgroundWhiteText'
                    icon={<TelegramIcon width={15} height={12} />}
                    widthIcon={104}
                    heightIcon={44}
                  />
                </Link>
              </Box>

              <Layout flexBasis={5} flexGrow='1' flexShrink='0' />

              <Box>
                <Link href='https://github.com/'>
                  <Button
                    variant='ghostBackgroundWhiteText'
                    icon={<GitHubIcon width={15} height={15} />}
                    widthIcon={104}
                    heightIcon={44}
                  />
                </Link>
              </Box>

              <Layout flexBasis={5} flexGrow='1' flexShrink='0' />

              <Box>
                <Link href='https://www.google.com/intl/ru/gmail/about/'>
                  <Button
                    variant='ghostBackgroundWhiteText'
                    icon={<MailWhiteIcon width={18} height={14} />}
                    widthIcon={104}
                    heightIcon={44}
                  />
                </Link>
              </Box>
            </Row>
          </Condition>
        </Column>

        <Layout flexBasis={[0, 134]} flexGrow={[0, 1]} />

        <Condition match={isDesktop}>
          <Box alignItems='end'>
            <Column height='200px' justifyContent='space-between'>
              <Box>
                <Link href='https://web.telegram.org/'>
                  <Button
                    variant='ghostBackgroundWhiteText'
                    icon={<TelegramIcon width={18} height={15} />}
                    widthIcon={56}
                    heightIcon={56}
                  />
                </Link>
              </Box>

              <Box>
                <Link href='https://github.com/'>
                  <Button
                    variant='ghostBackgroundWhiteText'
                    icon={<GitHubIcon width={18} height={18} />}
                    widthIcon={56}
                    heightIcon={56}
                  />
                </Link>
              </Box>

              <Box>
                <Link href='https://www.google.com/intl/ru/gmail/about/'>
                  <Button
                    variant='ghostBackgroundWhiteText'
                    icon={<MailWhiteIcon width={18} height={14} />}
                    widthIcon={56}
                    heightIcon={56}
                  />
                </Link>
              </Box>
            </Column>
          </Box>
        </Condition>

        <Layout flexBasis={[20, 40]} flexShrink='0' />
      </Row>

      <Layout flexBasis={[20, 50]} />
    </Column>
  )
}
