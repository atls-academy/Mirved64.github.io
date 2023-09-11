import React                from 'react'

import { Condition }        from '@ui/condition'
import { Divider }          from '@ui/divider'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { useWindowWidth }   from '@ui/utils'

import { RunLine }          from './run-line'
import { technologiesList } from './technologies-list'
import { worckspaceList }   from './technologies-list'

export const Technologies = () => {
  const { isWideDesktop } = useWindowWidth()

  const Indent = () => <Layout flexBasis={[36, 64]} />

  return (
    <Column fill>
      <Condition match={isWideDesktop}>
        <Layout flexBasis={64} />
      </Condition>

      <Layout flexBasis={[32, 64]} />

      <Divider backgroundColor='background.ghost' weight={1} />

      <Indent />

      <Row overflow='hidden'>
        <RunLine technologies={technologiesList} font='light' />
      </Row>

      <Indent />

      <Row overflow='hidden'>
        <RunLine technologies={worckspaceList} font='secondary' />
      </Row>

      <Indent />

      <Divider backgroundColor='background.ghost' weight={1} />

      <Layout flexBasis={[32, 64]} />
    </Column>
  )
}
