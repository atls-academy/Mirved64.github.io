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
  const { isMobile } = useWindowWidth()

  return (
    <Column flexGrow='1'>
      <Layout flexBasis={[64, 160]} />

      <Row>
        <Layout flexBasis={[20, 230]} />

        <Column flexBasis={[335, 1460]} flexGrow='1'>
          <Condition match={!isMobile}>
            <Box display='inline'>
              <Text
                display='inline'
                color='text.white'
                fontSize='common'
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
            <Box>
              <Text color='text.white' fontSize='small' lineHeight='huge'>
                <FormattedMessage id='about.intro-digital-mobile' />
              </Text>
            </Box>

            <Box>
              <Text color='text.white' fontSize='small' lineHeight='huge'>
                <FormattedMessage id='about.intro-not-decrease-mobile' />
              </Text>
            </Box>

            <Box>
              <Text color='text.white' fontSize='small' lineHeight='huge'>
                <FormattedMessage id='about.intro-for-your-decisions-mobile' />
              </Text>
            </Box>

            <Layout flexBasis={28} />

            <Box>
              <Text color='text.white' fontSize='small' lineHeight='huge'>
                <FormattedMessage id='about.central-idea-atlantis-teach-mobile' />
              </Text>
            </Box>

            <Box>
              <Text color='text.white' fontSize='small' lineHeight='huge'>
                <FormattedMessage id='about.central-idea-make-engineers-mobile' />
              </Text>
            </Box>

            <Box>
              <Text color='text.white' fontSize='small' lineHeight='huge'>
                <FormattedMessage id='about.central-idea-architects-mobile' />
              </Text>
            </Box>

            <Box>
              <Text color='text.white' fontSize='small' lineHeight='huge'>
                <FormattedMessage id='about.central-idea-not-programmers-mobile' />
              </Text>
            </Box>
          </Condition>

          <Layout flexBasis={[0, 40]} />

          <Condition match={!isMobile}>
            <Box display='inline'>
              <Text
                display='inline'
                color='text.white'
                fontSize='common'
                lineHeight='huge'
                wordWrap='break-word'
              >
                <FormattedMessage id='about.central-idea-desktop' />
              </Text>

              <Space count='6' />

              <Delimiter />
            </Box>
          </Condition>
        </Column>

        <Layout flexBasis={[20, 230]} />
      </Row>

      <Layout flexBasis={[128, 240]} />
    </Column>
  )
}
