import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Divider }          from '@ui/divider'
import { GitHubIcon }       from '@ui/icons'
import { TelegramIcon }     from '@ui/icons'
import { MailWhiteIcon }    from '@ui/icons'
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
              >
                <FormattedMessage id='heroTitleRevolution' />
              </Text>
            </Box>

            <Space count='8' />

            <Box>
              <Text
                color='text.hero.primary'
                fontSize={['normal', 'stupendous']}
                fontWeight='normal'
                lineHeight={['ordinary', 'stupendous']}
              >
                <FormattedMessage id='heroTitleIt' />
              </Text>
            </Box>
          </Row>

          <Layout flexBasis={[24, 48]} flexShrink='1' />

          <Divider backgroundColor='divider.primary' weight={1} flexShrink='1' />

          <Layout flexBasis={[24, 48]} flexShrink='1' />

          <Box flexWrap='wrap' maxWidth={640} flexShrink='1'>
            <Text
              color='text.hero.primary'
              fontSize={['tiny', 'small']}
              fontWeight='normal'
              lineHeight={['small', 'normal']}
            >
              <FormattedMessage id='heroSlogan' />
            </Text>
          </Box>

          <Layout flexBasis={[24, 0]} />

          <Row
            display={['flex', 'none']}
            flexShrink='1'
            flexGrow='1'
            flexBasis={44}
            justifyContent='space-between'
            alignItems='center'
          >
            <Button variant='transparentBackgroundWhiteText'>
              <Box width='104px' height='44px' justifyContent='center' alignItems='center'>
                <NextLink>
                  <TelegramIcon width={15} height={12} />
                </NextLink>
              </Box>
            </Button>

            <Button variant='transparentBackgroundWhiteText'>
              <Box width='104px' height='44px' justifyContent='center' alignItems='center'>
                <NextLink>
                  <GitHubIcon width={15} height={15} />
                </NextLink>
              </Box>
            </Button>

            <Button variant='transparentBackgroundWhiteText'>
              <Box width='104px' height='44px' justifyContent='center' alignItems='center'>
                <NextLink>
                  <MailWhiteIcon width={18} height={14} />
                </NextLink>
              </Box>
            </Button>
          </Row>
        </Column>

        <Layout flexBasis={[0, 134]} />

        <Box display={['none', 'flex']} alignItems='end' flexBasis={56}>
          <Column height='200px' justifyContent='space-around' alignItems='center'>
            <Button variant='transparentBackgroundWhiteText'>
              <Box width='56px' height='56px' alignItems='center' justifyContent='center'>
                <NextLink>
                  <TelegramIcon width={18} height={15} />
                </NextLink>
              </Box>
            </Button>

            <Button variant='transparentBackgroundWhiteText'>
              <Box width='56px' height='56px' alignItems='center' justifyContent='center'>
                <NextLink>
                  <GitHubIcon width={18} height={18} />
                </NextLink>
              </Box>
            </Button>

            <Button variant='transparentBackgroundWhiteText'>
              <Box width='56px' height='56px' alignItems='center' justifyContent='center'>
                <NextLink>
                  <MailWhiteIcon width={18} height={14} />
                </NextLink>
              </Box>
            </Button>
          </Column>
        </Box>
      </Row>

      <Layout flexBasis={[20, 40]} flexShrink='0' />
    </Row>

    <Layout flexBasis={[20, 50]} />
  </Box>
)
