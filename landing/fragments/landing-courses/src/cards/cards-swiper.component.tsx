import React            from 'react'

import { Card }         from '@ui/card'
import { Condition }    from '@ui/condition'
import { Row }          from '@ui/layout'
import { Layout }       from '@ui/layout'
import { SwiperProps }  from '@ui/swiper'
import { Swiper }       from '@ui/swiper'
import { SwiperSlide }  from '@ui/swiper'

import { CardCategory } from '../data'
import { CardsList }    from '../data'

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
