import React                      from 'react'

import { Divider }                from '@ui/divider'
import { Box }                    from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Column }                 from '@ui/layout'

import { ItemsList }              from './items-list'
import { technologiesListTop }    from './technologies-list'
import { technologiesListBottom } from './technologies-list'

export const Technologies = () => (
  <Box backgroundColor='background.technologies' justifyContent='center'>
    <Column width='100%'>
      <Layout flexBasis={[32, 64]} />

      <Divider backgroundColor='divider.primary' weight='1px' />

      <Layout flexBasis={[36, 64]} />

      <ItemsList technologies={technologiesListTop} font='light' />

      <Layout flexBasis={[36, 64]} />

      <ItemsList technologies={technologiesListBottom} font='secondary' />

      <Layout flexBasis={[36, 64]} />

      <Divider backgroundColor='divider.primary' weight='1px' />

      <Layout flexBasis={[32, 64]} />
    </Column>
  </Box>
)
