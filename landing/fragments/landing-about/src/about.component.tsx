import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Condition }        from '@ui/condition'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'
import { useWindowWidth }   from '@ui/utils'

import { Delimiter }        from './delimiter'

export const About = () => {
  const { isMobile, isDesktop } = useWindowWidth()

  return (
    <Column flexGrow='1' alignItems='center'>
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
                <FormattedMessage id='about.intro-desktop' />
              </Text>

              <Space count='6' />

              <Delimiter />

              <Space count='6' />

              <Text
                display='inline'
                color='text.white'
                fontSize='common'
                fontWeight='normal'
                lineHeight='huge'
                wordWrap='break-word'
              >
                <FormattedMessage id='about.problem-desktop' />
              </Text>

              <Space count='14' />

              <Delimiter />
            </Box>
          </Condition>

          <Condition match={isMobile}>
            <Column>
              <Box>
                <Text color='text.white' fontSize='small' fontWeight='normal' lineHeight='normal'>
                  <FormattedMessage id='about.intro-mobile' />
                </Text>
              </Box>

              <Layout flexBasis={28} />

              <Box>
                <Text color='text.white' fontSize='small' fontWeight='normal' lineHeight='normal'>
                  <FormattedMessage id='about.central-idea' />
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
                <FormattedMessage id='about.central-idea' />
              </Text>

              <Space count='6' />

              <Delimiter />
            </Box>
          </Condition>
        </Column>

        <Layout flexBasis={[20, 230]} />
      </Row>

      <Layout flexBasis={[64, 160]} />
    </Column>
  )
}
