import React              from 'react'
import { FC }             from 'react'

import { Card }           from '@ui/card'
import { Condition }      from '@ui/condition'
import { Column }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { SwiperProps }    from '@ui/swiper'
import { Swiper }         from '@ui/swiper'
import { SwiperSlide }    from '@ui/swiper'
import { useWindowWidth } from '@ui/utils'

import { CardCategory }   from '../cards-list'
import { CadrsList }      from '../cards-list'

export const CardsLearning = () => {
  const { isMobile } = useWindowWidth()

  return (
    <Column>
      {CadrsList.filter(
        (card) => card.category === CardCategory.Teach || card.category === CardCategory.MiniCourse
      ).map((card) => (
        <Column key={card.id}>
          <Condition match={card.category === CardCategory.Teach && !isMobile}>
            <Card
              category={card.category}
              titleDesktop={card.title}
              description={card.descriptionDesktop}
              indent={214}
              widthCategoryBox={104}
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
              indent={56}
              widthCategoryBox={112}
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

          <Layout flexBasis={[20, 40]} />
        </Column>
      ))}
    </Column>
  )
}

export const CardsMaterials = () => (
  <Row>
    {CadrsList.filter(
      (card) => card.category === CardCategory.EducationalMaterial && !card.isMobileOnly
    ).map((card, index, array) => (
      <Row key={card.id}>
        <Condition match={index !== 0 && index !== array.length - 1}>
          <Layout flexBasis={[10, 20]} flexShrink='0' />
        </Condition>

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

        <Condition match={index !== 0 && index !== array.length - 1}>
          <Layout flexBasis={[10, 20]} flexShrink='0' />
        </Condition>
      </Row>
    ))}
  </Row>
)

export const CardsSwiper: FC<SwiperProps> = ({
  spaceBetween,
  slidesPerView,
  className,
}: SwiperProps) => (
  <Swiper spaceBetween={spaceBetween} slidesPerView={slidesPerView} className={className}>
    {CadrsList.filter(
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
