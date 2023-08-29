import React                from 'react'

import { Divider }          from '@ui/divider'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'

import { RunLine }          from './run-line'
import { technologiesList } from './technologies-list'
import { worckspaceList }   from './technologies-list'

export const Technologies = () => (
  <Column width='100%'>
    <Layout flexBasis={[32, 64]} />

    <Divider backgroundColor='background.ghost' weight={1} />

    <Layout flexBasis={[36, 64]} />

    <Row overflow='hidden'>
      <RunLine technologies={technologiesList} font='light' />
    </Row>

    <Layout flexBasis={[36, 64]} />

    <Row overflow='hidden'>
      <RunLine technologies={worckspaceList} font='secondary' />
    </Row>

    <Layout flexBasis={[36, 64]} />

    <Divider backgroundColor='background.ghost' weight={1} />

    <Layout flexBasis={[32, 64]} />
  </Column>
)
