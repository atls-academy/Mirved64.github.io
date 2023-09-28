import React                from 'react'

import { Delimiter }        from '@ui/delimiter'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Space }            from '@ui/text'

import { DesktopTextBlock } from './text-block'
import { MobileTextBlock }  from './text-block'

export const About = () => (
  <Column flexGrow='1'>
    <Layout flexBasis={[64, 160]} />

    <Row>
      <Layout flexBasis={[20, 230]} />

      <Column flexBasis={[335, 1460]} flexGrow='1' flexShrink='0'>
        <Box display={['none', 'inline']}>
          <DesktopTextBlock id='about.intro-desktop' />

          <Space count='6' />

          <Delimiter />

          <Space count='6' />

          <DesktopTextBlock id='about.problem-desktop' />

          <Space count='6' />

          <Delimiter />
        </Box>

        <Column display={['flex', 'none']}>
          <MobileTextBlock id='about.intro-digital-mobile' />

          <MobileTextBlock id='about.intro-not-decrease-mobile' />

          <MobileTextBlock id='about.intro-for-your-decisions-mobile' />

          <Layout flexBasis={28} />

          <MobileTextBlock id='about.central-idea-atlantis-teach-mobile' />

          <MobileTextBlock id='about.central-idea-make-engineers-mobile' />

          <MobileTextBlock id='about.central-idea-architects-mobile' />

          <MobileTextBlock id='about.central-idea-not-programmers-mobile' />
        </Column>

        <Layout flexBasis={[0, 40]} />

        <Box display={['none', 'inline']}>
          <Box display='inline'>
            <DesktopTextBlock id='about.central-idea-desktop' />

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
