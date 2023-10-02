import React                from 'react'

import { Divider }          from '@ui/divider'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'

import { Indent }           from './indent'
import { RunLine }          from './run-line'
import { technologiesList } from './technologies-list'
import { workspaceList }    from './technologies-list'

export const Technologies = () => (
  <Column fill>
    <Layout flexBasis={{ _: 32, standard: 64, wide: 128, ultra: 64 }} />

    <Divider backgroundColor='background.ghost' weight={1} />

    <Indent />

    <Row overflow='hidden'>
      <RunLine technologies={technologiesList} font='light' />
    </Row>

    <Indent />

    <Row overflow='hidden'>
      <RunLine technologies={workspaceList} font='secondary' />
    </Row>

    <Indent />

    <Divider backgroundColor='background.ghost' weight={1} />

    <Layout flexBasis={[32, 64]} />
  </Column>
)
