import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Delimiter }        from '@ui/delimiter'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

import { TextProps }        from './about.interfaces'

export const About = () => {
  const DesktopText: FC<TextProps> = ({ id }) => (
    <Text
      display='inline'
      color='text.white'
      fontSize='common'
      lineHeight='huge'
      wordWrap='break-word'
    >
      <FormattedMessage id={id} />
    </Text>
  )

  const MobileText: FC<TextProps> = ({ id }) => (
    <Box>
      <Text color='text.white' fontSize='small' lineHeight='huge'>
        <FormattedMessage id={id} />
      </Text>
    </Box>
  )

  return (
    <Column flexGrow='1'>
      <Layout flexBasis={[64, 160]} />

      <Row>
        <Layout flexBasis={[20, 230]} />

        <Column flexBasis={[335, 1460]} flexGrow='1' flexShrink='0'>
          <Box display={['none', 'inline']}>
            <DesktopText id='about.intro-desktop' />

            <Space count='6' />

            <Delimiter />

            <Space count='6' />

            <DesktopText id='about.problem-desktop' />

            <Space count='6' />

            <Delimiter />
          </Box>

          <Column display={['flex', 'none']}>
            <MobileText id='about.intro-digital-mobile' />

            <MobileText id='about.intro-not-decrease-mobile' />

            <MobileText id='about.intro-for-your-decisions-mobile' />

            <Layout flexBasis={28} />

            <MobileText id='about.central-idea-atlantis-teach-mobile' />

            <MobileText id='about.central-idea-make-engineers-mobile' />

            <MobileText id='about.central-idea-architects-mobile' />

            <MobileText id='about.central-idea-not-programmers-mobile' />
          </Column>

          <Layout flexBasis={[0, 40]} />

          <Box display={['none', 'inline']}>
            <Box display='inline'>
              <DesktopText id='about.central-idea-desktop' />

              <Space count='6' />

              <Delimiter />
            </Box>
          </Box>
        </Column>

        <Layout flexBasis={[20, 230]} />
      </Row>

      <Layout flexBasis={[128, 240]} />
    </Column>
  )
}
