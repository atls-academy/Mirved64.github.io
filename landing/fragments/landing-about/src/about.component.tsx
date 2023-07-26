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
    <Layout flexBasis={[64, 160]} />

    <Row>
      <Layout flexBasis={[20, 230]} />

      <Column flexBasis={[335, 1460]} flexGrow='1'>
        <Column display={['none', 'flex']}>
          <Box>
            <Text
              color='text.about.primary'
              fontSize='common'
              fontWeight='normal'
              lineHeight='huge'
            >
              <FormattedMessage id='aboutTextIntroFirstDesktop' />
            </Text>
          </Box>

          <Row>
            <Box>
              <Text
                color='text.about.primary'
                fontSize='common'
                fontWeight='normal'
                lineHeight='huge'
              >
                <FormattedMessage id='aboutTextIntroSecondDesktop' />
              </Text>
            </Box>

            <Space count='6' />

            <Box width={76} height={52} alignItems='center' justifyContent='center'>
              <Image src='./image/Default.png' width={40} height={40} />
            </Box>

            <Space count='6' />

            <Box>
              <Text
                color='text.about.primary'
                fontSize='common'
                fontWeight='normal'
                lineHeight='huge'
              >
                <FormattedMessage id='aboutTextProblemFirstDesktop' />
              </Text>
            </Box>
          </Row>

          <Row>
            <Box>
              <Text
                color='text.about.primary'
                fontSize='common'
                fontWeight='normal'
                lineHeight='huge'
              >
                <FormattedMessage id='aboutTextProblemSecondDesktop' />
              </Text>
            </Box>

            <Space count='14' />

            <Box width={76} height={52} alignItems='center' justifyContent='center'>
              <Image src='./image/Default.png' width={40} height={40} />
            </Box>
          </Row>
        </Column>

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

        <Column display={['none', 'flex']}>
          <Box>
            <Text
              color='text.about.primary'
              fontSize='common'
              fontWeight='normal'
              lineHeight='huge'
            >
              <FormattedMessage id='aboutCentralIdeaFirstDesktop' />
            </Text>
          </Box>

          <Row>
            <Box>
              <Text
                color='text.about.primary'
                fontSize='common'
                fontWeight='normal'
                lineHeight='huge'
              >
                <FormattedMessage id='aboutCentralIdeaSecondDesktop' />
              </Text>
            </Box>

            <Space count='6' />

            <Box width={76} height={52} alignItems='center' justifyContent='center'>
              <Image src='./image/Default.png' width={40} height={40} />
            </Box>
          </Row>
        </Column>
      </Column>

      <Layout flexBasis={[20, 230]} />
    </Row>

    <Layout flexBasis={[64, 160]} />
  </Box>
)
