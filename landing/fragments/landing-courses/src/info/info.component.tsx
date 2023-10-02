import React                from 'react'

import { Condition }        from '@ui/condition/src'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Space }            from '@ui/text'
import { useWindowWidth }   from '@ui/utils/src'

import { TextBlockAccent }  from './text-block'
import { TextBlockPrimary } from './text-block'

export const Info = () => {
  const { isMobile } = useWindowWidth()

  return (
    <Box flexDirection={['column', 'row']}>
      <Row maxWidth={{ _: 335, standard: 710, ultra: 1065 }} flexWrap='wrap'>
        <TextBlockPrimary id='courses.subtitle.power-broker' />

        <Space count={isMobile ? 2 : 4} />

        <TextBlockAccent id='courses.subtitle.atlantis' />

        <Space count={isMobile ? 2 : 4} />

        <TextBlockPrimary id='courses.subtitle.has' />

        <Space count={isMobile ? 2 : 4} />

        <TextBlockPrimary id='courses.subtitle.impact-on' />

        <TextBlockAccent id='courses.subtitle.it' />

        <TextBlockPrimary id='courses.subtitle.unlimited' />

        <Space count={isMobile ? 2 : 4} />

        <TextBlockPrimary id='courses.subtitle.possibilities' />

        <Space count={isMobile ? 6 : 4} />

        <TextBlockPrimary id='courses.subtitle.in' />

        <TextBlockAccent id='courses.subtitle.use-skills' />

        <TextBlockPrimary id='courses.subtitle.point' />
      </Row>

      <Layout flexBasis={20} flexGrow='1' />

      <Row maxWidth={{ _: 335, standard: 559, ultra: 840 }} flexWrap='wrap'>
        <TextBlockPrimary id='courses.subtitle.advantage-of-learning' />

        <Space count={isMobile ? 2 : 5} />

        <TextBlockPrimary id='courses.subtitle.visibly' />

        <Space count={isMobile ? 2 : 5} />

        <TextBlockPrimary id='courses.subtitle.grow' />

        <Space count={isMobile ? 2 : 5} />

        <Condition match={isMobile}>
          <TextBlockPrimary id='courses.subtitle.because-mobile' />
        </Condition>

        <Condition match={!isMobile}>
          <TextBlockPrimary id='courses.subtitle.because-desktop' />
        </Condition>

        <Space count={isMobile ? 2 : 5} />

        <TextBlockAccent id='courses.subtitle.practice' />

        <Space count={isMobile ? 2 : 5} />

        <Condition match={isMobile}>
          <TextBlockPrimary id='courses.subtitle.existing-projects-mobile' />
        </Condition>

        <Condition match={!isMobile}>
          <TextBlockPrimary id='courses.subtitle.on-desktop' />

          <Space count={5} />

          <TextBlockPrimary id='courses.subtitle.existing-projects-desktop' />
        </Condition>
      </Row>
    </Box>
  )
}
