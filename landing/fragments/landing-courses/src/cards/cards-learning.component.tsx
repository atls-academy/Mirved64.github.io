import React              from 'react'

import { Card }           from '@ui/card'
import { Condition }      from '@ui/condition'
import { Layout }         from '@ui/layout'
import { Box }            from '@ui/layout'
import { useWindowWidth } from '@ui/utils'

import { CardCategory }   from '../data'
import { CardsList }      from '../data'

export const CardsLearning = () => {
  const { isMobile } = useWindowWidth()

  return (
    <Box flexDirection={{ _: 'column', standard: 'column', wide: 'row' }}>
      {CardsList.filter(
        (card) => card.category === CardCategory.Teach || card.category === CardCategory.MiniCourse
      ).map((card, index, array) => (
        <Box
          key={card.id}
          flexDirection={{ _: 'column', standard: 'column', wide: 'row' }}
          width='100%'
        >
          <Condition match={index !== 0}>
            <Layout flexBasis={[10, 20]} flexShrink='0' />
          </Condition>

          <Condition match={card.category === CardCategory.Teach && !isMobile}>
            <Card
              category={card.category}
              titleDesktop={card.title}
              description={card.descriptionDesktop}
              indent={{ standard: 214, wide: 356, ultra: 222 }}
              widthCategoryBox={{ standard: 104, wide: 156 }}
              image={card.image}
            />
          </Condition>

          <Condition match={card.category === CardCategory.Teach && isMobile}>
            <Card
              category={card.category}
              titleDesktop={card.title}
              description={card.descriptionMobile}
              indent={104}
              widthCategoryBox={80}
            />
          </Condition>

          <Condition match={card.category === CardCategory.MiniCourse && !isMobile}>
            <Card
              category={card.category}
              titleDesktop={card.title}
              description={card.descriptionDesktop}
              indent={{ standard: 56, wide: 356, ultra: 222 }}
              widthCategoryBox={{ standard: 112, wide: 167 }}
              image={card.image}
            />
          </Condition>

          <Condition match={card.category === CardCategory.MiniCourse && isMobile}>
            <Card
              category={card.category}
              titleDesktop={card.title}
              description={card.descriptionMobile}
              indent={49}
              widthCategoryBox={87}
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
