import React                        from 'react'
import { useIntl }                  from 'react-intl'

import { Row }                      from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Column }                   from '@ui/layout'

import { CardLearningMaterial }     from './card-learning-material'
import { CardsLearningAndCoursess } from './cards-learning-and-courses'

export const Cards = () => {
  const { formatMessage } = useIntl()

  return (
    <Column order={[2, 0]} flexBasis={[335, 1160]} flexGrow='1'>
      <CardsLearningAndCoursess />

      <Layout flexBasis={[20, 40]} flexShrink='0' />

      <Row display={['none', 'flex']}>
        <CardLearningMaterial
          category={formatMessage({
            id: 'coursesSmallCardLearningMaterial',
          })}
          title={formatMessage({
            id: 'coursesSmallCardLibraries',
          })}
        />

        <Layout flexBasis={[20, 40]} flexShrink='0' />

        <CardLearningMaterial
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
