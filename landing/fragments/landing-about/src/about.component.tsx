import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Condition }        from '@ui/condition'
import { Image }            from '@ui/image'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'
import { useWindowWidth }   from '@ui/utils'

export const About = () => {
  const { isMobile, isDesktop } = useWindowWidth()

  return (
    <Box justifyContent='center'>
      <Column flexGrow='1'>
        <Layout flexBasis={[64, 160]} />

        <Row>
          <Layout flexBasis={[20, 230]} />

          <Column flexBasis={[335, 1460]} flexGrow='1'>
            <Condition match={isDesktop}>
              <Box display='inline'>
                <Text
                  display='inline'
                  color='text.white'
                  fontSize='common'
                  fontWeight='normal'
                  lineHeight='huge'
                  wordWrap='break-word'
                >
                  <FormattedMessage id='aboutTextIntroDesktop' />
                </Text>

                <Space count='6' />

                <Box
                  display='inline-flex'
                  width={76}
                  height={52}
                  alignItems='center'
                  justifyContent='center'
                >
                  <Image src='./image/Default.png' width={40} height={40} />
                </Box>

                <Space count='6' />

                <Text
                  display='inline'
                  color='text.white'
                  fontSize='common'
                  fontWeight='normal'
                  lineHeight='huge'
                  wordWrap='break-word'
                >
                  <FormattedMessage id='aboutTextProblemDesktop' />
                </Text>

                <Space count='14' />

                <Box
                  display='inline-flex'
                  width={76}
                  height={52}
                  alignItems='center'
                  justifyContent='center'
                >
                  <Image src='./image/Default.png' width={40} height={40} />
                </Box>
              </Box>
            </Condition>

            <Condition match={isMobile}>
              <Column>
                <Box>
                  <Text color='text.white' fontSize='small' fontWeight='normal' lineHeight='normal'>
                    <FormattedMessage id='aboutIntroMobile' />
                  </Text>
                </Box>

                <Layout flexBasis={28} />

                <Box>
                  <Text color='text.white' fontSize='small' fontWeight='normal' lineHeight='normal'>
                    <FormattedMessage id='aboutCentralIdeaMobile' />
                  </Text>
                </Box>
              </Column>
            </Condition>

            <Layout flexBasis={[0, 40]} />

            <Condition match={isDesktop}>
              <Box display='inline'>
                <Text
                  display='inline'
                  color='text.white'
                  fontSize='common'
                  fontWeight='normal'
                  lineHeight='huge'
                  wordWrap='break-word'
                >
                  <FormattedMessage id='aboutCentralIdeaDesktop' />
                </Text>

                <Space count='6' />

                <Box
                  display='inline-flex'
                  width={76}
                  height={52}
                  alignItems='center'
                  justifyContent='center'
                >
                  <Image src='./image/Default.png' width={40} height={40} />
                </Box>
              </Box>
            </Condition>
          </Column>

          <Layout flexBasis={[20, 230]} />
        </Row>

        <Layout flexBasis={[64, 160]} />
      </Column>
    </Box>
  )
}
