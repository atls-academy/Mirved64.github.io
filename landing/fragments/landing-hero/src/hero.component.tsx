import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { TelegramIcon }     from '@ui/icons'
import { GitHubIcon }       from '@ui/icons'
import { MailIcon }         from '@ui/icons'
import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

export const Hero = () => (
  <Box backgroundColor='background.hero' width='100%' flexDirection='column' margin='0 auto'>
    <Layout flexBasis={[80, 412]} />
    <Box flexGrow='1' flexShrink='1'>
      <Layout flexBasis={[20, 230]} flexShrink='0' />
      <Box flexGrow='1' flexShrink='1'>
        <Box flexBasis={[335, 1460]} flexShrink='2' flexGrow='1'>
          <Column flexShrink='1' flexGrow={[1, 0]} flexBasis={[335, 1460]}>
            <Box>
              <Text
                color='text.primary'
                fontSize={['normal', 'stupendous']}
                fontWeight='normal'
                lineHeight={['ordinary', 'stupendous']}
              >
                <FormattedMessage id='heroTitleTeach' />
              </Text>
            </Box>
            <Box>
              <Text
                color='text.primary'
                fontSize={['normal', 'stupendous']}
                fontWeight='normal'
                lineHeight={['ordinary', 'stupendous']}
                wordBreak='break-all'
              >
                <FormattedMessage id='heroTitleProfessionals' />
              </Text>
            </Box>
            <Box>
              <Text
                color='text.primary'
                fontSize={['normal', 'stupendous']}
                fontWeight='normal'
                lineHeight={['ordinary', 'stupendous']}
                wordBreak='break-all'
              >
                <FormattedMessage id='heroTitleRevolution' />
              </Text>
            </Box>
            <Layout flexBasis={[24, 48]} />
            <Divider backgroundColor='divider.primary' weight={1} />
            <Layout flexBasis={[24, 48]} />
            <Box flexWrap='wrap' maxWidth={640}>
              <Text
                color='text.primary'
                fontSize={['tiny', 'small']}
                fontWeight='normal'
                lineHeight={['compact', 'normal']}
              >
                <FormattedMessage id='heroSlogan' />
              </Text>
            </Box>
            <Layout flexBasis={[24, 0]} />
            <Box
              display={['flex', 'none']}
              flexShrink='1'
              flexGrow='1'
              flexBasis={44}
              justifyContent='space-around'
              alignItems='center'
            >
              <Box width={['15px', '18px']} height={['12px', '15px']}>
                <NextLink>
                  <TelegramIcon width='100%' height='100%' />
                </NextLink>
              </Box>
              <Box width={['15px', '18px']} height={['15px', '18px']}>
                <NextLink>
                  <GitHubIcon width='100%' height='100%' />
                </NextLink>
              </Box>
              <Box width={['15px', '18px']} height={['12px', '14px']}>
                <NextLink>
                  <MailIcon width='100%' height='100%' />
                </NextLink>
              </Box>
            </Box>
          </Column>
        </Box>
        <Layout flexBasis={[0, 134]} />
        <Box alignItems='end' width='56px' display={['none', 'flex']}>
          <Column flexBasis={56} height='200px' justifyContent='space-around' alignItems='center'>
            <Box width={['15px', '18px']} height={['12px', '15px']}>
              <NextLink>
                <TelegramIcon width='100%' height='100%' />
              </NextLink>
            </Box>
            <Box width={['15px', '18px']} height={['15px', '18px']}>
              <NextLink>
                <GitHubIcon width='100%' height='100%' />
              </NextLink>
            </Box>
            <Box width={['15px', '18px']} height={['12px', '14px']}>
              <NextLink>
                <MailIcon width='100%' height='100%' />
              </NextLink>
            </Box>
          </Column>
        </Box>
      </Box>
      <Layout flexBasis={[20, 40]} flexShrink='0' />
    </Box>
    <Layout flexBasis={[20, 50]} />

    <Box justifyContent={['center', 'start']}>
      <Layout flexBasis={[20, 230]} flexShrink='0' />
      <Column flexBasis={[335, 1460]} flexGrow='1' flexShrink='1'>
        <Layout flexBasis={[64, 160]} />

        <Box display={['none', 'inline']}>
          <Text
            color='text.primary'
            fontSize='common'
            fontWeight='normal'
            lineHeight='huge'
            display='inline'
          >
            <FormattedMessage id='heroTextDigitalDesktop' />
          </Text>
          <Space count='8' />
          <Box display='inline-flex' width='40px' height='40px'>
            <ImageBlock src='./image/Default.png' />
          </Box>
          <Space count='8' />
          <Text
            color='text.primary'
            fontSize='common'
            fontWeight='normal'
            lineHeight='huge'
            display='inline'
          >
            <FormattedMessage id='heroTextButDesktop' />
          </Text>
          <Space count='8' />
          <Box display='inline-flex' width='40px' height='40px'>
            <ImageBlock src='./image/Default.png' />
          </Box>
        </Box>
        <Column display={['flex', 'none']}>
          <Text
            color='text.primary'
            fontSize='small'
            fontWeight='normal'
            lineHeight='normal'
            display='inline'
          >
            <FormattedMessage id='heroTextMobile' />
          </Text>
          <Layout flexBasis={20} />
          <Text
            color='text.primary'
            fontSize='small'
            fontWeight='normal'
            lineHeight='normal'
            display='inline'
          >
            <FormattedMessage id='heroTextAcademyDesktop' />
          </Text>
        </Column>
        <Layout flexBasis={[0, 40]} />
        <Box display={['none', 'inline']}>
          <Text
            color='text.primary'
            fontSize='common'
            fontWeight='normal'
            lineHeight='huge'
            display='inline'
          >
            <FormattedMessage id='heroTextAcademyMobile' />
          </Text>
          <Space count='8' />
          <Box display='inline-flex' width='40px' height='40px'>
            <ImageBlock src='./image/Default.png' />
          </Box>
        </Box>
        <Layout flexBasis={[64, 160]} />
      </Column>
      <Layout flexBasis={[20, 230]} />
    </Box>
  </Box>
)
