import React          from 'react'

import { Card }       from '@ui/card'
import { Condition }  from '@ui/condition'
import { Layout }     from '@ui/layout'
import { Box }        from '@ui/layout'

import { useCourses } from '../data'

export const CardsLearning = () => {
  const cards = useCourses()

  const cardsList: {
    label: string
    labelId: number
    title: string
    description: string
    image: string
  }[] = cards?.data?.courses.nodes
    .filter((obj) => obj.course.label[0].labelId === 196 || obj.course.label[0].labelId === 252)
    ?.map((element) => ({
      label: element.course.label[0].title,
      labelId: element.course.label[0].labelId,
      title: element.course.title,
      description: element.course.description,
      image: element.course.image?.sourceUrl,
    }))
    .reverse()

  return (
    <Box flexDirection={{ _: 'column', standard: 'column', wide: 'row' }}>
      {cardsList?.map((card, index, array) => (
        <Box
          key={card.title}
          flexDirection={{ _: 'column', standard: 'column', wide: 'row' }}
          width='100%'
        >
          <Condition match={index !== 0}>
            <Layout flexBasis={[10, 20]} flexShrink='0' />
          </Condition>

          <Condition match={card.labelId === 196}>
            <Card
              label={card.label}
              title={card.title}
              description={card.description}
              indent={{ _: 104, standard: 214, wide: 356, ultra: 222 }}
              widthCategoryBox={{ _: 80, standard: 104, wide: 156 }}
              image={card.image}
            />
          </Condition>

          <Condition match={card.labelId === 252}>
            <Card
              label={card.label}
              title={card.title}
              description={card.description}
              indent={{ _: 49, standard: 56, wide: 356, ultra: 222 }}
              widthCategoryBox={{ _: 87, standard: 112, wide: 167 }}
              image={card.image}
            />
          </Condition>

          <Condition match={index !== array.length - 1}>
            <Layout flexBasis={[10, 20]} flexShrink='0' />
          </Condition>
        </Box>
      ))}
    </Box>
  )
}
