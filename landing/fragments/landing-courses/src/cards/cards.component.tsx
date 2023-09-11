import React              from 'react'
import { FC }             from 'react'

import { Card }           from '@ui/card'
import { Condition }      from '@ui/condition'
import { Row }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Box }            from '@ui/layout'
import { SwiperProps }    from '@ui/swiper'
import { Swiper }         from '@ui/swiper'
import { SwiperSlide }    from '@ui/swiper'
import { useWindowWidth } from '@ui/utils'

import { CardsListWide }  from '../cards-list'
import { CardCellProps }  from './cards.interfaces'
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
              indent={{ standard: 214, wide: 356 }}
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
              indent={{ standard: 56, wide: 356 }}
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

export const CardsSwiper = ({ spaceBetween, slidesPerView, className }: SwiperProps) => (
  <Swiper spaceBetween={spaceBetween} slidesPerView={slidesPerView} className={className}>
    {CardsList.filter(
      (card) => card.category === CardCategory.EducationalMaterial && card.isMobileOnly
    ).map((card, index, array) => (
      <SwiperSlide key={card.id}>
        <Row>
          <Condition match={index === 0}>
            <Layout flexBasis={20} flexShrink='0' />
          </Condition>

          <Card
            category={card.category}
            titleMobile={card.title}
            isMobileOnly={card.isMobileOnly}
            indent={62}
            widthCategoryBox={142}
          />

          <Condition match={index === array.length - 1}>
            <Layout flexBasis={20} flexShrink='0' />
          </Condition>
        </Row>
      </SwiperSlide>
    ))}
  </Swiper>
)

export const CardsMaterialsWide = () => {
  const CardCell: FC<CardCellProps> = ({ index, category, title }) => (
    <>
      <Box flexDirection='column' width={{ wide: 572 }}>
        <Card category={category} titleDesktop={title} indent={110} widthCategoryBox={180} />

        <Condition match={index < 3}>
          <Layout flexBasis={40} />
        </Condition>
      </Box>

      <Condition match={index !== 2}>
        <Layout flexBasis={40} flexShrink='0' />
      </Condition>
    </>
  )

  return (
    <>
      {CardsListWide.map((card, index) => (
        <CardCell key={card.id} index={index} category={card.category} title={card.title} />
      ))}
    </>
  )
}
