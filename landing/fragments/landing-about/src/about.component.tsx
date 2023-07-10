import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Image }            from '@ui/image'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

export const About = () => (
  <Box backgroundColor='background.about' width='100%' flexDirection='column' margin='0 auto'>
    <Layout flexBasis={[64, 160]} flexShrink='0' />

    <Layout>
      <Layout flexBasis={[20, 230]} flexShrink='0' />

      <Column flexBasis={[335, 1460]} flexGrow='1' flexShrink='1'>
        <Box display={['none', 'inline']}>
          <Layout display='inline'>
            <Text
              color='text.about.primary'
              fontSize='common'
              fontWeight='normal'
              lineHeight='huge'
              display='inline'
            >
              <FormattedMessage id='aboutTextDigitalDesktop' />
            </Text>
          </Layout>

          <Space count='8' />

          <Box display='inline-flex'>
            <Image src='./image/Default.png' width={40} height={40} />
          </Box>

          <Space count='8' />

          <Layout display='inline'>
            <Text
              color='text.about.primary'
              fontSize='common'
              fontWeight='normal'
              lineHeight='huge'
              display='inline'
            >
              <FormattedMessage id='aboutTextButDesktop' />
            </Text>
          </Layout>

          <Space count='8' />

          <Box display='inline-flex'>
            <Image src='./image/Default.png' width={40} height={40} />
          </Box>
        </Box>

        <Column display={['flex', 'none']}>
          <Layout display='inline'>
            <Text
              color='text.about.primary'
              fontSize='small'
              fontWeight='normal'
              lineHeight='normal'
              display='inline'
            >
              <FormattedMessage id='aboutTextMobile' />
            </Text>
          </Layout>

          <Layout flexBasis={28} />

          <Layout display='inline'>
            <Text
              color='text.about.primary'
              fontSize='small'
              fontWeight='normal'
              lineHeight='normal'
              display='inline'
            >
              <FormattedMessage id='aboutTextAcademyDesktop' />
            </Text>
          </Layout>
        </Column>

        <Layout flexBasis={[0, 40]} />

        <Box display={['none', 'inline']}>
          <Layout display='inline'>
            <Text
              color='text.about.primary'
              fontSize='common'
              fontWeight='normal'
              lineHeight='huge'
              display='inline'
            >
              <FormattedMessage id='aboutTextAcademyMobile' />
            </Text>
          </Layout>

          <Space count='8' />

          <Box display='inline-flex'>
            <Image src='./image/Default.png' width={40} height={40} />
          </Box>
        </Box>
      </Column>

      <Layout flexBasis={[20, 230]} />
    </Layout>

    <Layout flexBasis={[64, 160]} />
  </Box>
)
