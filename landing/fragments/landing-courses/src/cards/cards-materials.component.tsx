import React            from 'react'

import { Card }         from '@ui/card'
import { Condition }    from '@ui/condition'
import { Row }          from '@ui/layout'
import { Layout }       from '@ui/layout'

import { CardCategory } from '../data'
import { CardsList }    from '../data'

export const CardsMaterials = () => (
  <Row>
    {CardsList.filter(
      (card) => card.category === CardCategory.EducationalMaterial && !card.isMobileOnly
    ).map((card, index, array) => (
      <Row key={card.id}>
        <Condition match={index === array.length - 1}>
          <Layout flexBasis={[10, 20]} flexShrink='0' />
        </Condition>

        <Card
          category={card.category}
          titleDesktop={card.title}
          indent={110}
          widthCategoryBox={180}
        />

        <Condition match={index === 0}>
          <Layout flexBasis={[10, 20]} flexShrink='0' />
        </Condition>
      </Row>
    ))}
  </Row>
)
