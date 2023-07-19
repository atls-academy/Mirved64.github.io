import React         from 'react'
import { useIntl }   from 'react-intl'

import { Box }       from '@ui/layout'
import { Row }       from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Column }    from '@ui/layout'

import { CardSmall } from './card-small'
import { CardsBig }  from './cards-big'

export const Cards = () => {
  const { formatMessage } = useIntl()

  return (
    <Column order={[2, 0]} flexBasis={[335, 1160]} flexGrow='1'>
      <Box>
        <CardsBig />
      </Box>

      <Layout flexBasis={[20, 40]} flexShrink='0' />

      <Row display={['none', 'flex']}>
        <CardSmall
          category={formatMessage({
            id: 'coursesSmallCardLearningMaterial',
          })}
          title={formatMessage({
            id: 'coursesSmallCardLibraries',
          })}
        />

        <Layout flexBasis={[20, 40]} flexShrink='0' />

        <CardSmall
          category={formatMessage({
            id: 'coursesSmallCardLearningMaterial',
          })}
          title={formatMessage({
            id: 'coursesSmallCardDesign',
          })}
        />
      </Row>
    </Column>
  )
}
