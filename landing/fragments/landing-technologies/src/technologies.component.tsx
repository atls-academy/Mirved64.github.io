import React                from 'react'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'

import { ItemsList }        from './items-list'
import { technologiesList } from './technologies-list'
import { worckspaceList }   from './technologies-list'

export const Technologies = () => (
  <Box justifyContent='center'>
    <Column width='100%'>
      <Layout flexBasis={[32, 64]} />

      <Divider backgroundColor='divider.ghost' weight='1px' />

      <Layout flexBasis={[36, 64]} />

      <ItemsList technologies={technologiesList} font='light' />

      <Layout flexBasis={[36, 64]} />

      <ItemsList technologies={worckspaceList} font='secondary' />

      <Layout flexBasis={[36, 64]} />

      <Divider backgroundColor='divider.ghost' weight='1px' />

      <Layout flexBasis={[32, 64]} />
    </Column>
  </Box>
)
