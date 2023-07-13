import React                      from 'react'

import { Divider }                from '@ui/divider'
import { Box }                    from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Column }                 from '@ui/layout'

import { ItemsList }              from './items-list'
import { technologiesListTop }    from './technologies-list'
import { technologiesListBottom } from './technologies-list'

export const Technologies = () => (
  <Box
    backgroundColor='background.technologies'
    width='100%'
    margin='0 auto'
    flexDirection='column'
  >
    <Layout flexBasis={[32, 64]} />

    <Divider backgroundColor='divider.primary' weight='1px' />

    <Layout flexBasis={[36, 64]} />

    <Column>
      <ItemsList technologies={technologiesListTop} />

      <Layout flexBasis={[36, 64]} />

      <ItemsList technologies={technologiesListBottom} font='secondary' />
    </Column>

    <Layout flexBasis={[36, 64]} />

    <Divider backgroundColor='divider.primary' weight='1px' />

    <Layout flexBasis={[56, 64]} />
  </Box>
)
