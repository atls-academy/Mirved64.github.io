import React                from 'react'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Space }            from '@ui/text'

import { TextBlockAccent }  from './text-block'
import { TextBlockPrimary } from './text-block'

export const Info = () => (
  <Box flexDirection={['column', 'row']}>
    <Row maxWidth={{ _: 335, standard: 710, ultra: 1065 }} flexWrap='wrap'>
      <TextBlockPrimary id='courses.subtitle.power-broker' />

      <Space count={5} />

      <TextBlockAccent id='courses.subtitle.atlantis' />

      <Space count={5} />

      <TextBlockPrimary id='courses.subtitle.has' />

      <Space count={5} />

      <TextBlockPrimary id='courses.subtitle.impact-on' />

      <Space count={5} />

      <TextBlockAccent id='courses.subtitle.it' />

      <Space count={5} />

      <TextBlockPrimary id='courses.subtitle.unlimited' />

      <Space count={5} />

      <TextBlockPrimary id='courses.subtitle.possibilities' />

      <Space count={5} />

      <TextBlockAccent id='courses.subtitle.use-skills' />

      <TextBlockPrimary id='courses.subtitle.point' />
    </Row>

    <Layout flexBasis={20} flexGrow='1' />

    <Row maxWidth={{ _: 335, standard: 559, ultra: 840 }} flexWrap='wrap'>
      <TextBlockPrimary id='courses.subtitle.advantage-of-learning' />

      <Space count={5} />

      <TextBlockPrimary id='courses.subtitle.visibly' />

      <Space count={5} />

      <TextBlockPrimary id='courses.subtitle.grow' />

      <Space count={5} />

      <TextBlockAccent id='courses.subtitle.practice' />

      <Space count={5} />

      <TextBlockPrimary id='courses.subtitle.on' />

      <Space count={5} />

      <TextBlockPrimary id='courses.subtitle.existing-projects' />
    </Row>
  </Box>
)
