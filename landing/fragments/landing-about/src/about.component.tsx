import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Image }            from '@ui/image'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

export const About = () => (
  <Box backgroundColor='background.about' width='100%' flexDirection='column' margin='0 auto'>
    <Layout flexBasis={[64, 160]} flexShrink='0' />

    <Row>
      <Layout flexBasis={[20, 230]} flexShrink='0' />

      <Column flexBasis={[335, 1460]} flexGrow='1' flexShrink='1'>
        <Box display={['none', 'block']}>
          <Box display='inline'>
            <Text
              color='text.about.primary'
              fontSize='common'
              fontWeight='normal'
              lineHeight='huge'
              display='inline'
            >
              <FormattedMessage id='aboutTextIntroDesktop' />
            </Text>
          </Box>

          <Space count='8' />

          <Box display='inline-flex'>
            <Image src='./image/Default.png' width={40} height={40} />
          </Box>

          <Space count='8' />

          <Box display='inline'>
            <Text
              color='text.about.primary'
              fontSize='common'
              fontWeight='normal'
              lineHeight='huge'
              display='inline'
            >
              <FormattedMessage id='aboutTextProblemDesktop' />
            </Text>
          </Box>

          <Space count='8' />

          <Box display='inline-flex'>
            <Image src='./image/Default.png' width={40} height={40} />
          </Box>
        </Box>

        <Column display={['flex', 'none']}>
          <Box>
            <Text
              color='text.about.primary'
              fontSize='small'
              fontWeight='normal'
              lineHeight='normal'
            >
              <FormattedMessage id='aboutIntroMobile' />
            </Text>
          </Box>

          <Layout flexBasis={28} />

          <Box>
            <Text
              color='text.about.primary'
              fontSize='small'
              fontWeight='normal'
              lineHeight='normal'
            >
              <FormattedMessage id='aboutCentralIdeaMobile' />
            </Text>
          </Box>
        </Column>

        <Layout flexBasis={[0, 40]} />

        <Box display={['none', 'block']}>
          <Box display='inline'>
            <Text
              color='text.about.primary'
              fontSize='common'
              fontWeight='normal'
              lineHeight='huge'
              display='inline'
            >
              <FormattedMessage id='aboutCentralIdeaDesktop' />
            </Text>
          </Box>

          <Space count='8' />

          <Box display='inline-flex'>
            <Image src='./image/Default.png' width={40} height={40} />
          </Box>
        </Box>
      </Column>

      <Layout flexBasis={[20, 230]} />
    </Row>

    <Layout flexBasis={[64, 160]} />
  </Box>
)
