import React          from 'react'

import { Card }       from '@ui/card'
import { Condition }  from '@ui/condition'
import { Row }        from '@ui/layout'
import { Layout }     from '@ui/layout'

import { useCourses } from '../data'

export const CardsMaterials = () => {
  const cards = useCourses()

  const cardsList: { label: string; labelId: number; title: string }[] = cards?.data?.courses.nodes
    .filter((obj) => obj.course.label[0].labelId === 194)
    ?.map((element) => ({
      label: element.course.label[0].title,
      title: element.course.title,
    }))
    .reverse()

  return (
    <Row>
      {cardsList?.map((card, index, array) => (
        <Row key={card.title}>
          <Condition match={index === array.length - 1}>
            <Layout flexBasis={[10, 20]} flexShrink='0' />
          </Condition>

          <Card label={card.label} title={card.title} indent={110} widthCategoryBox={180} />

          <Condition match={index === 0}>
            <Layout flexBasis={[10, 20]} flexShrink='0' />
          </Condition>
        </Row>
      ))}
    </Row>
  )
}
