import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { DefaultIcon }      from '@ui/icons'
import { TelegramIcon }     from '@ui/icons'
import { GitHubIcon }       from '@ui/icons'
import { MailIcon }         from '@ui/icons'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

export const Hero = () => (
  <Box backgroundColor='background.hero' width='100%' flexDirection='column' margin='0 auto'>
    <Layout flexBasis={[80, 412]} />
    <Box flexDirection={['column', 'row']} alignItems={['center', 'end']}>
      <Layout flexBasis={[20, 230]} />
      <Column flexBasis={['content', 1460]} maxWidth={[335, '100%']}>
        <Column>
          <Column>
            <Text
              color='text.primary'
              fontSize={['normal', 'stupendous']}
              fontWeight='normal'
              lineHeight={['ordinary', 'stupendous']}
            >
              <FormattedMessage id='heroTitleTeach' />
            </Text>
            <Text
              color='text.primary'
              fontSize={['normal', 'stupendous']}
              fontWeight='normal'
              lineHeight={['ordinary', 'stupendous']}
            >
              <FormattedMessage id='heroTitleProfessionals' />
            </Text>
          </Column>
          <Box>
            <Text
              color='text.primary'
              fontSize={['normal', 'stupendous']}
              fontWeight='normal'
              lineHeight={['ordinary', 'stupendous']}
            >
              <FormattedMessage id='heroTitleRevolution' />
            </Text>
          </Box>
        </Column>
        <Layout flexBasis={[24, 48]} />
        <Divider backgroundColor='divider.primary' weight='1px' />
        <Layout flexBasis={[24, 48]} />
        <Box maxWidth={['350px', '600px']} flexWrap='wrap'>
          <Text
            color='text.primary'
            fontSize={['tiny', 'small']}
            fontWeight='normal'
            lineHeight={['compact', 'normal']}
          >
            <FormattedMessage id='heroSlogan' />
          </Text>
        </Box>
      </Column>
      <Box
        flexDirection={['row', 'column']}
        order={['1', '0']}
        flexGrow={[0, 2]}
        width={['90%', '56px']}
        height={['44px', '200px']}
        justifyContent='space-around'
        alignItems={['center', 'end']}
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
      <Layout flexBasis={[20, 40]} />
    </Box>
    <Layout flexBasis={[84, 210]} />
    <Box>
      <Layout flexBasis={[20, 230]} />
      <Column flexBasis={['90%', 1460]}>
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
          <Box display='inline'>
            <DefaultIcon width='40px' height='40px' />
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
          <Box display='inline'>
            <DefaultIcon width='40px' height='40px' />
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
        <Layout flexDirection='column' flexBasis={40} />
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
          <Box display='inline'>
            <DefaultIcon width='40px' height='40px' />
          </Box>
        </Box>
      </Column>
    </Box>
    <Layout flexBasis={[64, 160]} />
  </Box>
)
