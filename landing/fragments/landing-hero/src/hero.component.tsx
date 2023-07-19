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
            <Box>
              <Button
                variant='transparentBackgroundWhiteText'
                fill
                icon={<TelegramIcon width={15} height={12} />}
                widthIcon={104}
                heightIcon={44}
              />
            </Box>

            <Box>
              <Button
                variant='transparentBackgroundWhiteText'
                fill
                icon={<GitHubIcon width={15} height={15} />}
                widthIcon={104}
                heightIcon={44}
              />
            </Box>

            <Box>
              <Button
                variant='transparentBackgroundWhiteText'
                fill
                icon={<MailWhiteIcon width={18} height={14} />}
                widthIcon={104}
                heightIcon={44}
              />
            </Box>
          </Row>
        </Column>

        <Layout flexBasis={[0, 134]} />

        <Box display={['none', 'flex']} alignItems='end' flexBasis={56}>
          <Column height='200px' justifyContent='space-around' alignItems='center'>
            <Box>
              <Button
                variant='transparentBackgroundWhiteText'
                fill
                icon={<TelegramIcon width={18} height={15} />}
                widthIcon={56}
                heightIcon={56}
              />
            </Box>

            <Box>
              <Button
                variant='transparentBackgroundWhiteText'
                fill
                icon={<GitHubIcon width={18} height={18} />}
                widthIcon={56}
                heightIcon={56}
              />
            </Box>

            <Box>
              <Button
                variant='transparentBackgroundWhiteText'
                fill
                icon={<MailWhiteIcon width={18} height={14} />}
                widthIcon={56}
                heightIcon={56}
              />
            </Box>
          </Column>
        </Box>
      </Row>

      <Layout flexBasis={[20, 40]} flexShrink='0' />
    </Row>

    <Layout flexBasis={[20, 50]} />
  </Box>
)
